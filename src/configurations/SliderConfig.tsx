

export const Slidersettings = {
    speed: 700,
    slidesToShow: 2.3,
    slidesToScroll: 2,
    slidesPerRow: 1,
    initialSlide: 0,
    infinite: false,
    // centerMode: true,
    // centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          //  centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  export const ProgressCourseSlidersettings = {
    speed: 700,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    slidesPerRow: 1,
    initialSlide: 0,
    infinite: false,
    // centerMode: true,
    // centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          initialSlide: 1,
          //  centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ]
  };

  function NoArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "hidden" }}
        onClick={onClick}
      />
    );
  }
  export const CategorySlidersettings = {
    // speed: 700,
    className: "center",
    slidesToShow: 4.9,
    slidesToScroll: 1,
    slidesPerRow: 1,
    initialSlide: 0,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // nextArrow: <NoArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4.4,
          centerPadding: '10px',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3.8,
          centerPadding: '10px',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.4,
          centerPadding: '10px',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          centerPadding: '10px',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: '5px',
          //  centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerPadding: '0px',
          centerMode: false,
        }
      }
    ]
  };