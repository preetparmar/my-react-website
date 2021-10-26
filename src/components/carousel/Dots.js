import React from "react";

function Dots({ activeIndex, onclick, data }) {
  return (
    <div className="allDots">
      {data.map((project, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
