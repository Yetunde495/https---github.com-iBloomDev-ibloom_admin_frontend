import Button from "../../../components/button";
import { Select, TextArea } from "../../../components/form";

const Assessment = () => {
  return (
    <div>
      <Button onClick={undefined} text="Add a Question" width="full" />

      <div className="mt-10">
        <div>
          <TextArea
            label="Question 1"
            value=""
            height="150px"
            placeholder="Type your question here..."
            onChange={() => {
              // e.target.value;
            }}
            id=""
            name=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mt-10">
            <Select
              label="Answer"
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
                Select an answer
              </option>
              <option>Open-end Answer</option>
            </Select>

            <Select
              label="Video Selection"
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
                Select a video
              </option>
              <option value="">Intro to UX Design</option>
            </Select>
          </div>

          <div className="flex justify-end gap-x-5 mt-10">
            <button className="text-zinc-500">Cancel</button>
            <Button onClick={undefined} text="Save" />
          </div>
        </div>
        <div className="h-1 border-t border-primary my-15"></div>
        <div>
          <TextArea
            label="Question 1"
            value=""
            height="150px"
            placeholder="Type your question here..."
            onChange={() => {
              // e.target.value;
            }}
            id=""
            name=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mt-10">
            <Select
              label="Answer"
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
                Select an answer
              </option>
              <option>Open-end Answer</option>
            </Select>

            <Select
              label="Video Selection"
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
                Select a video
              </option>
              <option value="">Intro to UX Design</option>
            </Select>
          </div>

          <div className="flex justify-end gap-x-5 mt-10">
            <button className="text-zinc-500">Cancel</button>
            <Button onClick={undefined} text="Save" />
          </div>
        </div>
        <div className="h-1 border-t border-primary my-15"></div>
      </div>
    </div>
  );
};

export default Assessment;
