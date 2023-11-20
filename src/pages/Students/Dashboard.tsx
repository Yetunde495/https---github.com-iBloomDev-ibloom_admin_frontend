import { BsHeartPulse } from "react-icons/bs";
import DashboardCard from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";

export default function StudentDashboard() {
   
    return (
      <DefaultLayout>
        
        <section className="py-6 px-6 dark:bg-boxdark">
          <h1 className="text-xl font-bold dark:text-slate-200">
          Welcome, Thomas  
          </h1>
  
          <div className="py-4 bg-white gap-6 flex flex-col sm:flex-row">
          <DashboardCard
            title="Total Courses"
            number={15}
          />

          <DashboardCard
            title="Ongoing Courses"
            number={10}
          />

          <DashboardCard
            title="Completed Courses"
            number={5}
          />

<DashboardCard
            title="My Courses"
            number={5}
          />
        </div>
        </section>
      </DefaultLayout>
    );
  }