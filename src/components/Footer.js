import React from "react";

function Footer() {
  return (
    <>
      <section className="footer">
        <a href="#" className="logo">
          <i className="bx bxs-movie"></i> Movies
        </a>
        <div className="social">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-tiktok"></i>
          </a>
        </div>
      </section>
      <div className="copyright">
        <p>&#169; All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
