import React from "react";
import "../components/Gallery.sass";

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__box-img gallery__box-img_big">
        <img src="./images/gallery1.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img gallery__box-img_wide">
        <img src="./images/gallery4.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img">
        <img src="./images/gallery5.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img">
        <img src="./images/gallery6.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img">
        <img src="./images/gallery2.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img">
        <img src="./images/gallery3.jpg" alt="Laboratory" />
      </div>
      <div className="gallery__box-img gallery__box-img_wide">
        <img src="./images/gallery7.jpg" alt="Laboratory" />
      </div>
    </div>
  );
};
