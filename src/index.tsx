import React from "react"
import ReactDOM from "react-dom"
import { fake } from "./fake"

// https://musicle-server.herokuapp.com/

const App = () => {
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

ReactDOM.render(<App />, document.getElementById("root"))
