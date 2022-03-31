import React, { useState, useRef, useEffect } from "react";
import { TabContent } from "./TabContent";

function Accordion() {
  const dHeight = useRef({});

  const [activeAcc, setActiveAcc] = useState("1");
  const [height, setHeight] = useState(0);

  function handlerClick(itemId) {
    setActiveAcc(itemId);
    setHeight(dHeight.current.classList);
    console.log(dHeight);

  }

  return (
    <>
      <h1 className="text-center">Custom Accordion</h1>
      <div>
        {TabContent.map((item, index) => {
          return (
            <>
              <div
                id={item.id}
                className={
                  activeAcc === item.id ? "acc-title active" : "acc-title"
                }
                onClick={() => handlerClick(item.id)}
              >
                <span>{item.heading} </span>
                <span>
                  <img src="arrow.svg" className="arrow-icon" />
                </span>
              </div>
              <div
                className={
                  activeAcc === item.id ? "acc-content active" : "acc-content"
                }
                ref={(element) => (dHeight.current[index] = element)}
              >
                {item.content}
              </div>

            </>
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
