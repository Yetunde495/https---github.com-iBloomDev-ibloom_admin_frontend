import { useState } from "react";
import Tabs, { Tab } from "../../../components/tabs";
import DefaultLayout from "../../../layout/DefaultLayout";
import SettingsTabSteps from "./settingsTabSteps";

const Settings: React.FC = () => {
  const [tab, setTab] = useState<string>("Profile Settings");

  return (
    <DefaultLayout>
      <section>
        <div className="md:px-3 2xl:px-6 px-2">
          <Tabs>
            <Tab
              tab="Profile Settings"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
            <Tab
              tab="Admin Management"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
            <Tab
              tab="Coupon Management"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
              }}
            ></Tab>
          </Tabs>
        </div>

        <div className={`py-6 2xl:px-6 md:px-3 px-2`}>
          <SettingsTabSteps step={tab} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Settings;