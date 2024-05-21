import React from "react";
import Hero from "../Hero/Hero";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Hero />
      <section className='hero'>
        <div className='hero-body'>
          <p className='title'>List of my projects</p>
        </div>
        <ProjectCard />
      </section>
    </>
  );
};

export default Projects;
