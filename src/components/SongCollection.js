import React, { Component } from 'react'
import Song from './Song'

class SongCollection extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    let songs = this.props.songs.map(song => {
      let className;
      if(song.id === this.props.selectedSongId){
        className = 'selected'
      }

      let individualSongSelect = () => {
        this.props.handleClick(song.id)
      }

      return(
        <Song
        key = {song.id}
        id = {song.id}
        name = {song.name}
        artist = {song.artist}
        album = {song.album}
        className={className}
        individualSongSelect={individualSongSelect}
        />
      )
    })
    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection;
