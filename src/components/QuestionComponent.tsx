import React, { useState } from "react";
import Button from "./button";
import TextToSpeech from "./TextToSpeech";

// interface Question {
//   id: number;
//   text: string;
//   options: string[];
// }

interface QuestionnaireProps {
  questions: any[];
  onSubmit: () => void;
}

const QuestionComponent: React.FC<QuestionnaireProps> = ({ questions, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-10 md:text-2xl text-xl font-bold">
      <h2>
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="flex gap-3 items-center">
        <TextToSpeech text={questions[currentQuestionIndex].question} />
        <p className="mb-1">{questions[currentQuestionIndex].question}</p>
        </div>
      
        <p className="flex items-end gap-2">
          {questions[currentQuestionIndex].num1}
          <span className="border-b-2 w-30"></span>
          {questions[currentQuestionIndex].num2}
        </p>
      </div>
      <ul className="flex gap-3 flex-wrap">
        {questions[currentQuestionIndex].options.map(
          (option: string, index: number) => (
            <li
              key={index}
              className="py-3 px-4 border-2 border-primary/65 flex justify-center rounded-lg cursor-pointer hover:bg-primary hover:text-white"
            >
              {option}
            </li>
          )
        )}
      </ul>
      <div className="flex justify-between gap-6 w-1/2 text-lg mt-4">
        <Button
          rounded={false}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        {currentQuestionIndex + 1 !== questions.length ? <Button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          rounded={false}
        >
          Next
        </Button>: 
        <button className="bg-success text-white px-10 py-2 rounded-md hover:opacity-95" onClick={onSubmit}>
         Finish
        </button>
        }
      </div>
    </div>
  );
};

export default QuestionComponent;
