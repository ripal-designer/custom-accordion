import React, { useState, useRef } from "react";
import { JData } from "../data";
import SliderArrow from "./SlidersArrow";

function Slider() {
  const sliderH = useRef(null);

  const [defaultSlider, setDefalut] = useState(0);
  const [prevSlide, setPrevSlider] = useState();
  const [height, setHeight] = useState();

  //setHeight(sliderH.current.clientHeight);
  const handleLoad = (event) => {
    if (sliderH.current.className === "slideractive") {
      setHeight(sliderH.current.clientHeight);
      console.log("ripal");
    }
    console.log(sliderH);
  };
  return (
    <div className="slider-area">
      <SliderArrow defaultSlider={defaultSlider} setDefalut={setDefalut} />
      {JData.map((item, index) => {
        return (
          <div
            key={item.id}
            className={index === defaultSlider ? " slider active" : "slider"}
            onLoad={handleLoad}
            ref={sliderH}
            style={
              index === defaultSlider ? { height: height } : { display: "none" }
            }
          >
            <div>
              {" "}
              <img src={item.image} /> <h2>{item.heading}</h2>{" "}
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Slider;
