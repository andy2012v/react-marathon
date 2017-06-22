import React from 'react'
import Playlist from './Playlist'

const PlaylistCollection = props => {
 let playlists = props.playlists.map(playlist => {
   let className;
   if (props.selectedPlaylistId === playlist.id) {
     className = 'selected';
   }

   return(
     <Playlist
     key = {playlist.id}
     name = {playlist.name}
     songs = {playlist.songs}
     className={className}
     />
   )
 })
 return(
   <ul>
   {playlists}
   </ul>
 )
}

export default PlaylistCollection;
