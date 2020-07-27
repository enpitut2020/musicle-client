import React from "react"
import { Button } from "@material-ui/core"

const host = true ? "http://localhost:3000" : "https://musicle-app.web.app"

export const Login = () => {
  const redirectUri = encodeURIComponent(`${host}/spotify-callback`)
  const scope = encodeURIComponent(
    "user-top-read user-read-private user-read-email"
  )
  const clientId = "4ff85ab0e8334991bbfdbb920765ec70"

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
