import React, { useState } from "react";
import ComingSoon from "../components/ComingMovies";
import Navbar from "../components/Navbar";
import Test from "../components/Test";
import { useParams } from 'react-router'
import comingSoonData from "../data/comingSoonData";


// freaking ask it later
function Searchpage() {
  // const [searchDisplay, setSearchDisplay] = useState([])
  const {query} = useParams()
  let temp = comingSoonData.filter((elem) => {
      return (
        elem.name.toLowerCase().includes(query.slice(1,query.length))
      )
    })

  return (
    <>
      <Navbar />
      <div className="searchpage-wrapper">
      <h2 className="heading">Movie Results for {query}</h2>
        <Test data={temp}/>
      </div>
      
    </>
  );
}

export default Searchpage;
