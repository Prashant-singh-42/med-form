// import React from 'react'
// import ReactPlayer from 'react-player/youtube'
// // import {ReactPlayer} from 'react-player/file'
// import video from './Videos/video1.mp4'

// class Player extends React.Component {
//     render () {
//       return (
//           <div className='player-wrapper'>
//           <ReactPlayer
//             url={video}
//             className='react-player'
//             // playing='true'
//             width='100%'
//             height='100%'
//             // controls='true'
//           />
//         </div>
//       )
//     }
//   }
import './video-react.css'
import React from 'react';
import { Player } from 'video-react';

function PlayerNew(props) {
  console.log(props)
  return (
    <div className='Wrapper'>
        <Player
        playsInline
        poster="/assets/poster.jpg"
        src={`/assets/video${props.MovieID[1]}.mp4`}
        />
    </div>
  );
};

export default PlayerNew