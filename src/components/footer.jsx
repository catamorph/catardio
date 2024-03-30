import React from "react";
import myImage from "../assets/dollars.png"; // Replace this path with your image

const Footer = () => {
  const numImages = 50; // The number of times you want the image repeated

  return (
    <div className="footer">
      {Array.from({ length: numImages }).map((_, index) => (
        <img
          key={index}
          src={myImage}
          alt="Footer Decor"
          className="footer-image"
          style={{ zIndex: 100 - index }}
        />
      ))}
    </div>
  );
};

export default Footer;
