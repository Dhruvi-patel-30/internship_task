import React from "react";
import Main from "../components/Main";
import Connected from "../components/Connected";
import ContactCard from "../components/ContactCard";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return <>
  <Main/>
  <ContactCard/>
  <ContactForm/> 
  <Map/>
  <Connected/> 
  </>
};

export default Contact;
