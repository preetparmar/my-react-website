// Importing Library
import { Fragment } from "react";

// Main Function
const List = (props) => {
  return (
    <Fragment>
      <section className={`listContainer ${props.className}`}>
        <ul>
          {props.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

// Exporting
export default List;
