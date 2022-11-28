import React from "react";
import Test from "./Test";
import "./Test.css";
import { default as data } from "../data/comingSoonData";

function ComingSoon() {
  return (
    <section className="movies" id="movies">
      <h2 className="heading">Opening This Week</h2>
      {/* <!-- Movies --> */}
      <Test data={data} />
    </section>
  );
}

export default ComingSoon;
