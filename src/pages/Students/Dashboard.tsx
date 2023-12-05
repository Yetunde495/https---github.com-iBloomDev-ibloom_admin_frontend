import { ProgressCourseCard, CourseCard } from "../../components/card";
import DashboardCard from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import PreviewImg from "../../assets/images/Image.png";
import CourseSlider from "../../components/Slider";
import Slider from "react-slick";
import { ProgressCourseSlidersettings, Slidersettings } from "../../configurations/SliderConfig";

const data = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    tag: "Fresh"
  },
  {
    title: "Intro to Product Design",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    tag: "Fresh"
  },
  {
    title: "Intro to Product Design",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    tag: "Fresh"
  },
];

const data2 = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg
    }
  },
  {
    title: "Intro to Product Design2",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg
    }
  },
  {
    title: "Intro to Product Design3",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg
    }
  },
  {
    title: "Intro to Product Design4",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "8-10 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg
    }

  },
  {
    title: "Intro to Product Design5",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "22 hours",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg
    }
  },
];

export default function StudentDashboard() {
  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <h1 className="text-2xl font-bold dark:text-slate-200 mb-3">
          Welcome, Thomas
        </h1>

        <div className="py-4 bg-white grid md:grid-cols-4 grid-cols-2 gap-6">
          <DashboardCard title="Total Courses" number={15} />

          <DashboardCard title="Ongoing Courses" number={10} />

          <DashboardCard title="Completed Courses" number={5} />

          <DashboardCard title="My Courses" number={5} />
        </div>

        <section className="sm:block hidden py-8">
          <div className="flex justify-between items-center relativ">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Pickup where you left off
            </h1>
            <a className="font-bold dark:text-slate-200">See all</a>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:gap-2 lg:gap-4 xl:gap-6 py-4 w-full">
            {data.map((val, index) => (
              <ProgressCourseCard
                key={index}
                title={val.title}
                progress={val.progress}
                progress_url={val.progress_url}
                preview_img_url={val.preview_img_url}
                progress_bookmark={val.progress_bookmark}
              />
            ))}
          </div>
        </section>

        <section className="w-full py-8 block sm:hidden">
        <div className="flex justify-between items-center relative mb-3">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Pickup where you left off
            </h1>
            <a className="font-bold dark:text-slate-200">See all</a>
          </div>

          <div className="lg:w-full px-4">
          <Slider {...ProgressCourseSlidersettings}>
          {data.map((val, index) => (
            <ProgressCourseCard
            key={index}
            title={val.title}
            progress={val.progress}
            progress_url={val.progress_url}
            preview_img_url={val.preview_img_url}
            progress_bookmark={val.progress_bookmark}
          />
          ))}
          </Slider>
          </div>
        </section> 

        <section className="w-full py-8">
          <div className="flex justify-between items-center relative">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Newly added courses
            </h1>
            <a className="font-bold dark:text-slate-200">See more</a>
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
        
        <section className="w-full py-8">
          <div className="flex justify-between items-center relative">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Top picks for you
            </h1>
            <a className="font-bold dark:text-slate-200">See more</a>
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
      </section>
    </DefaultLayout>
  );
}
