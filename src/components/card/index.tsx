import { BsThreeDots } from "react-icons/bs";
import Dropdown from "../Dropdown2";
import formatDateToString from "../../utils/convertDateStampToString";
import { StatusPill } from "../Pills";

type WorksheetCardProps = {
  data: any;
  onPreview: () => void;
  onApprove: () => void;
  onReject: () => void;
  viewFeedback: () => void;
  onClick: () => void;
}

export const TestimonialCard: React.FC<TestimonialCardData> = ({
  text,
  name,
  role,
  image,
}) => {
  return (
    <div className="relative py-6 sm:w-full sm:mx-auto mr-3">
      <figure className="md:flex relative bg-white/90 rounded-xl sm:p-8  p-2 md:max-w-[600px] sm:max-w-[500px] shadow-xl md:ml-[15%] z-99999">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto object-cover"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="lg:pt-1 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg">{text}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">{name}</div>
            <div className="text-slate-700">{role}</div>
          </figcaption>
        </div>
        {/* <img src={shape2} /> */}
      </figure>
      <span className="absolute bg-primary w-18 md:h-[70px] h-[45px] -right-3 top-1 md:right-6 md:top-2 rounded-lg"></span>
      <span className="absolute bg-[#95E1D3] w-32 md:h-[70px] h-[45px] -left-3 md:left-14 md:bottom-3 bottom-1 rounded-lg"></span>
    </div>
  );
};

export const WorksheetCard: React.FC<WorksheetCardProps> = ({ data, onPreview, onApprove, onReject, viewFeedback, onClick }) => {
  return (
    <div className="relative bg-[#F2F2F233] rounded-lg shadow-2 py-3 px-4 overflow-y-auto custom-scrollbar h-[200px] w-full" onClick={onClick}>
      <div className="flex items-center justify-between pb-5 relative">
        <h1 className="font-semibold">{data?.topic}</h1>
        <div>
          <Dropdown icon={<BsThreeDots />} bg={false}>
            <span
              onClick={onPreview}
              className="py-3 px-4 text-[14px] cursor-pointer text-black/90 hover:text-primary hover:bg-slate-200/60"
            >
              Preview Worksheet
            </span>

           {data.status === "Pending" && <span
              onClick={onApprove}
              className="py-3 px-4 text-[14px] cursor-pointer text-success hover:bg-slate-200/60"
            >
              Approve Worksheet
            </span>}

            {data.status === "Pending" && <span
              onClick={onReject}
              className="py-3 px-4 gap-2 text-[14px] cursor-pointer text-danger hover:bg-slate-200/60"
            >
              Reject Worksheet
            </span>}
            {data.status === "Rejected" && <span
              onClick={viewFeedback}
              className="py-3 px-4 text-[14px] cursor-pointer text-black/90 hover:text-primary hover:bg-slate-200/60"
            >
              View Feedback
            </span>}
          </Dropdown>
        </div>
      </div>

      <div>
        <p className="text-sm mb-1">Subject: {data?.subject}</p>
        <p className="text-sm mb-1">Topic: {data?.subtopic}</p>
        <p className="text-sm mb-1">{data?.grade}</p>
      </div>

      <div className="absolute bottom-3 flex w-full justify-between right-0 px-3 items-center">
        <p className="text-right text-zinc-500 text-sm">
          {formatDateToString(data?.date_generated)}
        </p>
        <StatusPill
          variant={
            data?.status === "Approved"
              ? "success"
              : data?.status === "Rejected"
              ? "error"
              : "warning"
          }
        >
          {data?.status}
        </StatusPill>
      </div>
    </div>
  );
};

