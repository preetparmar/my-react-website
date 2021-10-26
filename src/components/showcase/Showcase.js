// Importing Files
import { Fragment } from "react";
import ShowcaseStyles from "./Showcase.module.css";
import Seperation from "../ui/seperation";

// Main Function
const Showcase = (props) => {
  return props.data.map((prop, index) => (
    <Fragment key={index}>
      <section className={ShowcaseStyles.showcaseContainer}>
        <div className={ShowcaseStyles.showcaseHeader}>
          <div className={ShowcaseStyles.titleBox}>
            <h1 className={ShowcaseStyles.title}>{prop.name}</h1>
            <p className={ShowcaseStyles.location}>({prop.location})</p>
            <p className={ShowcaseStyles.degree}>{prop.title}</p>
            <p className={ShowcaseStyles.course}>{prop.course}</p>
            <p className={ShowcaseStyles.timeFrame}>{prop.timeFrame}</p>
            <p className={ShowcaseStyles.timePeriod}>{prop.timePeriod}</p>
          </div>
          <div className={ShowcaseStyles.imageBox}>
            <img className={ShowcaseStyles.image} src={prop.image} alt="logo" />
          </div>
        </div>
        <div className={ShowcaseStyles.aboutContainer}>
          <p className={ShowcaseStyles.aboutIntro}>{prop.introText}</p>
          <ul className={ShowcaseStyles.aboutDetails}>
            {prop.details.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </section>
      <Seperation width={prop.width} />
    </Fragment>
  ));
};

export default Showcase;
