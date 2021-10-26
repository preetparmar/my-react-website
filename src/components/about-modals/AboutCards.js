// Import Files
import { Fragment } from "react";
import CardsStyle from "../ui/Cards.module.css";
import ScrollToTop from "../ui/ScrollToTop";

// Main Function
const AboutCards = (props) => {
  return (
    <Fragment>
      <ScrollToTop />
      <section className={CardsStyle.mainContainer}>
        {props.data.map((prop, index) => (
          <div
            className={CardsStyle.container}
            key={index}
            onClick={() => props.selectedCard(prop.key)}
          >
            <div className={CardsStyle.imageContainer}>
              <img
                className={CardsStyle.image}
                src={prop.image}
                alt={prop.title}
              />
            </div>
            <h1 className={CardsStyle.title}>{prop.title}</h1>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

// Exporting
export default AboutCards;
