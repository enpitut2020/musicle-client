import React from "react"
import ReactDOM from "react-dom"
import { fake } from "./fake"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import "./index.css"

// https://musicle-server.herokuapp.com/

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Musicle</Typography>
        </Toolbar>
      </AppBar>
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
