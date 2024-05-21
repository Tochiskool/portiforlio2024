import React, { useState } from "react";
import "./slideshow.css";

const images = [
  "https://i.imgur.com/Vdc2cX9.jpeg",
  "https://i.imgur.com/wXSlQe6.jpeg",
  "https://i.imgur.com/QFcjvXL.jpeg",
  "https://i.imgur.com/DHJvuah.jpeg",
  "https://i.imgur.com/SXaFYk3.jpeg",
  "https://i.imgur.com/iZGg7Il.jpeg",
];
let count = 0;
const SlideShow = () => {
  let [dogs, setDogs] = useState(images[count]);

  const handleNext = () => {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    setDogs(images[count]);
    console.log(count);
  };

  const handlePrevious = () => {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    setDogs(images[count]);
    console.log(count);
  };

  return (
    <section className='container'>
      <div className='row'>
        <div className='slideshow'>
          <button
            style={{ display: "block", margin: "0 auto" }}
            onClick={handleNext}
          >
            {"<<"}
          </button>
          <div className='slide-image remove-gutter-xs'>
            <img src={dogs} alt='puppy1' />
          </div>
          <div>
            <button
              style={{ display: "block", margin: "0 auto" }}
              onClick={handlePrevious}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
