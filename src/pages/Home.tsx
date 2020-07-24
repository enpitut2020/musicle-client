import React from "react"
import { fake } from "../fake"

export const Home = () => {
  return (
    <>
      <h2>あなたがSpotifyでよく聴く曲ランキング</h2>
      <ol>
        {fake.map((item) => (
          <li>
            {item.song_name} - {item.artist_name}
          </li>
        ))}
      </ol>
    </>
  )
}
