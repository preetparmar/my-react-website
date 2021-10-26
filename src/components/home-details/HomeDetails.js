// Main Function
import { Fragment } from "react";

// Importing Files
import HomeStyles from "./HomeDetails.module.css";
import List from "../ui/List";
import Seperation from "../ui/seperation";

// Main Function
const HomeDetails = (props) => {
  return (
    <Fragment>
      <section className={HomeStyles.mainContainer}>
        <p className={HomeStyles.thought}>{props.data.thought}</p>
        <List className={HomeStyles.details} listItems={props.data.details} />
        <Seperation />
      </section>
    </Fragment>
  );
};

// Exporting
export default HomeDetails;
