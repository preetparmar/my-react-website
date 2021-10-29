// Importing Libraries
import React, { Fragment, useState, useEffect } from "react";

// Importing Font
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing Styles
import GoBackUpStyles from "./GoBackUp.module.css";

// Main Function
const GoBackUp = () => {
  // Defining State
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoToTop, setShowGoToTop] = useState("hide");

  const upIcon = <FontAwesomeIcon icon={faChevronCircleUp} />;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 450) {
        setShowGoToTop("");
      } else {
        setShowGoToTop("hide");
      }
    });
  }, []);

  return (
    <Fragment>
      <div
        className={`${GoBackUpStyles.mainContainer} ${GoBackUpStyles[showGoToTop]}`}
      >
        <p
          className={GoBackUpStyles.icon}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {upIcon}
        </p>
      </div>
    </Fragment>
  );
};

// Exporting
export default GoBackUp;
