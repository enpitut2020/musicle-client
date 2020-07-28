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

  const bgColor = "#FF69B4"

  const img = text2png(txt, {
    color: "white",
    backgroundColor: bgColor,
    padding: 20,
    lineSpacing: 10,
    textAlign: "center",
    font: "64px Roboto",
    localFontPath: path.join(__dirname, "./fonts/Roboto-Medium.ttf"),
    localFontName: "Roboto",
  })

  const buf = await sharp(img)
    .resize(1200, 630, {
      fit: "contain",
      background: bgColor,
    })
    .png()
    .toBuffer()
  res.type("image/png").send(buf)
})
