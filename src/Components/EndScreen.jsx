import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Question';
import '../App.css';
function EndScreen() {
    const { score, setscore ,setGameState,userName }=useContext(QuizContext);  
    const restartQuiz = ()=>{
      setscore(0)
      setGameState("menu")
    }


  return (
    <div className="End Screen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>{score}/{Questions.length}</h1>
      <button class="button-62" onClick={restartQuiz}>Restart Quiz</button>
      
    </div>
  )
}

export default EndScreen
