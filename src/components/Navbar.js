import { React } from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import './Navbar.css'

function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={scroll?"shadow":""}>
      <Link
        className="logo"
        to={'/'}
      >
        <i className="bx bxs-movie"></i> Movies
      </Link>
      <div className="bx bx-menu" id="menu-icon"></div>

      {/* <!-- Menu --> */}
      <ul className="navbar">
        <li>
          <Link
          to={'/'}
          className="home-active">
            Home
          </Link>
        </li>
        <li>
          <a href="#movies">Movies</a>
        </li>
        <li>
          <a href="#coming">Coming</a>
        </li>
        <li>
          <a href="#newsletter">Newsletter</a>
        </li>
      </ul>
      <a href="#" className="btn">
        Sign In
      </a>
    </header>
  );
}

export default Navbar;
