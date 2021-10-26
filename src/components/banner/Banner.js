// Importing Libraries
import { Fragment } from "react";

// Importing Files
import BannerStyles from "./Banner.module.css";

// Main Function
const Banner = (props) => {
  return (
    <Fragment>
      <section className={BannerStyles.bannerSection}>
        <div className={BannerStyles.headerFill}></div>
        <div className={BannerStyles.bannerContainer}>
          <div className={BannerStyles.imageContainer}>
            <img
              className={BannerStyles.bannerImage}
              src={props.image}
              alt={props.altText}
            />
          </div>
          <div className={BannerStyles.textContainer}>
            <h2 className={BannerStyles.title}>{props.title}</h2>
            <p className={BannerStyles.thought}>{props.text}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

// Exporting
export default Banner;
