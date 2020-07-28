import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from "@material-ui/core"
import { Twitter } from "@material-ui/icons"
import axios from "axios"
import { hostServer } from "./const"

type Song = {
  name: string
  artistName: string
}

type User = {
  name: string
  topSongs: Song[]
}

export const User = () => {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // TODO: api
    const load = async () => {
      const resp = await axios.get(`${hostServer}/users/${userId}`)
      setUser(resp.data)
    }
    load()
  }, [userId])

  if (!user) {
    return <></>
  }

  const shareText = `${user.name} さんがよく聴いている曲\n${user.topSongs
    .slice(0, 3)
    .map((song, idx) => `${idx + 1}. ${song.name}\n`)
    .join("")}${window.location.href}`

  return (
    <Container>
      <Typography variant="h3">{user.name} さんのプロフィール</Typography>
      <div
        style={{
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4" style={{ marginTop: "40px" }}>
              『 あなたがよく聴いている曲 』
            </Typography>
            <Typography variant="h5" style={{ marginTop: "32px" }}>
              <ol>
                {user.topSongs.map((item, idx) => (
                  <li key={idx} style={{ marginTop: "16px" }}>
                    {item.name} - {item.artistName}
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}`}
          target="_blank"
        >
          <Button
            variant="contained"
            startIcon={<Twitter />}
            style={{
              textTransform: "none",
              backgroundColor: "#1DA1F2",
              width: "100%",
              padding: "24px",
              marginTop: "24px",
              color: "white",
            }}
          >
            Twitter で共有
          </Button>
        </a>
      </div>
    </Container>
  )
}
