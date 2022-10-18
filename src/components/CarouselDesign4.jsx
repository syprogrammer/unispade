import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}; 

const CarouselDesign4 = ({ images }) => {
    const renderSlides = images.map((item) => (
            <div key={item.id}>
              <img src={item.url} alt={item.id} className="w-10 mx-auto" />
              <div className="child my-10 w-full bg-slate-200 p-5 ">
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
          ))
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        ssr={true} // means to render carousel on server-side.
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
       
      >
        {renderSlides}
      </Carousel>
    </>
  );
}

export default CarouselDesign4