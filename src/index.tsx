import React from "react"
import ReactDOM from "react-dom"
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import {
  HashRouter,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"
import "./index.css"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link as any} as="h1" to="/">
            Musicle
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mt={2} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
