import React, { useState, useEffect } from "react";

const CarouselDesign2 = ({photos}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // After every 2s interval next function is called
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <>
      {/* Render the carousel */}
      <div className="slider-container mx-auto  ">
        {photos.map((photo) => (
          <div
            key={photo.id}
            // if the photo is the current photo, show it
            className={
              photos[currentIndex].id === photo.id ? "fade" : "slide fade"
            }
          >
            <div className=" flex flex-col justify-center mx-auto">
              <img src={photo.url} alt={photo.title} className="photo w-48 mx-auto" />
              <div className="child my-10 w-full ">
                <div className=" p-2 flex gap-x-10 flex-row  justify-center rounded-lg ">
                  <img
                    src={photo.childurl1}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <img
                    src={photo.childurl2}
                    alt=""
                    className=" h-8 w-8 rounded-full"
                  />
                  <img
                    src={photo.childurl3}
                    alt=""
                    className=" w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </>
  );
};

export default CarouselDesign2;
