import React, { useState, useEffect } from "react";
import "../assets/slider/slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("slideIn");
  const slides = [
    {
      title: "FLOWERS FOR ALL OCCASION",
      description: "Upto 60% Off All Flowers & Gifts",
    },
    {
      title: "5 DAYS FRESHNESS GUARANTEE",
      description: "Sent in bud for a longer vase life",
    },
  ];

  const nextSlide = () => {
    setAnimation("slideOut");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimation("slideIn");
    }, 500);
  };

  const prevSlide = () => {
    setAnimation("slideOut");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimation("slideIn");
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Add event listener for key presses
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slider">
      <button onClick={prevSlide}>{"<"}</button>
      <div className={`slider-content ${animation}`}>
        <p>{slides[currentSlide].title}</p>
        <p>{slides[currentSlide].description}</p>
      </div>
      <button onClick={nextSlide}>{">"}</button>
    </div>
  );
}

export default Slider;
