// Importing Libraries
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

// Importing Components
import Navigation from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Introduction from "../components/introduction/Introduction";
import Showcase from "../components/showcase/Showcase";
import Footer from "../components/footer/Footer";
import GoBackUp from "../components/go-back-up/GoBackUp";

// TESTING
import Carousel from "../components/carousel/Carousel";
import { recommendations } from "../resources/data/RecommendationsData";
// TESTING END

// Importing Data
import BannerData from "../resources/data/BannerData";
import IntroData from "../resources/data/IntroData";
import ExperienceData from "../resources/data/ExperienceData";

// Main Function
const Experience = () => {
  // Getting the current page
  const currentSelection = useHistory().location.pathname.substring(1);

  return (
    <Fragment>
      <Navigation />
      <Banner
        image={BannerData[`${currentSelection}`].bannerImage}
        title={BannerData[`${currentSelection}`].title}
        text={BannerData[`${currentSelection}`].text}
      />
      <Introduction introText={IntroData[`${currentSelection}`].text} />
      {/* TESTING */}
      <Carousel title="Recommendations" data={recommendations} />

      {/* TESTING END */}
      <Showcase data={ExperienceData} />
      <GoBackUp />
      <Footer />
    </Fragment>
  );
};

export default Experience;
