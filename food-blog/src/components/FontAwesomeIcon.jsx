import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = ({ icon, style, className }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} style={style} className={className} />
    </>
  );
};

export default Icon;
