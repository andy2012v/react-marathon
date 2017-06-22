import React from 'react'

const Song = (props) => {
  return(
    <li className={props.className} onClick={props.individualSongSelect}>
      {props.name}-{props.artist}
    </li>
  )
}





export default Song;
