import formBg from "./formBg.png";
import logo from "./logo.png";
import new3 from "./new3.png";
import form from "./form.png";
import slider1Bg from "./slider1Bg.png";


export const assets = {
  formBg,
  logo,
  new3,
  form,
  slider1Bg,
};

export const formBgImg = {
  backgroundImage: `url(${assets.formBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const containerStyle = {
  backgroundImage: `url(${assets.form})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
