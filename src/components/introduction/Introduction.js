// Importing Libraries
import { Fragment } from "react";

// Importing Files
import IntroStyles from "./Introduction.module.css";
import Seperation from "../ui/seperation";

// Main Function
const Introduction = (props) => {
  return (
    <Fragment>
      <section className={IntroStyles.introContainer}>
        <p className={IntroStyles.introText}>{props.introText}</p>
      </section>
      <Seperation includeSeperator={props.includeSeperator} />
    </Fragment>
  );
};

// Export
export default Introduction;
