// Importing Libraries
import { Fragment } from "react";

// Importing Files
import "./Seperation.css";

const Seperation = (props) => {
  return (
    <Fragment>
      <div className={`seperation ${props.width}`}>{props.children}</div>
    </Fragment>
  );
};

export default Seperation;
