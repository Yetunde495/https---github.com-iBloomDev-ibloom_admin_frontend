/* eslint-disable @typescript-eslint/no-explicit-any */
import { TutorCourseCard } from "../../components/card";
import DefaultLayout from "../../layout/DefaultLayout";
import { data2 } from "./Dashboard";
import {  useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <section className="sm:block py-8">
          <div className="flex justify-between items-center relative mb-3">
            <h1 className="text-xl font-bold dark:text-slate-200">
              My Courses
            </h1>
            <span className="font-bold text-primary cursor-pointer dark:text-slate-200" onClick={() => navigate(`/app/tutors/courses/courseupload`)}>
              Create new course
            </span>
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
};

export default Courses;
