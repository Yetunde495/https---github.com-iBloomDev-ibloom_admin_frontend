import { useState } from "react";
import Tabs, { Tab } from "../../../components/tabs";
import DefaultLayout from "../../../layout/DefaultLayout";
import UserTabSteps from "./userTabSteps";

const UserManagement: React.FC = () => {
  const [tab, setTab] = useState<string>("Teachers");

  return (
    <DefaultLayout>
      <section>
        <div className="md:px-3 2xl:px-6 px-2">
          <Tabs>
            <Tab
              tab="Teachers"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
            <Tab
              tab="Parents"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
            <Tab
              tab="Students"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
          </Tabs>
        </div>

        <div className={`py-6 2xl:px-6 md:px-3 px-2`}>
          <UserTabSteps step={tab} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default UserManagement;
