import React from "react";
import Welcometoday from "./Welcome/Welcometoday";
import Features from "./Feature/Features";
import Testimonials from "./Testimonial/Testimonials";
import SlideShow from "./Slider/SlideShow";

const Wrapper = () => {
  return (
    <main>
      <Welcometoday />
      <Features />
      <Testimonials />
      <SlideShow />
    </main>
  );
};

export default Wrapper;
