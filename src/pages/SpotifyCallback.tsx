import React, { useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const host = true
  ? "http://localhost:3000"
  : "https://musicle-server.herokuapp.com"

export const SpotifyCallback = () => {
  const query = useQuery()
  const code = query.get("code")

  useEffect(() => {
    const load = async () => {
      const resp = await axios.get(`${host}/spotify-auth?code=${code}`)
      console.log(resp.data)
    }

    load()
  }, [])
  return <></>
}
