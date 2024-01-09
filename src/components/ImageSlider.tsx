// Carousel.tsx
import React, { useState, useRef, useEffect, useCallback } from "react";

interface CarouselProps {
  images: string[];
  showControls?: boolean;
  overlayText: string[];
  autoSlideInterval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  showControls = true,
  overlayText,
  autoSlideInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }, [activeIndex, images.length]);

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(images.length - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.style.backgroundImage = `url(${images[activeIndex]})`;
    }
  }, [activeIndex, images]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        nextSlide();
      }
    }, autoSlideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [activeIndex, images, autoSlideInterval, nextSlide]);

  return (
    <div
      ref={sliderRef}
      className="w-full h-screen bg-cover relative border-transparent bg-gradient-to-b from-transparent via-white to-white"
    >
      <div
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        className="w-full h-screen bg-cover relative transition-opacity duration-5000"
      ></div>
      <div className="absolute slider-overlay bottom-0 right-0 w-full flex justify-center items-center border-transparent bg-transparent bg-gradient-to-b from-transparent via-black/60 to-black/90">
        <div className=" text-white/75 text-center grid gap-9 pb-[3.125rem] pt-10 px-16">
          <p className="text-xl leading-5 xl:text-[22px] xl:leading-[22px]">{overlayText[activeIndex]}</p>
          <div className=" transform flex justify-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "bg-blue-600 border-blue-600 w-12" : "bg-transparent border-white w-4"
                } border h-4 rounded-full`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Text on overlay */}

      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;