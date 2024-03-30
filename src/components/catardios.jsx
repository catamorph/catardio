import React, { useEffect, useState } from "react";
import myImage from "../assets/catardio.png"; // Replace this path with your image

const BouncingImages = () => {
  const numImages = 10;
  const [images, setImages] = useState([]);

  // Initialize or reset images with random positions and velocities
  const resetImages = () => {
    setImages(
      Array.from({ length: numImages }).map(() => ({
        x: Math.random() * (window.innerWidth - 100), // Avoid starting too close to the edge
        y: Math.random() * (window.innerHeight - 100),
        vx: (Math.random() - 0.5) * 10, // Velocity in pixels per frame
        vy: (Math.random() - 0.5) * 10,
      }))
    );
  };

  useEffect(() => {
    resetImages();
    // Update function moves each image and checks for collisions
    const update = () => {
      setImages((currentImages) =>
        currentImages.map((img) => {
          let { x, y, vx, vy } = img;
          x += vx;
          y += vy;

          // Check for collisions with the viewport boundaries
          if (x <= 0 || x >= window.innerWidth - 100) vx *= -1;
          if (y <= 0 || y >= window.innerHeight - 100) vy *= -1;

          return { x, y, vx, vy };
        })
      );
    };

    const intervalId = setInterval(update, 20); // Update every 20ms (~50 frames per second)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bouncing-images-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={myImage}
          className="bouncing-image"
          alt="Bouncing"
          style={{
            left: `${img.x}px`,
            top: `${img.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingImages;
