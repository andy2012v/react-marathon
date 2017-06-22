import React from 'react'

const Playlist = props =>{
  return(
    <li className={props.className}>{props.name}</li>
  )
}

export default Playlist
