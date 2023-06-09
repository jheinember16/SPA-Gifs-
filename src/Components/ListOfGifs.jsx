import React, { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  const { keyword } =  params
  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if(loading) return <i>Loading ....</i>

  return <>
      {
        gifs.map(({id, title, url}) => 
        <Gif 
        key={id} 
        title={title} 
        id={id} url={url} 
        />
      )}
    </>
  
}
