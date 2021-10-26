import { Fragment } from "react";
// import ImageCardsStyles from "./ImageCards.module.css";
import "./ImageCards.css";

const ImageCards = (props) => {
  return (
    // <Fragment>
    //   <section className={`${ImageCardsStyles.mainContainer} ${props.fit}`}>
    //     {props.data.map((image, index) => (
    //       <div className={ImageCardsStyles.container} key={index}>
    //         <div className={ImageCardsStyles.imageContainer}>
    //           <img className={ImageCardsStyles.image} src={image} alt="" />
    //         </div>
    //       </div>
    //     ))}
    //   </section>
    <Fragment>
      <section className="imagesMainContainer">
        {props.data.map((image, index) => (
          <div className="imagesContainer" key={index}>
            <div className="imageContainer">
              <img className="imageAbout" src={image} alt="" />
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default ImageCards;
