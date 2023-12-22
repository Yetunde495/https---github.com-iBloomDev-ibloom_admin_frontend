/* eslint-disable @typescript-eslint/no-explicit-any */
import { TutorCourseCard } from "../../components/card";
import DashboardCard from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import PreviewImg from "../../assets/images/Image.png";

export const data2 = [
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    coursePrice: "$45.00",
  },
];

export default function TutorDashboard() {
  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <h1 className="text-2xl font-bold dark:text-slate-200 mb-3">
          Welcome, Thomas
        </h1>

        <div className="py-4 bg-white grid md:grid-cols-3 grid-cols-2 gap-6 w-[80%]">
          <DashboardCard title="Amount Earned" number="$15,000" />

          <DashboardCard title="My Courses" number={10} />

          <DashboardCard title="Completed Courses" number={5} />
        </div>

        <section className="sm:block py-8">
          <div className="flex justify-between items-center relative mb-3">
            <h1 className="text-xl font-bold dark:text-slate-200">
              My Courses
            </h1>
            <a className="font-bold dark:text-slate-200">See all</a>
          </div>
          <div className="w-full px-4 gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
            {data2.map((val: any, index: any) => (
              <TutorCourseCard
                key={index}
                title={val.title}
                preview_img_url={val.preview_img_url}
                course_url=""
                coursePrice={val.coursePrice}
              />
            ))}
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
