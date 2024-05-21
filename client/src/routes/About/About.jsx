import React from "react";
import Hero from "../Hero/Hero";
import chrisVideo from "./Video/acn.mp4";
const About = () => {
  return (
    <>
      <Hero />
      <div></div>
      <section className='container'>
        <section className='row'>
          <div>
            <h1 style={{ textAlign: "center" }}>Get to know me</h1>
            <video
              style={{ boxShadow: "1rem 1rem 1rem 2rem lightgrey" }}
              src={chrisVideo}
              controls
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
