import React from "react"
import { Button, Typography, Card, CardContent } from "@material-ui/core"
import { hostClient } from "./const"

export const Home = () => {
  const redirectUri = encodeURIComponent(`${hostClient}/spotify-callback`)
  const scope = encodeURIComponent("user-top-read")
  const clientId = "4ff85ab0e8334991bbfdbb920765ec70"

  return (
    <>
      <div className="back">
        <Typography className="font1">
          あなたの好みを可視化、
          <br />
          シェア
        </Typography>
        <Typography className="font3">
          Musicleは、あなたの音楽情報を分析して、SNSで共有できるサービスです。
          <br />
          友達や知り合いと音楽情報を共有して、つながりを深めましょう :)
        </Typography>
      </div>
      <div className="box">
        <div className="btn-gradient-radius">
          <Button
            onClick={() => {
              window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
            }}
            style={{ color: "#FFF", textTransform: "none", fontSize: "1.2em" }}
          >
            Spotifyに接続して共有
          </Button>
        </div>

        <Typography className="font4">
          Spotifyに接続することで、
          <br />
          たった一つのあなただけの情報を得ることが出来ます。
        </Typography>
        <Typography className="font5">
          ※
          Spotifyからあなたの聴いた曲情報とSpotify上のあなたの名前およびIDを分析のために取得・利用します。
          <br />※
          また、あなたがよく聞く曲TOP5とSpotify上のあなたの名前は公開されます。
        </Typography>
      </div>

      <div className="music-info">
        <Typography>
          <div className="font1_2">音楽情報とは？</div>
        </Typography>
        <Card style={{ margin: "16px" }}>
          <CardContent className="card">
            <Typography className="rankings">
              <div className="font4_2">『あなたがよく聞いてる曲TOP5』</div>
              <div>
                <div className="font4_3">1. Night Driver - 三浦春馬</div>
                <div className="font4_3">2. ぎゅっと - もさを。</div>
                <div className="font4_3">3. Angel - ちゃんみな</div>
                <div className="font4_3">4. 夜に駆ける - YOASOBI</div>
                <div className="font4_3">5. 香水 - 瑛人</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
