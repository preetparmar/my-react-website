// Importing Libraries
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

// Importing Components
import Navigation from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Introduction from "../components/introduction/Introduction";
import Footer from "../components/footer/Footer";
import AboutCards from "../components/about-modals/AboutCards";
import AboutModal from "../components/about-modals/AboutModals";

// Importing Data
import BannerData from "../resources/data/BannerData";
import IntroData from "../resources/data/IntroData";
import { AboutCardsData, ModalData } from "../resources/data/AboutData";

// Main Function
const About = () => {
  // Getting the current page
  const currentSelection = useHistory().location.pathname.substring(1);
  const [newModalData, setNewModalData] = useState({});
  const [modalState, setModalState] = useState();

  const onSelectingCard = (value) => {
    setModalState(true);
    setNewModalData(ModalData[value]);
  };

  const closeModalHandler = () => {
    setModalState(false);
  };
  return (
    <Fragment>
      {modalState && (
        <AboutModal data={newModalData} onCloseEvent={closeModalHandler} />
      )}
      <Navigation />
      <Banner
        image={BannerData[`${currentSelection}`].bannerImage}
        title={BannerData[`${currentSelection}`].title}
        text={BannerData[`${currentSelection}`].text}
      />
      <Introduction introText={IntroData[`${currentSelection}`].text} />
      <AboutCards data={AboutCardsData} selectedCard={onSelectingCard} />
      <Footer />
      {/* {selectedData && (
        <AboutModals data={selectedData} modalStatus={onClosingModal} />
      )} */}
    </Fragment>
  );
};

export default About;
