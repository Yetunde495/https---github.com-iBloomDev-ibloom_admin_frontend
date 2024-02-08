/* eslint-disable @typescript-eslint/no-explicit-any */
import Chart from "react-apexcharts";
import { earningsChartConfig } from "../AllComponents/Charts/chartConfig";
import { DashboardCard2 } from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import PreviewImg from "../../assets/images/Image.png";
import { useApp } from "../../context/AppContext";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoBookSharp, IoPeople } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { getTutorDashboardDetails } from "../../services/tutorServices";
import { toast } from "react-toastify";

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
  const { user } = useApp();

  const { data} = useQuery(
    ["TUTOR_DASHBOARD_DETAILS"],
    () => getTutorDashboardDetails({
      id: user?.user_id
    }),
    { keepPreviousData: true,
      onError: (err:any) => {
        toast.error(err.message);
      },
    
    }
  );
  return (
    <DefaultLayout>
      <section className="py-3 px-6 dark:bg-boxdark">
        <h1 className="text-2xl font-bold dark:text-slate-200 mb-3">
          Welcome, {user?.username || user?.first_name || 'User'}
        </h1>

        <div className="py-4 grid md:grid-cols-3 grid-cols-2 gap-6 w-[80%]">
          <DashboardCard2
            title="Amount Earned"
            number={`$${data?.amountEarned || 0}`}
            color="#027A48"
            icon={<div className="p-1.5 rounded-full bg-[#027A48]/10 text-xl"><RiMoneyDollarCircleFill className="text-[#027A48]" /></div>}
          />

          <DashboardCard2
            title="My Courses"
            number={data?.courses || 0}
            color="#3843D0"
            icon={<div className="p-1.5 rounded-full bg-[#3843D0]/10 text-lg"><IoBookSharp className="text-[#3843D0]" /></div>}
          />

          <DashboardCard2
            title="Students"
            number={150}
            color="#F88D3F"
            icon={<div className="p-1.5 rounded-full bg-[#F88D3F]/10 text-lg"><IoPeople className="text-[#F88D3F]" /></div>}
          />
        </div>
        <section className="sm:block py-8">
          <h3 className="text-xl font-semibold my-4">Statistics</h3>
          <div className="relative px-3 py-6 md:px-5 bg-white mb-8 rounded-xl shadow-md">
            <div className="font-cabin tracking-wide  mb-5 md:pl-5">
              <h6 className="text-lg text-black/80 mb-3">My Earnings</h6>
              <h6 className="text-4xl text-black">$58.9k</h6>
            </div>
            <Chart
              options={{
                ...earningsChartConfig,
                stroke: {
                  show: true,
                  width: 1,
                  colors: ["transparent"],
                },
              }}
              series={[
                {
                  name: "Earnings",
                  data: [
                    1000, 1500, 2000, 2000, 2100, 3000, 1000, 2600, 3000, 0, 0,
                    0,
                  ],
                },
              ]}
              type="bar"
            />
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
