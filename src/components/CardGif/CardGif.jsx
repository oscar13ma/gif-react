import React from 'react'
import './CardGif.css'

const CardGif = ({gif}) => {
  return (
    <div key={gif.id}>
        <h1>{gif.title}</h1>
        <img src={gif.url} alt={gif.title} />
        </div>
  )
}

export default CardGif;