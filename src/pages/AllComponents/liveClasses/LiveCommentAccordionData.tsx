import Avatar from "../../../assets/images/Avatar.png";
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import Accordion from "../../../components/Accordion";
import { LuSendHorizonal } from "react-icons/lu";

const commentItems = [
  {
    title: "345",
    name: "Delcan Rice",
    time: "2 mins",
    comment: (
      <p>
        Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit
        amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus
      </p>
    ),
    likes: "12",
    reply: "3",
  },
  {
    title: "345",
    name: "Delcan Rice",
    time: "2 mins",
    comment: <p>Lorem ipsum</p>,
    likes: "12",
    reply: "3",
  },
];

const commentAccordionItems = [
  {
    title: "345",
    content: (
      <>
        {commentItems.map((commenter, index) => (
          <div className="mx-6 mb-8" key={index}>
            <div className="flex gap-4  mt-5">
              <img src={Avatar} className="h-10 w-auto mx-auto" />

              <div className=" flex flex-col gap-4 rounded-lg bg-[#f6f7ff] py-3 px-4 w-11/12">
                <div className="flex justify-between items-center">
                  <h4 className="text-zinc-400 text-lg">{commenter.name}</h4>

                  <div className="flex items-center text-zinc-400 gap-3">
                    <p className="text-sm">{commenter.time}</p>
                    <div className="flex items-center">
                      <GoDotFill />
                      <GoDotFill />
                      <GoDotFill />
                    </div>
                  </div>
                </div>
                <div>{commenter.comment}</div>
                <div className="flex gap-7 items-center text-zinc-400 text-sm">
                  <div className="flex gap-2 items-center">
                    <BiLike />
                    <p>{commenter.likes} Likes</p>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <FaRegComment />
                    <p>{commenter.reply} Replies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    ),
  },
];

const LiveCommentAccordionData = () => {
  return (
    <div className="border-t border-zinc-200 pb-7">
      <div className="mb-5 pb-5">
        <div className="mx-6 mb-2">
          <div className="flex gap-4  mt-5">
            <img src={Avatar} className="h-10 w-auto mx-auto" />

            <div className=" flex flex-col gap-4 rounded-lg bg-[#f6f7ff] py-3 px-4 w-11/12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h4 className="text-zinc-400 text-lg">Delcan Rice</h4>
                  <button className="flex items-center gap-3 py-1 px-3 justify-center bg-[#f8a33f] rounded-full">
                    <MdVerified />
                    Host
                  </button>
                </div>
                <div className="flex items-center text-zinc-400 gap-3">
                  <p className="text-sm">2 mins</p>
                  <div className="flex items-center">
                    <GoDotFill />
                    <GoDotFill />
                    <GoDotFill />
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam,
                  purus sit amet luctus Lorem ipsum dolor sit amet aliquam,
                  purus sit amet luctus
                </p>
              </div>
              <div className="flex gap-7 items-center text-zinc-400 text-sm">
                <div className="flex gap-2 items-center">
                  <BiLike />
                  <p>15 Likes</p>
                </div>
                <div className="flex gap-2 items-center ">
                  <FaRegComment />
                  <p>6 Replies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 m-auto">
          {commentAccordionItems.map((subComment, index) => (
            <div key={index}>
              <Accordion
                items={[
                  {
                    title: `View all ${subComment.title} comments`,
                    content: subComment.content,
                    showIcon: false,
                    accordionHeaderBg: "rgb(56 67 208 / 0.9)",
                  },
                ]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mx-6">
        <input
          className="border border-zinc-200 w-11/12 rounded-lg p-2"
          placeholder="Start typing..."
        />
        <button className="flex items-end justify-center bg-primary text-white rounded-lg p-4">
          <LuSendHorizonal />
        </button>
      </div>
    </div>
  );
};

export default LiveCommentAccordionData;
