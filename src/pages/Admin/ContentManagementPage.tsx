import Tabs, { Tab } from "../../components/tabs";
import { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import ContentTabSteps from "./contentTabSteps";
import { useNavigate, useParams } from "react-router-dom";
import { CurriculumSidebarData } from "../../data/mockData";

const AdminContentManagement: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("Worksheets");

  useEffect(() => {
    if (page === "curriculum") {
      setTab("Curriculum Management");
    }
  }, []);
  return (
    <DefaultLayout>
      <section>
        <div className="md:px-3 2xl:px-6 px-2">
          <Tabs>
            <Tab
              tab="Worksheets"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
                navigate("/app/admin/content-management");
              }}
            ></Tab>
            <Tab
              tab="Curriculum Management"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
                navigate(
                  `/app/admin/content-management/curriculum/Math/${CurriculumSidebarData[0].topics[0].name}`
                );
              }}
            ></Tab>
            <Tab
              tab="Feedbacks"
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
                navigate("/app/admin/content-management");
              }}
            ></Tab>
          </Tabs>
        </div>

        <div
          className={`${
            tab !== "Curriculum Management" && "py-6 2xl:px-6 md:px-3 px-2"
          }`}
        >
          <ContentTabSteps step={tab} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AdminContentManagement;
