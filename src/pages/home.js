// Importing Libraries
import { Fragment } from "react";

// Importing Components
import Navigation from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import HomeDetails from "../components/home-details/HomeDetails";
import Cards from "../components/ui/Cards";
import Footer from "../components/footer/Footer";

// Importing Data
import BannerData from "../resources/data/BannerData";
import { HomeData, HomeCards } from "../resources/data/HomeData";

// Main Function
const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <Banner
        image={BannerData.home.bannerImage}
        title={BannerData.home.title}
        text={BannerData.home.text}
      />
      <HomeDetails data={HomeData} />
      <Cards data={HomeCards} />
      <Footer />
    </Fragment>
  );
};

export default Home;
