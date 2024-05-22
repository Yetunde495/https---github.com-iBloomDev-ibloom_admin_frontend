import Tabs, { Tab } from "../../components/tabs";
import { useState } from "react";
import WorksheetTabSteps from "./tabSteps";
import DefaultLayout from "../../layout/DefaultLayout";

const WorksheetsPage: React.FC = () => {
  const [tab, setTab] = useState<string>("All Worksheets");


  return (
    <DefaultLayout>
      <section>
        <div className="md:px-3 2xl:px-6 px-2">
        <Tabs>
          <Tab tab="All Worksheets" activeTab={tab} onChange={setTab}></Tab>
          <Tab tab="Validator's Uploaded Worksheet" activeTab={tab} onChange={setTab}></Tab>
          <Tab tab="My Uploaded Worksheets" activeTab={tab} onChange={setTab}></Tab>
        </Tabs>
        </div>
        

        <div className="py-6 2xl:px-6 md:px-3 px-2">
          <WorksheetTabSteps step={tab} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default WorksheetsPage;