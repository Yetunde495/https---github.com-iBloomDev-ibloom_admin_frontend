import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


interface CourseSliderProps {
  cards:any;
  cardsPerView:number;
}



const CourseSlider: React.FC<CourseSliderProps> = ({ cards, cardsPerView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const nextSlide = () => {
    if (currentIndex - 1 + cardsPerView >= totalCards) {
      setCurrentIndex(0);
      //   setCurrentIndex((prevIndex) => (prevIndex - 1) % totalCards )
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="relative py-3">

    <button className="h-8 py-2 absolute top-[40%] -left-2 z-[999]" onClick={() => nextSlide()}><BsArrowLeftCircleFill size={28} className="bg-white/90 rounded-full shadow-default text-primary"/></button>
    <button className="h-8 py-2 absolute top-[40%] -right-2 z-[999]" onClick={() => nextSlide()}><BsArrowRightCircleFill size={28} className="bg-white/90 rounded-full shadow-default text-primary"/></button>
    <div className="flex overflow-hidden">
      <div className={`flex`}
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          transition: `transform 1.2s ease-in-out`,
        }}
      >
        {cards.map((card:any, index:number) => (
          <div className={`flex flex-[0_0_20%] mr-[30px]`}
          style={{
            transition: `margin 1s ease-in-out`,
          }}
          key={index}>
            {card}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseSlider;
