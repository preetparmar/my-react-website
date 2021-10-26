import React, { useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const ExternalLink = (props) => {
  useEffect(() => {
    window.location.assign(props.link);
  }, []);

  return (
    <div>
      {(window.location.href = "")};
      <LoadingScreen />
    </div>
  );
};

export default ExternalLink;
