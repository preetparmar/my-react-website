// Importing Components
import { HomeCards } from "./HomeData";

// Importing Images
import homeImage from "../images/banners/home.jpg";

const HomeLinkData = { title: "Home", image: homeImage, link: "/home" };

const NavigationCards = [HomeLinkData, ...HomeCards];

export default NavigationCards;
