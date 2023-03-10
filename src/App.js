import './App.css';
import React ,{useState} from 'react';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import {QuizContext} from "./Helpers/Context";

function App() {
  const [gameState, setGameState] =useState("menu")
  const [userName, setUserName] = useState("");
  const [score,setScore]=useState(0)
  return (
  
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,userName,setUserName,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "finished" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
