import "../App.css";
import { Questions } from "../Helpers/Question";
import { useState } from "react";
import { useContext } from "react";
import {QuizContext} from "../Helpers/Context";

function Quiz() {
  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(
    QuizContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };


  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setcurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button class="button-85" onClick={()=>chooseOption("A")}> {Questions[currQuestion].optionA} </button>
        <button class="button-85" onClick={()=>chooseOption("B")}> {Questions[currQuestion].optionB} </button>
      </div>
      {currQuestion === Questions.length -1?(
        <button class="button-62" onClick={finishQuiz}>Finish Quiz</button>
      ): (
       <button class="button-62" onClick={nextQuestion}>Next Question </button>
      )}
      
    </div>
  )
}

export default Quiz

