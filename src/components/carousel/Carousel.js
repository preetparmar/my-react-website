// Importing Files
import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import CarouselContent from "./CarouselContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./Carousel.css";
import Seperation from "../ui/seperation";

// Main Function Starts here
const Carousel = (props) => {
  const len = props.data.length - 1;

  // Defining State
  const [activeIndex, setActiveIndex] = useState(0);

  // Setting the autoplay feature using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  // Actual render
  if (props.data.length === 1) {
    return (
      <Fragment>
        <h2 className="projectTitle">{props.title}</h2>
        <div className="mainContainer">
          <div className="projectContainer">
            <div className="slidercontainer">
              <CarouselContent data={props.data} activeIndex={activeIndex} />
            </div>
          </div>
        </div>
        <Seperation width={props.width} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h2 className="projectTitle">{props.title}</h2>
      <div className="mainContainer">
        <div className="dotContainer">
          <Dots
            activeIndex={activeIndex}
            data={props.data}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
        <div className="projectContainer">
          <div className="slidercontainer">
            <CarouselContent activeIndex={activeIndex} data={props.data} />
          </div>
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
        </div>
      </div>
      <Seperation width={props.width} />
    </Fragment>
  );
};

// Exporting
export default Carousel;
