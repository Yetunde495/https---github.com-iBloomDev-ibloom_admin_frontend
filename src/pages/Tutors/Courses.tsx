/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../components/button";
import DefaultLayout from "../../layout/DefaultLayout";
import CourseTable from "./CourseTable";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

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
            <Button
              onClick={() => navigate(`/app/tutors/courses/courseupload`)}
            >
              <div className="flex gap-x-2 items-center">
                <IoMdAdd /> Create new course
              </div>
            </Button>
          </div>
          <CourseTable />
        </section>
      </section>
    </DefaultLayout>
  );
};

export default Courses;
