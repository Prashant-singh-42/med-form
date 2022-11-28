import React from 'react'
import Navbar from '../components/Navbar'
import PlayerNew from '../components/video'
import './Videopage.css'
import { useParams } from 'react-router'


function Videopage() {

  const {MovieID} = useParams()

  return (
    <div className="wrapper-vp">
        <Navbar />
        <PlayerNew MovieID={MovieID} />
    </div>
  )
}

export default Videopage