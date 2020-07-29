import React from "react"
import ReactDOM from "react-dom"
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import { Switch, Route, Link, BrowserRouter } from "react-router-dom"
import "./index.css"
import { Home } from "./pages/Home"
import { SpotifyCallback } from "./pages/SpotifyCallback"
import { User } from "./pages/User"

const App = () => {
  return (
    <BrowserRouter>
      <AppBar position="static" style={{ backgroundColor: "#ff69b4" }}>
        <Toolbar>
          <Typography variant="h4" component={Link as any} as="h1" to="/">
            Musicle
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/spotify-callback">
          <SpotifyCallback />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Toolbar
        style={{
          backgroundColor: "#f0f0f0",
          marginTop: "auto",
        }}
      >
        <Typography>
          Created by しょうはやと, Jotei, あやねつん, ゆいき
        </Typography>
      </Toolbar>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
