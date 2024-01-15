/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import Button from "../../components/button";
import {
  CategoryCard,
  CourseCard,
  CourseCard2,
  LiveClassCard,
  TestimonialCard,
} from "../../components/card";
import {
  CategorySlidersettings,
  Slidersettings,
} from "../../configurations/SliderConfig";
import Layout from "../../layout/Layout";
import { data2 } from "../Students/Dashboard";
import { LiveClassData } from "../AllComponents/liveClasses/UpcomingLiveClass";
import AvatarImg from "../../assets/images/Avatar.png";
import Logo1 from "../../assets/images/University-logo.png";
import Logo2 from "../../assets/images/Google-logo.png";
import Logo3 from "../../assets/images/Microsoft-logo.png";
import Logo4 from "../../assets/images/amazon-logo.png";
import { Testimonials, categories } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {

  const navigate = useNavigate()
  const colors = [
    "cc1",
    "cc2",
    "cc3",
    "cc4",
    "cc5",
  ];
  let colorIndex = 0;

  const getNextColor = () => {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    return color;
  };
  return (
    <Layout>
      <section className="">
        {/* Hero Section */}
        <section className="p-8 md:py-22 text grid lg:grid-cols-2 grid-cols-1 gap-12 xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] w-full mx-auto">
          <div className="lg:max-w-[30rem]">
            <h1 className="md:text-5xl sm:text-4xl text-3xl tracking-wide font-semibold mb-5">
              At ByteDegree, Learn at your own pace
            </h1>
            <p className="text-slate-500 tracking-wide mb-5">
              Feugiat aliquam consequat, est malesuada suspendisse libero sem.
              Purus congue suscipit, pretium habitasse, leo nisi adipiscing
              condimentum fringilla fames.
            </p>
            <Button onClick={() => navigate("/app/students/dashboard")}>Get Started</Button>
          </div>
          <div className="relative h-full flex lg:justify-end justify-center">
            <video
              width="560px"
              height="315px"
              controls
              className="rounded-lg lg:right-12 right-2 relative z-[99]"
            >
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-primary h-[70px] w-18 rounded-lg absolute md:right-3 right-5 -top-3"></div>
            <div className="bg-[#F8A33F] h-[70px] w-18 rounded-lg absolute md:right-3 right-3 -bottom-3 "></div>
          </div>
        </section>

        <section className="mx-auto flex py-14 bg-white">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="mb-5 font-semibold md:text-2xl xl:text-[32px] text-xl">Our Partners</h3>
            <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-x-20 md:gap-x-16 gap-x-10 gap-y-4">
              <img src={Logo1} className="w-[150px]" />
              <img src={Logo3} className="w-[150px]" />
              <img src={Logo2} className="w-[150px]" />

              <img src={Logo4} className="w-[150px]" />
            </div>
          </div>
        </section>

        <section className="mx-auto flex py-10">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="mb-5 font-semibold md:text-2xl xl:text-[32px] text-xl">
              Explore Categories
            </h3>
            <div className="w-full">
              <Slider {...CategorySlidersettings}>
                {categories.map((val, index) => (
                  <CategoryCard
                    key={index}
                    title={val}
                    link="#"
                    bgColor={getNextColor()}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="md:pl-8 px-4 flex flex-col md:py-14  gap-y-8 w-full xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] mx-auto tracking-wide">
          <section className="py-8">
            <div className="flex justify-between items-center relative">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-wide ml-8 mb-3">
                Newly added courses
              </h1>
              <a className="font-bold dark:text-slate-200 mr-10">See All</a>
            </div>

            <div className="lg:w-full px-4">
              <Slider {...Slidersettings}>
                {data2.map((val, index) => (
                  <CourseCard
                    key={index}
                    title={val.title}
                    preview_img_url={val.preview_img_url}
                    duration={val.progress_bookmark}
                    course_url=""
                    creator={val.creator}
                    tag={val.tag}
                  />
                ))}
              </Slider>
            </div>
          </section>

          <section className="py-8">
            <div className="flex justify-between items-center relative mb-4">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-wide ml-5">
                Newly added courses
              </h1>
              <a className="">See more</a>
            </div>

            <div className="w-full px-4 gap-4 grid  sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
              {data2.slice(0, 4).map((val, index) => (
                <CourseCard2
                  key={index}
                  title={val.title}
                  preview_img_url={val.preview_img_url}
                  duration={val.progress_bookmark}
                  course_url=""
                  creator={val.creator}
                  tag={val.tag}
                />
              ))}
            </div>
          </section>

          <section className="py-8">
            <div className="flex justify-between items-center w-full mb-4">
              <h1 className="sm:text-2xl text-xl font-semibold ml-5">
                Recommended Courses
              </h1>
              <a className="">See more</a>
            </div>

            <div className="w-full px-4 gap-5 grid  sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
              {data2.slice(0, 4).map((val, index) => (
                <CourseCard2
                  key={index}
                  title={val.title}
                  preview_img_url={val.preview_img_url}
                  duration={val.progress_bookmark}
                  course_url=""
                  creator={val.creator}
                  tag={val.tag}
                />
              ))}
            </div>
          </section>

          <section className="py-8">
            <div className="flex justify-between items-center relative mb-4 mx-auto">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-wide ml-5">
                Live Classes
              </h1>
              <a className="">See more</a>
            </div>

            <div className="w-full px-4 gap-6 grid lg:grid-cols-4 grid-cols-2">
              {LiveClassData.map((val: any, index: any) => (
                <LiveClassCard
                  key={index}
                  title={val.title}
                  preview_img_url={val.preview_img_url}
                  stateBtnText={val.stateBtnText}
                  card_action_text={val.card_action_text}
                  course_url=""
                  date={val.date}
                  time="16:00PM GMT+1"
                  creator={[{ name: "Angela", photo: AvatarImg }]}
                  stateBtnTextCustomBgColor="#f8a33f"
                  showButton={true}
                />
              ))}
            </div>
          </section>
        </section>

        {/* Testimonial Section */}
        <section className="mx-auto p-8 flex justify-center py-8 bg-white mb-12">
          <div className="mx-auto lg:p-8 2xl:px-[12rem]">
            <h3 className="mb-8 text-center text-2xl font-semibold tracking-wide">
              Testimonials
            </h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              {Testimonials.map((val, index) => (
                <TestimonialCard
                  key={index}
                  name={val.name}
                  role={val.role}
                  text={val.text}
                  image={val.image}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Homepage;
