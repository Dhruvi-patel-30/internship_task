import React from "react";
import FontAwasomeIcon from "./FontAwesomeIcon";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const icons = [faFacebookF, faInstagram, faPinterestP, faYoutube];

const FooterIcons = () => {
  return (
    <>
      <div className="d-flex gap-2">
        {icons.map((i, index) => (
          <div
            key={index}
            className=" p-2 rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              height: "30px",
              width: " 30px",
              backgroundColor: "rgba(241, 240, 226, 1.00)",
              padding: "5px",
              border: "1px solid rgb(207, 212, 177)",
            }}
          >
            <FontAwasomeIcon icon={i} style={{ color: "rgb(65, 74, 9)" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterIcons;
