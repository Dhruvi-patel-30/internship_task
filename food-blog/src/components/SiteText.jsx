import React from "react";

const SiteText = ({ text, style, className, icon }) => {
  return (
    <>
      <p style={style} className={className}>
        {text}
      </p>
    </>
  );
};

export default SiteText;
