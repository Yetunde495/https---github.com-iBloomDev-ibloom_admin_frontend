// MainComponent.tsx

import React, { useState } from "react";
import PillList from "./PillList";
import QuizView from "./QuizView"; // Import other views similarly
import { CourseVideoUpload } from "../FileUpload";
import { EditorView } from "./EditorView";
import Button from "../../../../components/button";

const CourseContent: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [selectedPill, setSelectedPill] = useState<string | null>(null);

  const handleSelect = (pill: string) => {
    setSelectedPill(pill);
  };

  const handleCancel = () => {
    setSelectedPill(null);
    onCancel();
  };

  return (
    <div className="p-4">
      {selectedPill ? (
        <div>
          {selectedPill === "Add Quiz" && <QuizView onCancel={handleCancel} />}
          {selectedPill === "Upload Video" && (
            <div className="py-6">
              <label className="mb-2 text-[#344054] dark:text-slate-100">
                Upload Video
              </label>
              <CourseVideoUpload />
              <div className="flex justify-end gap-x-5 mt-10">
                <button className="text-zinc-500" onClick={handleCancel}>
                  Cancel
                </button>
                <Button type="submit" onClick={() => {}} text="Save" />
              </div>
            </div>
          )}
          {selectedPill === "Article(Reading)" && (
            <EditorView
              onCancel={handleCancel}
              onSave={(val) => console.log(val)}
            />
          )}
          {/* Render other views similarly */}
        </div>
      ) : (
        <PillList onSelect={handleSelect} />
      )}
    </div>
  );
};

export default CourseContent;
