import Button from "../../../components/button";
import { InputField, Select, TextArea } from "../../../components/form";

const CourseDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mb-10">
        <InputField
          label="Course Name"
          name="courseName"
          placeholder="Course Name"
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          id={""}
        />
        <InputField
          label="Price"
          name="coursePrice"
          placeholder="Price"
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          id={""}
        />
      </div>

      <TextArea
        label="Course Description"
        value=""
        height="200px"
        placeholder="Course Description"
        onChange={(e) => {
          // e.target.value;
        }}
        id=""
        name=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mt-10">
        <Select
          label="Duration"
          value=""
          onChange={undefined}
          id=""
          name=""
          classNames=""
          isRequired={true}
          disabled={false}
          placeholder="1-2 Weeks"
          defaultValue=""
          selectProps={undefined}
        >
          <option
            value="placeholder"
            selected
            hidden
            style={{ backgroundColor: "blue" }}
          >
            1-2 Weeks
          </option>
        </Select>

        <InputField
          label="Price"
          name="coursePrice"
          placeholder="Price"
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          id={""}
        />
      </div>

      <div className="flex justify-end gap-x-5 mt-10">
        <button className="text-zinc-500">Cancel</button>
        <Button onClick={undefined} text="Save" />
      </div>
    </div>
  );
};

export default CourseDetails;
