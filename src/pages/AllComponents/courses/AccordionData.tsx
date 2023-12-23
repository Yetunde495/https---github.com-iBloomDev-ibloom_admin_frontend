import Accordion from "../../../components/Accordion";
import { MdPlayCircleFilled } from "react-icons/md";

const courseData = [
  {
    title: "Introduction",
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <MdPlayCircleFilled />
          <p>Preview</p>
        </div>
        <div className="flex items-center gap-2">
          <MdPlayCircleFilled />
          <p>About Tutor</p>
        </div>
      </div>
    ),
  },
  {
    title: "How to create Accordion (FAQ) in React?",
    content: "React with Tailwind CSS Faq Accordion 1",
  },
  {
    title: "How to use Tailwind CSS 3 in React?",
    content: "React with Tailwind CSS Faq Accordion 2",
  },
  {
    title: "How to install Tailwind CSS 3?",
    content: "React with Tailwind CSS Faq Accordion 3",
  },
  {
    title: "How to send feedback?",
    content: "React with Tailwind CSS Faq Accordion 4",
  },
];

const AccordionData = () => {
  return (
    <div>
      {courseData.map((data, index) => {
        return (
          <div
            key={index}
            className={`mt-4 flex ${
              index !== courseData.length - 1 ? "border-b border-zinc-200" : ""
            }`}
          >
            <Accordion
              items={[
                {
                  title: data.title,
                  content: data.content,
                  showIcon: true,
                },
              ]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionData;
