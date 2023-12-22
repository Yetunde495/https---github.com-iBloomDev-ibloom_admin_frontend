/* eslint-disable @typescript-eslint/no-explicit-any */
import { TutorCourseCard } from "../../components/card";
import DefaultLayout from "../../layout/DefaultLayout";
import { data2 } from "./Dashboard";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const location = useLocation();

  // Construct the new URL by appending "courseupload" to the current pathname
  const newHref = `${location.pathname}/courseupload`;
  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <section className="sm:block py-8">
          <div className="flex justify-between items-center relative mb-3">
            <h1 className="text-xl font-bold dark:text-slate-200">
              My Courses
            </h1>
            <a className="font-bold dark:text-slate-200" href={newHref}>
              Create new course
            </a>
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
