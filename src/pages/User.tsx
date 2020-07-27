import React, { useState, useEffect } from "react"
import { fake } from "../fake"
import { useParams } from "react-router-dom"
import { Typography, Container, Card, CardContent } from "@material-ui/core"

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
    setUser(fake)
  }, [userId])

  if (!user) {
    return <></>
  }

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
      </div>
    </Container>
  )
}
