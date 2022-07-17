import React from "react";
import { IntroLine } from "../styles/IntroStyles";
import { BsMailbox2 } from "react-icons/bs";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ContactDisplay, ContactDisplayItem } from "../styles/Contactstyles";

const contactlist = [
  {
    heading: "Mail to",
    imgsrc: <BsMailbox2 />,
    content: "41ankitbisht@gmail.com",
    link : 'mailto:41ankitbisht@gmail.com'
  },
  {
    heading: "Contact",
    imgsrc: <BsPhoneVibrateFill />,
    content: "+918218101739",
    link : ''
  },
  {
    heading: "Linkedin",
    imgsrc: <BsLinkedin />,
    content: "linkedin.com/in/ankit-bisht-4442b4186/",
    link : 'https://www.linkedin.com/in/ankit-bisht-4442b4186/'
  },
  {
    heading: "GitHub",
    imgsrc: <BsGithub />,
    content: "github.com/41AnkitBisht",
    link : 'https://github.com/41AnkitBisht'
  },
];
const Contact = () => {
  return (
    <div style={{width: '80%', margin:'auto'}}>
      <IntroLine>Contact</IntroLine>
      <ContactDisplay>
        {contactlist.map((item, index) => (
          <ContactDisplayItem>
            {item.imgsrc}&nbsp;
            {item.heading} : <a style={{textDecoration: 'none'}} href ={item.link} target="_blank" rel="noreferrer">{item.content}</a>
          </ContactDisplayItem>
        ))}
      </ContactDisplay>
    </div>
  );
};

export default Contact;
