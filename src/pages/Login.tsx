import React from "react"
import { Button } from "@material-ui/core"

export const Login = () => {
  const redirectUri = encodeURIComponent(
    `http://localhost:8080/spotify-callback`
  )
  const scope = encodeURIComponent(
    "user-top-read user-read-private user-read-email"
  )
  const clientId = "ef635fbff37e468db46dee87459d7537"

  return (
    <>
      <Button
        onClick={() => {
          window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
        }}
      >
        Spoitfyで登録
      </Button>
    </>
  )
}
