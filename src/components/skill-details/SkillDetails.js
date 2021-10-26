// Importing Files
import { Fragment } from "react";
import Styles from "./SkillDetails.module.css";

// Main Function
const SkillDetails = (props) => {
  return (
    <Fragment>
      <section className={Styles.mainContainer}>
        {props.data.map((prop, index) => (
          <div key={index} className={Styles.skillContainer}>
            <div className={Styles.headerContainer}>
              <span className={Styles.logo}>{prop.logo}</span>
              <span className={Styles.headerText}>{prop.title}</span>
            </div>
            <div className={Styles.detailsContainer}>
              <ul>
                {prop.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

// Exporting
export default SkillDetails;
