import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = answers;
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {console.log(answerState)}
      {shuffledAnswers.current.map((answer) => {
        let isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClasses}
              onClick={() => {
                onSelect(answer);
              }}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
