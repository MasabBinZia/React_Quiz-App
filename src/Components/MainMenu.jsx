import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import '../App.css';
const MainMenu = () => {
  const {  setGameState, setUserName } =useContext(QuizContext);
  return (
    <div className="Menu">
         <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button onClick={()=>{setGameState("quiz");}} class="button-54">Start Quiz!</button>
    </div>
  )
}

export default MainMenu


