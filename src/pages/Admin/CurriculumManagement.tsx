import { useState } from "react";
import CurriculumSidebar from "../../layout/CurriculumSidebar";
import DraggableList from "../../components/DraggableList";
import Modal from "../../components/modal";
import Button from "../../components/button";
import Drawer from "../../components/Drawer";

const CurriculumManagement: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [previewLesson, setPreviewLesson] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Algebra Equations",
      order: 1,
    },
    {
      id: 2,
      name: "How to Solve Algebra",
      order: 2,
    },
    {
      id: 3,
      name: "Algebra and Fractions",
      order: 3,
    },
    // Add more items here
  ]);

  const handleReorder = (newOrder: typeof items) => {
    setItems(newOrder);
    console.log(newOrder);
  };

  return (
    <section className="">
      <div className="flex overflow-x-hidden">
        <CurriculumSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setTopic={setTopic}
        />
        <div className="w-full">
          <div className="bg-primary py-4 pl-18">
            <h1 className="text-2xl font-semibold text-white">{topic}</h1>
          </div>
          <div className=" py-4 pl-16 pr-8">
            <DraggableList
              initialItems={items}
              onReorder={handleReorder}
              onPreview={() => setPreviewLesson(true)}
              onDelete={() => setDeleteModal(true)}
            />
          </div>
        </div>
      </div>
      {previewLesson && (
        <Drawer
          width="50%"
          isOpen={previewLesson}
          onClose={() => setPreviewLesson(false)}
          title="Preview Worksheet"
        >
          This is the view for lesson
        </Drawer>
      )}
      <Modal
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        size="w-full max-w-125"
      >
        <div className="flex flex-col gap-8">
          <h5>Are you sure you want to delete this Lesson?</h5>
          <Button width="full" onClick={() => {}}>
            Yes
          </Button>
          <button
            onClick={() => setDeleteModal(false)}
            className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
          >
            No
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default CurriculumManagement;
