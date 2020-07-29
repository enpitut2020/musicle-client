import React from "react"
import { Button } from "@material-ui/core"
import { hostClient } from "./const"

export const Home = () => {
  const redirectUri = encodeURIComponent(`${hostClient}/spotify-callback`)
  const scope = encodeURIComponent("user-top-read")
  const clientId = "4ff85ab0e8334991bbfdbb920765ec70"

  return (
    <>
      <div className="font1">聴くことで世界は</div>
      <div className="font2">変わる</div>
      <div className="font3">
        Musicleは、あなたの音楽情報を分析して、SNSで共有できるサービスです。
        友達や知り合いと音楽情報を共有して、つながりを深めましょう：)
      </div>

      <div className="box">
        <div className="btn-gradient-radius">
          <Button
            onClick={() => {
              window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
            }}
            style={{ color: "#FFF" }}
          >
            Spoitfyに接続
          </Button>
        </div>

        <div className="font4">
          Spotifyに接続することで、
          たった一つのあなただけの情報を得ることが出来ます
        </div>
        <div className="font5">
          Spotifyからあなたの聴いた曲情報とアカウントネームの名前およびIDを分析のために取得します。
          また、あなたがよく聞く曲TOP5とSpotifyの名前は公開されます。
        </div>
      </div>

      <div className="auto">
        <div className="font1_2">音楽情報とは？</div>
        <div className="font4_2">『あなたがよく聞いてる曲TOP5』</div>
      </div>

      <div className="auto2">
        <div className="font4_3">1. Night Driver - 三浦春馬</div>
        <div className="font4_3">2. ぎゅっと - もさを。</div>
        <div className="font4_3">3. Angel - ちゃんみな</div>
        <div className="font4_3">4. 夜に駆ける - YOASOBI</div>
        <div className="font4_3">5. 香水 - 瑛人</div>
      </div>
    </>
  )
}
