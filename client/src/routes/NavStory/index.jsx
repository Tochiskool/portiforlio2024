import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navshow.css";
const NavStory = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header style={{ marginTop: "-2rem" }}>
      <h1>A-C-N</h1>
      <nav ref={navRef}>
        <Link className='btn-nav-style' to='/njanghi'>
          Home
        </Link>
        <Link className='btn-nav-style' to='/about'>
          About
        </Link>
        <Link className='btn-nav-style' to='/contact'>
          Contact
        </Link>
        <Link className='btn-nav-style' to='/projects'>
          Projects
        </Link>
        <button
          className='nav-btn'
          nav-close-btn
          onClick={showNavBar}
          style={{ position: "absolute", top: "2rem", right: "2rem" }}
        >
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavStory;
