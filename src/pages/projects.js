// Importing Libraries
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

// Importing Components
import Navigation from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Introduction from "../components/introduction/Introduction";
// import Slider from "../components/carousel (COPY)/Slider";
import Carousel from "../components/carousel/Carousel";
import GoBackUp from "../components/go-back-up/GoBackUp";
import Footer from "../components/footer/Footer";

// Importing Data
import BannerData from "../resources/data/BannerData";
import IntroData from "../resources/data/IntroData";
import {
  pythonGames,
  myWebsite,
  websiteAnimations,
  telegramBot,
  apiProjects,
} from "../resources/data/ProjectsData";

// Main Function
const Projects = () => {
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
      <Carousel title="My Website" data={myWebsite} />
      <Carousel title="Telegram Bot" data={telegramBot} />
      <Carousel title="Python Games" data={pythonGames} />
      <Carousel title="My APIs" data={apiProjects} />
      <Carousel title="Website Animations" data={websiteAnimations} />
      <GoBackUp />
      <Footer />
    </Fragment>
  );
};

export default Projects;
