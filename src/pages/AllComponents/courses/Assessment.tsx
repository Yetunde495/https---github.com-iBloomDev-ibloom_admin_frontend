/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const data = {
  title: "Question 5",
  points: 5,
  total_points: 5,
};

const CheckBoxDataArray = [
  { id: "ropt1", label: "Option 1", isCorrect: true },
  { id: "ropt2", label: "Option 2", isCorrect: false },
  { id: "ropt3", label: "Option 3", isCorrect: false },
  { id: "ropt4", label: "Option 4", isCorrect: false },
];

const Assessment = () => {
  const [nextClicked, setNextClicked] = useState(false);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event: any) => {
    if (event.target.checked) {
      setSelectedOption(event.target.value);
      setError(false);
    }
  };

  const handleNextClick = () => {
    if (selectedOption === null) {
      setError(true);
      return;
    }

    setNextClicked(true);
  };

  return (
    <div className="my-5 bg-[#fcfcfc] min-h-sceen w-full py-5 border-b border-stroke">
      <div className=" mx-auto mt-8 border-b border-zinc-200 p px-9 pb-2">
        <h4 className="text-base">Assessment</h4>
      </div>

      <div className="py-10 px-10">
        <div className="flex justify-between items-center">
          <h1 className="text-x  dark:text-slate-200">{data.title}</h1>

          <p className="text-slate-500 text-xs font-bold">
            {data.points}
            <span className="text-primary">/{data.total_points}</span>
          </p>
        </div>
        <p className="text-sm mt-5 text-slate-400">
          Lorem ipsum dolor sit amet consectetur. Netus ac nam consectetur nisi.
          Risus porttitor tellus tellus nisi consectetur vestibulum?
        </p>
        <CheckBox>
          {CheckBoxDataArray.map((item) => (
            <div className="radio-item" key={item.id}>
              <input
                type="radio"
                id={item.id}
                name="item"
                value={item.id}
                disabled={nextClicked}
                required
                onChange={handleRadioChange}
              />
              <label
                htmlFor={item.id}
                className={` ${
                  nextClicked && item.isCorrect && item.id === selectedOption
                    ? "correct"
                    : nextClicked && item.id === selectedOption
                    ? "wrong"
                    : ""
                }`}
              >
                <p className="label-text"> {item.label}</p>
                <div className="item-icon">
                  <div>
                    {nextClicked && item.isCorrect ? (
                      <IoCheckmarkOutline />
                    ) : nextClicked ? (
                      <RxCross1 />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </label>
            </div>
          ))}
        </CheckBox>
        <textarea className="border h-40 w-full mt-12 mb-10 border-zinc-200 p-2 outline-none" />
        {error && (
          <p className="text-red-500 mt-2">
            Please select an option before proceeding.
          </p>
        )}

        <div className="flex ">
          <button
            className="flex items-center gap-1 bg-primary text-white py-1 px-2 rounded-md"
            onClick={handleNextClick}
          >
            Next <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckBox = styled.div`
  margin-top: 3em;
  .radio-item {
    position: relative;
    padding: 0 6px;
    margin: 10px 0 0;
  }

  .radio-item input[type="radio"] {
    display: none;
  }

  .radio-item label {
    color: #666;
    font-weight: normal;
  }

  .radio-item label:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 0;
    margin: 0 5px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid #eaecf0;
    background-color: transparent;
  }
  .radio-item input[type="radio"]:checked + label:before {
    border: 2px solid #d6bbfb;
  }

  .radio-item input[type="radio"]:checked + label:after {
    border-radius: 11px;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 1.5em;
    left: 28px;
    content: " ";
    display: block;
    background: #d6bbfb;
  }
  .radio-item input[type="radio"] + label {
    border: 1px solid #eaecf0;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 0.7em;
    align-items: center;
    margin-bottom: 1.5em;
  }
  .radio-item input[type="radio"]:checked + label {
    color: #d6bbfb;
    border: 1px solid #d6bbfb;
  }
  .label-text {
    width: 80%;
  }

  //correct and wrong styles

  .radio-item input[type="radio"]:checked + label.correct {
    background-color: #f5fff8;
    color: #2cb84a;
    border-color: #2cb84a;
  }
  .radio-item input[type="radio"]:checked + label.wrong {
    background-color: #fff4f4;
    color: #ff4343;
    border-color: #ff4343;
  }
  .radio-item input[type="radio"]:checked + label.wrong:before {
    border: 2px solid #ff4343;
  }
  .radio-item input[type="radio"]:checked + label.wrong:after {
    border: 2px solid #ff4343;
    background: #ff4343;
  }
  .radio-item input[type="radio"]:checked + label.correct:before {
    border: 2px solid #2cb84a;
  }
  .radio-item input[type="radio"]:checked + label.correct:after {
    border: 2px solid #2cb84a;
    background: #2cb84a;
  }
`;

export default Assessment;
