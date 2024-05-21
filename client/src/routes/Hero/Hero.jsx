import React, { useState, useEffect } from "react";
import image from "./Images/acn2.jpeg";
import imageHero from "./Images/hero.jpeg";
import Navbar from "../Navbar/Navbar";
import "./Css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavStory from "../NavStory";
import { Link } from "react-router-dom";

const careers = [
  "I am a Programmer",
  "A Software engineer",
  "A Web Developer",
  "And am still studying hard",
];
let careerIndex = 0;
let charIndex = 0;
const Hero = () => {
  const [display, setDisplay] = useState("block");
  const [animateNow, setAnimateNow] = useState(
    `${careers[careerIndex].slice(0)}`
  );

  // Handle Animation
  const handleAnimation = () => {
    charIndex++;
    // console.log("You touched me")
    setAnimateNow(careers[careerIndex].slice(0, charIndex));
    if (charIndex === careers[careerIndex].length) {
      careerIndex++;
      charIndex = 0;
    }
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleAnimation();
    }, 400);
  }, [charIndex]);

  // Handle toggle
  const handleDisplay = () => {
    if (display === "none") {
      setDisplay("block");
      console.log("and me too");
    } else {
      setDisplay("none");
      console.log("NOW ME");
    }
  };

  return (
    <>
      {/* <header className='header-primary'>
        <div className='flexing'>
          <a className='logo logo-primary'>
            <img className='round' src={image} alt='Working desk' />
          </a>
          <div
            onClick={handleDisplay}
            className='btn display btn-primary btn-toggle-menu'
          >
            <FontAwesomeIcon icon={faBars} className={display} />
          </div>
          <Navbar style={{ display: display }} />
        </div>
      </header> */}
      <NavStory />
      <section className='hero hero-primary bg-image'>
        <img src={imageHero} />
        <div className='container'>
          <div className='hero-body'>
            <h1 className='hero-title'>Welcome to my Official Portfolio</h1>
            <h4 onClick={handleAnimation} className='hero-subtitle'>
              {animateNow}
            </h4>
            <button className='btn'>
              <Link
                to='https://www.linkedin.com/in/christian-n-awemu-6553491b9/'
                target='_blank'
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
