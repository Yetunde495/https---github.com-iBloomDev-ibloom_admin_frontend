/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultLayout from "../../layout/DefaultLayout";
import Button from "../../components/button";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ScheduledLive from "./ScheduledLive";

const LiveClasses = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <section className="ml-10">
        <div className="flex justify-between items-center relative mb-3">
          <h1 className="text-xl font-bold dark:text-slate-200">
            Scheduled Live Classes
          </h1>
          <Button onClick={() => navigate(`/app/tutors/live-classes/create`)}>
            <div className="flex gap-x-2 items-center">
              <IoMdAdd /> Create Live Class
            </div>
          </Button>
        </div>

        <div className="mt-10">
          <ScheduledLive />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LiveClasses;
