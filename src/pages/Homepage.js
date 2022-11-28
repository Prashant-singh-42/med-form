import React from "react";
import Navbar from "../components/Navbar";
import Topmovie from "../components/Topmovie";
import ComingSoon from "../components/ComingMovies";
import ComingSoonMovies from "../components/ComingSoonMovies";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import SearchBar from "../components/SearchBar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Topmovie />
      <SearchBar />
      <ComingSoonMovies />
      <ComingSoon />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Homepage;
