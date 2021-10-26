// Importing Files
import { Fragment } from "react";
import CarouselStyles from "./Carousel.module.css";
import CarouselContent from "./CarouselContent";
import Arrows from "./Arrows";

// Importing Data
import ProjectsData from "../../resources/data/ProjectsData";
// Main Function
const Carousel = () => {
  return (
    <Fragment>
      <div className={CarouselStyles.mainContainer}>
        <div className={CarouselStyles.carouselContainer}>
          <Arrows />
          <CarouselContent
            className={CarouselStyles.contentContainer}
            data={ProjectsData}
          />
          {/* <Dots /> */}
        </div>
      </div>
    </Fragment>
  );
};

// Exporting
export default Carousel;
