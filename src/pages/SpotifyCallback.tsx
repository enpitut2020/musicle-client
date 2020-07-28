import React, { useEffect } from "react"
import axios from "axios"
import { useLocation, useHistory } from "react-router-dom"
import { hostClient, hostServer } from "./const"

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const SpotifyCallback = () => {
  const query = useQuery()
  const code = query.get("code")

  const history = useHistory()

  useEffect(() => {
    const load = async () => {
      const resp = await axios.get(
        `${hostServer}/spotify-auth?code=${code}&redirect_uri=${hostClient}/spotify-callback`
      )

      history.push(`/users/${resp.data.uid}`)
    }

    load()
  }, [])
  return <></>
}
