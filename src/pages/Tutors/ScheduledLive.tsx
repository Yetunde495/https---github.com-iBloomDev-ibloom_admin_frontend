import PreviewImg from "../../assets/images/Image.png";
import Avatar from "../../assets/images/Avatar.png";
import EmptyStateImage from "../../assets/images/empty-courses.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RecommendedLive from "./JointLive";
import { LiveClassCard } from "../../components/card";

const data = [
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Start Live Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [
      { name: "Angela", photo: Avatar },
      { name: "Yetunde", photo: Avatar },
    ],
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Start Live Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [{ name: "Lilith", photo: Avatar }],
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Start Live Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [
      { name: "Deborah", photo: Avatar },
      { name: "Adeyemi", photo: Avatar },
    ],
  },
];

const ScheduledLive = () => {
  return (
    <div className="w-full">
      {data.length > 0 ? (
        <>
          <div className="flex gap-3 lg:gap-6 flex-wrap py-4 mt-10 w-full">
            {data.map((val, index) => (
              <LiveClassCard
                key={index}
                title={val.title}
                preview_img_url={val.preview_img_url}
                stateBtnText={val.stateBtnText}
                card_action_text={val.card_action_text}
                course_url={`ongoing-class/${index}`}
                showIcon={val.showIcon}
                creator={val.creator}
                showButton={true}
                date="25th, Nov"
                time="16:00PM GMT+1"
                stateBtnTextCustomBgColor="#ff4343"
                bottomActionBtn={true}
                textColor="#fff"
              />
            ))}
            <div>
              <RecommendedLive />
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
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ height: "80vh" }}
        >
          <div>
            <img src={EmptyStateImage} className="m-auto" />
            <div className="my-8">
              <p>
                You currently have no ongoing live classes on your dashboard.
              </p>

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
    </div>
  );
};

export default ScheduledLive;
