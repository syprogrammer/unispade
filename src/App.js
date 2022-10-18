import "./App.css";
import CarouselDesign1 from "./components/CarouselDesign1";
import CarouselDesign2 from "./components/CarouselDesign2";
import Header from "./components/Header";
import Lower from "./components/Lower";
import Navbar from "./components/Navbar";
import images from "./images";
import { Routes, Route } from "react-router-dom";
import CarouselDesign3 from "./components/CarouselDesign3";
import CarouselDesign4 from "./components/CarouselDesign4";
function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<CarouselDesign3 images={images} />} />
        <Route path="design2" element={<CarouselDesign2 photos={images} />} />
        <Route path="design3" element={<CarouselDesign4 images={images} />} />
        <Route path="design4" element={<CarouselDesign1 photos={images} />} />
      </Routes>

      <Lower />
    </>
  );
}

export default App;
