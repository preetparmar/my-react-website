// Importing Libraries
import { Fragment } from "react";

// Importing Components
import Cards from "../ui/Cards";
import NavOpenStyles from "./NavigationOpen.module.css";

// Importing Data
import NavigationCards from "../../resources/data/NavigationCards";

// Main Function
const NavigationOpen = (props) => {
  return (
    <Fragment>
      <section className={`${NavOpenStyles.mainContainer} ${props.className}`}>
        <Cards
          data={NavigationCards}
          className={NavOpenStyles.cardsContainer}
        />
      </section>
    </Fragment>
  );
};

// Exporting
export default NavigationOpen;
