import { Fragment } from "react";
// import { Link } from "react-router-dom";
import "./CarouselContent.css";

function CarouselContent({ activeIndex, data }) {
  return (
    <Fragment>
      {data.map((project, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="contentContainer">
            {project.title && (
              <div className="headerContainer">
                <h1 className="headerText">{project.title}</h1>
              </div>
            )}
            <div className={`detailContainer ${project.style} ${project.type}`}>
              {project.image && (
                <img className="image" src={project.image} alt="" />
              )}
              <p className="detail">{project.detail}</p>
            </div>
            {project.link && (
              <div className="codeContainer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="codeText"
                >
                  {/* Link to code */}
                  Project Link
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default CarouselContent;
