// Importing Files
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./AboutModals.module.css";

// Importing Components
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ImageCards from "./ImageCards";
import List from "../ui/List";

// Import Data
// import { ModalData } from "../../resources/data/AboutData";

// Main Function
const AboutModals = (props) => {
  const crossLogo = <FontAwesomeIcon icon={faTimes} />;

  const backdropClipHandler = (event) => {
    event.target === event.currentTarget && props.onCloseEvent();
  };

  const closeButtonClickHandler = () => {
    props.onCloseEvent();
  };

  return (
    <Fragment>
      {/* <section>
        <div className={Styles.backdrop} onClick={backdropClipHandler}>
          <div className={Styles.modalContainer}>
            <span
              className={Styles.closeModal}
              onClick={closeButtonClickHandler}
            >
              {crossLogo}
            </span>
            <div className={Styles.textContainer}>
              <h1 className={Styles.title}>{props.data.title}</h1>
              <p className={Styles.thought}>{props.data.thought}</p>
              <p className={Styles.detail}>{props.data.detail}</p>
            </div>
            {props.data.list && (
              <List className={Styles.list} listItems={props.data.list} />
            )}
            <div className={Styles.imageContainer}>
              <ImageCards data={props.data.images} />
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className={Styles.backdrop} onClick={backdropClipHandler}>
          <div className={Styles.modalContainer}>
            <h1 className={Styles.title}>{props.data.title}</h1>
            <div className={Styles.modalContent}>
              <span
                className={Styles.closeModal}
                onClick={closeButtonClickHandler}
              >
                {crossLogo}
              </span>
              <div className={Styles.textContainer}>
                {/* <h1 className={Styles.title}>{props.data.title}</h1> */}
                <p className={Styles.thought}>{props.data.thought}</p>
                <p className={Styles.detail}>{props.data.detail}</p>
              </div>
              {props.data.list && (
                <List className={Styles.list} listItems={props.data.list} />
              )}
              <div className={Styles.imageContainer}>
                <ImageCards data={props.data.images} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
// Exporting
export default AboutModals;
