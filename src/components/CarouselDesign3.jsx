import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselDesign3 = ({ images }) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      
      <div className="imgslider   justify-center mx-auto mb-6 bg-slate-50 p-5">
        <Slider {...settings}>
          {images.map((item) => (
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
          ))}
        </Slider>
      </div>
    </>
  );
};
export default CarouselDesign3;
