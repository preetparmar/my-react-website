// Importing Files
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ContentStyles from "./CarouselContent.module.css";

// Main Function
const CarouselContent = (props) => {
  return props.data.map((prop, index) => (
    <Fragment key={index}>
      <section
        className={`${ContentStyles.contentContainer} ${props.className}`}
      >
        <div className={ContentStyles.headerContainer}>
          <h1 className={ContentStyles.headerText}>{prop.title}</h1>
        </div>
        <div
          className={`${ContentStyles.detailContainer} ${
            ContentStyles[prop.style]
          }`}
        >
          <img className={ContentStyles.image} src={prop.image} alt="" />
          <p className={ContentStyles.detail}>{prop.detail}</p>
        </div>
        <div className={ContentStyles.codeContainer}>
          <Link
            to={prop.link}
            target="_blank"
            className={ContentStyles.codeText}
          >
            Link to code
          </Link>
        </div>
      </section>
    </Fragment>
  ));
};

// Exporting
export default CarouselContent;
