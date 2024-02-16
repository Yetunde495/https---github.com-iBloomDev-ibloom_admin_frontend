import PreviewImg from "../../assets/images/Image.png";
import Avatar from "../../assets/images/Avatar.png";
import { LiveClassCard } from "../../components/card";

export const LiveClassData = [
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Commin Soon",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "",
    date: "25th, Nov",
    time: "16:00PM GMT+1",
    showButton: true,
    creator: [{ name: "Yetunde", photo: Avatar }],
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Commin Soon",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "",
    date: "25th, Nov",
    time: "16:00PM GMT+1",
    showButton: true,
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
    stateBtnText: "Commin Soon",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "",
    date: "25th, Nov",
    time: "16:00PM GMT+1",
    showButton: true,
    creator: [
      { name: "Angela", photo: Avatar },
      { name: "Yetunde", photo: Avatar },
    ],
  },
];

const JointLive = () => {
  return (
    <div className="w-full mt-20">
      <h2 className="text-xl font-bold dark:text-slate-200">
        Joint Live Classes
      </h2>
      <div className="flex gap-3 lg:gap-6 flex-wrap py-4 mt-10 w-full">
        {LiveClassData.map((val, index) => (
          <LiveClassCard
            key={index}
            title={val.title}
            preview_img_url={val.preview_img_url}
            stateBtnText={val.stateBtnText}
            card_action_text={val.card_action_text}
            course_url=""
            date={val.date}
            time="16:00PM GMT+1"
            creator={val.creator}
            showButton={val.showButton}
            bottomActionBtn={true}
          />
        ))}
      </div>
    </div>
  );
};

export default JointLive;
