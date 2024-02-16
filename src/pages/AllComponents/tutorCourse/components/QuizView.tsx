// QuizView.tsx

import React, { useState } from "react";
import Button from "../../../../components/button";
import { FormProvider, useForm } from "react-hook-form";
import { FormGroup, Textarea } from "../../../../components/form";
import Select from "../../../../components/form/customSelect";
import { BsPen, BsTrash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import FieldInput from "../../../../components/form/Input";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";
import Tooltip from "../../../../components/Tooltip";

const QuizView: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const methods = useForm<any>();
  const [questions, setQuestions] = useState<any>([]);
  const [showForm, setShowForm] = useState(true);
  const [answerType, setAnswerType] = useState("");

  const [answers, setAnswers] = useState([
    {
      id: 1,
      value: "Yes",
      correct_answer: false,
    },
    {
      id: 2,
      value: "No",
      correct_answer: false,
    },
  ]);
  const [optionForm, setOptionForm] = useState(false);
  const [option, setOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [optionId, setOptionId] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleEdit = (id: any, value: any) => {
    setIsEditing(true);
    setOptionId(id);
    setEditedValue(value);
  };

  const handleEditSubmit = () => {
    if (editedValue !== null) {
      const updatedAnswers = answers.map((answer) =>
        answer.id === optionId ? { ...answer, value: editedValue } : answer
      );
      // Update the state or do whatever you need with the updated answers
      setAnswers(updatedAnswers);
      setIsEditing(false);
      setOptionId(null);
      setEditedValue("");
    }
  };

  const handleAddOption = () => {
    const newAnswer: any = {
      id: 3,
      value: option,
    };
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    setOption("");
    setOptionForm(false);
  };
  const handleDeleteOption = (val: any) => {
    // Filter out the answer with the given ID
    const updatedAnswers = answers.filter((answer) => answer.id !== val.id);
    setAnswers(updatedAnswers);
  };
  const handleSetCorrectAnswer = (val: any) => {
    // Update the correct_answer field of the clicked answer
    const updatedAnswers = answers.map((answer) => ({
      ...answer,
      correct_answer: answer.id === val.id ? true : false,
    }));
    setAnswers(updatedAnswers);
  };
  const onSubmit = (data: any) => {
    const { errors } = methods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }
    console.log(data);
    setQuestions([...questions, data]);
    methods.reset();
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-lg font-medium text-black/70">Add Quiz View</h1>
        {!showForm && (
          <Button
            disabled={showForm}
            onClick={() => setShowForm(true)}
            text="Add a Question"
          />
        )}
      </div>

      {questions.length > 0 &&
        questions.map((val: any, index: number) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <p>{val.question}</p>
          </div>
        ))}

      {showForm && (
        <div className="mt-8">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormGroup>
                <Textarea
                  label="Question"
                  name="question"
                  placeholder="Enter your question"
                  rules={{ required: "This field is required" }}
                />
              </FormGroup>

              <FormGroup>
                <Select
                  label="Answer Type"
                  name="answer_type"
                  rules={{ required: "Please select type of answer" }}
                  onChange={(val) => setAnswerType(val)}
                >
                  <option value="">Select...</option>
                  <option>Open-end Answer</option>
                  <option>Close-end Answer</option>
                </Select>

                <Select
                  label="Question Points"
                  name="point"
                  rules={{ required: false }}
                >
                  <option value="">Select number of points...</option>
                  <option>10</option>
                  <option>20</option>
                </Select>
              </FormGroup>

              {answerType === "Close-end Answer" && (
                <FormGroup>
                  <div className="mt-6 w-full">
                    <p className="mb-3 font-medium">Option</p>
                    <div className="w-full  gap-3 flex flex-col border border-slate-300 rounded-md px-4 py-4">
                      {answers.map((val, index) => (
                        <div key={index}>
                          <div className="py-2 px-4 flex gap-6 w-full items-center rounded">
                            <p>{val.value}</p>
                            <div className="flex gap-3 items-center ml-auto">
                              <button
                                className="text-primary bg-transparent p-0 mb-1"
                                onClick={() => handleEdit(val.id, val.value)}
                                type="button"
                              >
                                <BsPen />
                              </button>
                              <button
                                className="text-primary bg-transparent p-0 mb-[5px]"
                                onClick={() => handleDeleteOption(val)}
                                type="button"
                              >
                                <BsTrash />
                              </button>
                              <Tooltip text="Set this option as correct answer">
                                <button
                                  className="text-primary bg-transparent p-0"
                                  onClick={() => handleSetCorrectAnswer(val)}
                                  type="button"
                                >
                                  {val?.correct_answer ? (
                                    <IoIosCheckmarkCircle size={20} />
                                  ) : (
                                    <FaCircleDot size={18} />
                                  )}
                                </button>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex gap-3 items-center w-44 px-6 py-2 bg-primary/95 hover:bg-primary text-white font-medium rounded-md"
                        onClick={() => setOptionForm(true)}
                      >
                        <AiOutlinePlus /> Add Option
                      </button>
                      {optionForm && (
                        <div className="bg-[#F5F6FD] rounded-xl my-8 p-6">
                          <FieldInput
                            label="Option"
                            value={option}
                            id="option"
                            onChange={(val) => setOption(val)}
                          />
                          <div className="flex justify-end gap-5 items-center my-4">
                            <button
                              className="bg-white/80 py-2.5 px-6 hover:bg-white text-black/80 rounded-lg"
                              type="button"
                              onClick={() => setOptionForm(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-primary/90 py-2.5 px-6 hover:bg-primary disabled:bg-primary/70 text-white rounded-lg"
                              disabled={option === ""}
                              type="button"
                              onClick={() => handleAddOption()}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
                      {isEditing && (
                        <div className="bg-[#F5F6FD] rounded-xl my-8 p-6">
                          <FieldInput
                            label="Option"
                            value={editedValue}
                            id="option"
                            onChange={(val) => setEditedValue(val)}
                          />
                          <div className="flex justify-end gap-5 items-center my-4">
                            <button
                              className="bg-white/80 py-2.5 px-6 hover:bg-white text-black/80 rounded-lg"
                              type="button"
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-primary/90 py-2.5 px-6 hover:bg-primary disabled:bg-primary/70 text-white rounded-lg"
                              disabled={editedValue === ""}
                              type="button"
                              onClick={() => handleEditSubmit()}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>
              )}

              <div className="flex justify-end gap-x-5 mt-10">
                <button className="text-zinc-500" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <Button
                  type="submit"
                  onClick={() => {}}
                  text="Add Question"
                  height="12"
                />
              </div>
            </form>
          </FormProvider>
        </div>
      )}
      <div className="flex justify-between gap-x-5 mt-12 border-t border-slate-400 py-5">
        <button className="text-zinc-500 border border-slate-300 hover:bg-gray hover:text-zinc-600 rounded-md px-6 py-1.5" onClick={onCancel}>
          Cancel
        </button>
       {questions.length > 0 && <Button
          type="submit"
          onClick={() => {}}
          text="Save Quiz"
          height="11"
        /> }
      </div>
    </div>
  );
};

export default QuizView;
