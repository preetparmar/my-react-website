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

// Importing Data
import BannerData from "../resources/data/BannerData";
import IntroData from "../resources/data/IntroData";
import EducationData from "../resources/data/EducationData";

// Main Function
const Education = () => {
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
      <Showcase data={EducationData} />
      <GoBackUp />
      <Footer />
    </Fragment>
  );
};

export default Education;
