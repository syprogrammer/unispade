import React, { useState, useEffect } from "react";

const CarouselDesign1 = ({photos}) => {
  
  const [currentIndex, setcurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === photos.length - 1) {
      return setcurrentIndex(0);
    }
    return setcurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="flex">
        {photos.map((item, index) => {
          return (
            <>
              <div className="main-container flex flex-col gap-10px w-full bg-slate-100 ">
                {/* main images */}
                <div
                  className="carousl-item flex flex-col "
                  style={{
                      transform: `translate(-${currentIndex * 50}%)`,
                      scale:`$(currentIndex*1.5)`
                  }}
                >
                  <div className="img-co mx-10 lg:mx-56 flex flex-col justify-center my-5 w-full ">
                    <div className="xyz-contain  p-2 mx-auto  ">
                      <img src={item.url} alt="" className=" h-10 mx-32 " />
                      <div className="child my-10 w-full  ">
                        <div className=" p-2 flex gap-x-10 flex-row  justify-center rounded-lg">
                          <img
                            src={item.childurl1}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                          <img
                            src={item.childurl2}
                            alt=""
                            className=" h-8 w-8 rounded-full"
                          />
                          <img
                            src={item.childurl3}
                            alt=""
                            className=" w-8 h-8 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CarouselDesign1;
