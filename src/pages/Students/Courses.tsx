import EmptyStateImage from "../../assets/images/empty-courses.png";
import DefaultLayout from "../../layout/DefaultLayout";
import StreakImg from "../../assets/images/streak.png";
import PreviewImg from "../../assets/images/Image.png";
import { ProgressCourseCard } from "../../components/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

export default function StudentCourses() {
  return (
    <DefaultLayout>
      <section className="ml-10">
        <div className="flex justify-between items-center relativ max-w-[1100px]">
          <h1 className="text-xl font-bold dark:text-slate-200">My Courses</h1>
          <div className="flex rounded-full items-center border-x border-y border-slate-200 py-1 px-2">
            <img src={StreakImg} className="pr-2" />
            <p className="dark:text-slate-200 text-xs ">30 Days Streak</p>
          </div>
        </div>
        {data.length > 0 ? (
          <>
            <div className="flex gap-3 lg:gap-6 flex-wrap py-4 mt-10 w-full">
              {data.map((val, index) => (
                <ProgressCourseCard
                  key={index}
                  title={val.title}
                  progress={val.progress}
                  progress_url={`${index}`}
                  preview_img_url={val.preview_img_url}
                  progress_bookmark={val.progress_bookmark}
                  customBackgroundColor="#EBECFA"
                  textColor="#3843D0"
                />
              ))}
            </div>
            <div className="flex items-center justify-between border-gray-200 px-4 py-3 sm:px-6 mt-8 mb-10  w-4/5">
              <div className="flex flex-1 justify-between sm:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md bg-white"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400  ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2  rounded-md text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-400 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-400  ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-400 ring-inset ring-gray-300 focus:outline-offset-0">
                      ...
                    </span>

                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next</span>
                      <IoIosArrowForward
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="flex justify-center items-center"
            style={{ height: "80vh" }}
          >
            <div>
              <img src={EmptyStateImage} />
              <div className="my-8">
                <p>You currently have no course on your dashboard.</p>

                <button
                  onClick={undefined}
                  className="w-full py-2.5 px-4 bg-primary/90 rounded-md  text-white hover:bg-primary mt-8"
                >
                  Buy Courses
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
