import { Fragment } from "react";
import logoImage from "../../resources/images/logo/logo.png";
import "./LoadingScreen.css";

// Main Function
const LoadingScreen = () => {
  return (
    <Fragment>
      <div className="loadingContainer">
        <div className="loadingImageContainer">
          <img className="laodingImage" src={logoImage} alt=""></img>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingScreen;
