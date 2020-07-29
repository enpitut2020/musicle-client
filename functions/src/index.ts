import * as functions from "firebase-functions"
import * as fs from "fs"
import * as path from "path"
import * as sharp from "sharp"
import * as text2png from "text2png"
import axios from "axios"

export const addOgTagsInPost = functions.https.onRequest((req, res) => {
  const uid = req.path.split("/")[2]
  const ogTags =
    '<meta name="twitter:card" content="summary_large_image"></meta>' +
    '<meta property="og:title" content="Musicle" />' +
    '<meta property="og:description" content="Musicleは、あなたの音楽情報を分析して、 SNSで共有できるサービスです。" />' +
    `<meta property="og:image" content="https://us-central1-musicle-app.cloudfunctions.net/provideOgImage?uid=${uid}" />`
  const htmlFile = fs.readFileSync(path.join(__dirname, "./index.html"))
  const html = htmlFile.toString().replace(`</head>`, `${ogTags}</head>`)
  res.send(html)
})

export const provideOgImage = functions.https.onRequest(async (req, res) => {
  const resp = await axios.get(
    `https://musicle-server.herokuapp.com/users/${req.param("uid")}`
  )
  const user = resp.data
  const txt = `${user.name} さんがよく聴いている曲\n${user.topSongs
    .slice(0, 3)
    .map((song: any, idx: number) => `${idx + 1}. ${song.name}\n`)
    .join("")
    .trim()}`

  const textBuf = text2png(txt, {
    color: "white",
    paddingTop: 64,
    paddingBottom: 20,
    paddingRight: 72,
    paddingLeft: 72,
    lineSpacing: 10,
    textAlign: "center",
    font: "64px Roboto",
    localFontPath: path.join(__dirname, "./resources/Roboto-Medium.ttf"),
    localFontName: "Roboto",
  })

  const resizedTextBuf = await sharp(textBuf)
    .resize(1218, 648, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  const buf = await sharp(path.join(__dirname, "./resources/bg.png"))
    .composite([
      {
        input: resizedTextBuf,
      },
    ])
    .png()
    .toBuffer()
  res.type("image/png").send(buf)
})
