import { ProgressCourseCard, CourseCard } from "../../components/card";
import DashboardCard from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import PreviewImg from "../../assets/images/Image.png";
import CourseSlider from "../../components/Slider";

const data = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
  },
  {
    title: "Intro to Product Design",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
  },
  {
    title: "Intro to Product Design",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
  },
];

const data2 = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
  },
  {
    title: "Intro to Product Design",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "8-10 weeks",
  },
  {
    title: "Intro to Product Design",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "22 hours",
  },
];

export default function StudentDashboard() {
  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <h1 className="text-2xl font-bold dark:text-slate-200 mb-3">
          Welcome, Thomas
        </h1>

        <div className="py-4 bg-white gap-6 flex flex-col sm:flex-row">
          <DashboardCard title="Total Courses" number={15} />

          <DashboardCard title="Ongoing Courses" number={10} />

          <DashboardCard title="Completed Courses" number={5} />

          <DashboardCard title="My Courses" number={5} />
        </div>

        <section className=" py-8">
          <div className="flex justify-between items-center relativ max-w-[1100px]">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Pickup where you left off
            </h1>
            <a className="font-bold dark:text-slate-200">See all</a>
          </div>
          <div className="flex gap-3 lg:gap-6 flex-wrap py-4 w-full">
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

        <section className=" py-8">
          <div className="flex justify-between items-center relativ max-w-[1100px]">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Newly added courses
            </h1>
            <a className="font-bold dark:text-slate-200">See more</a>
          </div>

          <CourseSlider
            cardsPerView={3}
            cards={data2.map((val, index) => (
              <CourseCard
                key={index}
                title={val.title}
                preview_img_url={val.preview_img_url}
                duration={val.progress_bookmark}
                course_url=""
                creator=""
              />
            ))}
          />
        </section>

        <section className=" py-8">
          <div className="flex justify-between items-center relativ max-w-[1100px]">
            <h1 className="text-xl font-bold dark:text-slate-200">
              Top picks for you
            </h1>
            <a className="font-bold dark:text-slate-200">See more</a>
          </div>
          <CourseSlider
            cardsPerView={3}
            cards={data2.map((val, index) => (
              <CourseCard
                key={index}
                title={val.title}
                preview_img_url={val.preview_img_url}
                duration={val.progress_bookmark}
                course_url=""
                creator=""
              />
            ))}
          />
        </section>
      </section>
    </DefaultLayout>
  );
}
