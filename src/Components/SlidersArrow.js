import React from "react";
import { JData } from "../data";

function SliderArrow(props) {
  const length = JData.length;

  // console.log(props);
  const PreviousHandler = (e) => {
    props.setDefalut(
      props.defaultSlider === 0 ? length - 1 : props.defaultSlider - 1
    );
  };
  const NextHandler = (e) => {
    props.setDefalut(
      props.defaultSlider === length - 1 ? 0 : props.defaultSlider + 1
    );
  };

  return (
    <>
      <div
        className="icon icon-prev"
        onClick={(e) => PreviousHandler(e)}
        onTouchStart={PreviousHandler}
      >
        <img src="arrow.svg" />
      </div>
      <div
        className="icon icon-next"
        onClick={(e) => NextHandler(e)}
        onTouchEnd={NextHandler}
      >
        <img src="arrow.svg" />
      </div>
    </>
  );
}
export default SliderArrow;
