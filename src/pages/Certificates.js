import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Certificates.css";
import Image_FrontendExpert from "../assets/certificates/FrontendExpert_Certificate.jpg";
import Image_AlgoExpert from "../assets/certificates/AlgoExpert_Certificate.jpg";
import Image_Leetcode from "../assets/certificates/leetcode_annual_award_wide.png";
import Image_Supervised_ML from "../assets/certificates/supervised_ml.png";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const images = [
  Image_FrontendExpert,
  Image_AlgoExpert,
  Image_Leetcode,
  Image_Supervised_ML,
];
const colors = Array(images.length).fill("#FFBB48");
const delay = 4000;

function Certificates() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor: colors[index] }}
          >
            <img className="certificate" src={image} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
