import React from "react";

function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <h2>
        Subscribe To Get <br />
        Newsletter
      </h2>
      <form action="">
        <input
          type="email"
          className="email"
          placeholder="Enter Email..."
          required
        />
        <input type="submit" value="Subscribe" className="btn" />
      </form>
    </section>
  );
}

export default Newsletter;
