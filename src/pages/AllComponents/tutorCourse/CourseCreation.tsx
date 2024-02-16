/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/button";
import EmptyStateImage from "../../../assets/images/empty-courses.png";
// import Accordion from "../../../components/Accordion";
// import { HiOutlineDocumentText } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";
import FieldInput from "../../../components/form/Input";
import { useState } from "react";
import { BsPen, BsTrash } from "react-icons/bs";
import CourseContent from "./components/Content";

type CourseCreationProps = {
  onProceed: () => void;
};
// interface Content {
//   title: string;
//   content: any;
//   // Add more fields as needed
// }
interface Segment {
  title: string;
  content: any;
  // Add more fields as needed
}
interface Section {
  title: string;
  segments: Array<Segment>;
  // Add more fields as needed
}

type CreateSectionProps = {
  sections?: Section[];
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
};
type CreateSegmentProps = {
  sections?: Section[];
  index: number;
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateSection: React.FC<CreateSectionProps> = ({ setSections }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    const newSection: Section = {
      title: name,
      segments: [],
      // Add more fields as needed
    };
    setSections((prevSections) => [...prevSections, newSection]);
    setName("");
    setShow(false);
  };
  return (
    <section className="w-full">
      <Button
        onClick={() => setShow(true)}
        text="Create a Section"
        width="full"
      />
      {show && (
        <div className="bg-[#F5F6FD] rounded-xl my-8 p-6">
          <FieldInput
            label="Section Name"
            value={name}
            id="section_name"
            onChange={(val) => setName(val)}
          />
          <div className="flex justify-end gap-5 items-center my-4">
            <button
              className="bg-white/80 py-2.5 px-6 hover:bg-white text-black/80 rounded-lg"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            <button
              className="bg-primary/90 py-2.5 px-6 hover:bg-primary disabled:bg-primary/70 text-white rounded-lg"
              disabled={name === ""}
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const CreateSegment: React.FC<CreateSegmentProps> = ({
  setSections,
  index,
  setShow,
}) => {
  const [name, setName] = useState("");

  const handleAddSegment = (index: number) => {
    const newSegment: Segment = {
      title: name,
      content: null,
    };

    // Update the sections array by appending the new segment to the segments array of the corresponding section
    setSections((prevSections) => {
      const updatedSections = [...prevSections]; // Create a copy of the sections array
      updatedSections[index] = {
        ...updatedSections[index],
        segments: [...updatedSections[index].segments, newSegment],
      };
      return updatedSections;
    });

    setName("");
    setShow(false);
  };
  return (
    <section className="w-full">
      <div className="bg-[#F5F6FD] rounded-xl my-8 p-6">
        <FieldInput
          label="Segment Name"
          value={name}
          id="segment_name"
          onChange={(val) => setName(val)}
        />
        <div className="flex justify-end gap-5 items-center my-4">
          <button
            className="bg-white/80 py-2.5 px-6 hover:bg-white text-black/80 rounded-lg"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
          <button
            className="bg-primary/90 py-2.5 px-6 hover:bg-primary disabled:bg-primary/70 text-white rounded-lg"
            disabled={name === ""}
            onClick={() => handleAddSegment(index)}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

const CourseCreation: React.FC<CourseCreationProps> = ({}) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [show, setShow] = useState(false);
  const [contentView, setContentView] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState({
    index: 0,
  });

  return (
    <div>
      <CreateSection setSections={setSections} />
      <div className="py-6 flex flex-col gap-4">
        {sections.map((val, index) => (
          <div key={index}>
            <div className="bg-[#F5F6FD] py-2 px-4 flex gap-6 w-full items-center rounded">
              <p>{val.title}</p>
              <div className="flex gap-3">
                <button
                  className="text-primary bg-transparent p-0"
                  onClick={() => {}}
                >
                  <BsTrash />
                </button>
                <button
                  className="text-primary bg-transparent p-0"
                  onClick={() => {}}
                >
                  <BsPen />
                </button>
              </div>
              <button
                className="bg-primary/90 py-2.5 px-6 ml-auto hover:bg-primary disabled:bg-primary/70 text-white rounded-lg"
                onClick={() => setShow(true)}
              >
                Add Segment
              </button>
            </div>

            {show && (
              <CreateSegment
                setSections={setSections}
                index={index}
                setShow={setShow}
              />
            )}
            <div className="border border-stroke border-t-0 rounded-b -mt-1 mx-[1px] p-6 flex flex-col gap-2">
              {val?.segments.map((val, index) => (
                <div className=" " key={index}>
                  <div className="flex justify-between">
                    <p>{val.title}</p>
                    <button
                      className="bg-transparent text-primary/90 disabled:bg-primary/70 hover:text-primary"
                      onClick={() => {
                        setSelectedSegment((s: any) => ({
                          ...s,
                          index: index,
                        }));
                        setContentView(true);
                      }}
                    >
                      Add Content
                    </button>
                  </div>
                  {contentView && selectedSegment.index === index && (
                    <div>
                      <CourseContent onCancel={() => {
                        setContentView(false)
                        setSelectedSegment((s: any) => ({
                          ...s,
                          index: 0,
                        }))
                      }} />
                      
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {sections.length === 0 && (
        <div
          className="flex justify-center items-center"
          style={{ height: "60vh" }}
        >
          <div>
            <img src={EmptyStateImage} className="m-auto" />
            <div className="my-8">
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCreation;
