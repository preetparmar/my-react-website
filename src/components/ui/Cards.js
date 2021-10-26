// Import Files
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CardsStyle from "./Cards.module.css";
import ScrollToTop from "../ui/ScrollToTop";

// Main Function
const Cards = (props) => {
  return (
    <Fragment>
      <ScrollToTop />
      <section className={`${CardsStyle.mainContainer} ${props.className}`}>
        {props.data.map((prop, index) => (
          <Link
            key={index}
            className={CardsStyle.container}
            to={prop.link}
            target={prop.target}
          >
            <div className={CardsStyle.imageContainer}>
              <img
                className={CardsStyle.image}
                src={prop.image}
                alt={prop.title}
              />
            </div>
            <h1 className={CardsStyle.title}>{prop.title}</h1>
          </Link>
        ))}
      </section>
    </Fragment>
  );
};

// Exporting
export default Cards;
