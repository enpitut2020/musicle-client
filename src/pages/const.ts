const isDebug = true

export const hostServer = isDebug
  ? "http://localhost:3000"
  : "https://musicle-server.herokuapp.com"

export const hostClient = isDebug
  ? "http://localhost:8080"
  : "https://musicle-app.web.app"
