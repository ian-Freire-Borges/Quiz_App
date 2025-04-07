import {useContext} from "react"
import { QuizContex } from "../context/quiz"
import "./Options.css"
const Options = ({ option ,selectOptnion, answer, hide }) => {
    const [quizState, dispatch] = useContext(QuizContex);
    
  return (
    <div className={`option ${quizState.answerSelected && option === answer ?'correct' : '' } ${quizState.answerSelected !== answer && quizState.answerSelected === option ? "red" : ""}${quizState.answerSelected && option !== answer && quizState.answerSelected !== option ?'wrong' : '' } ${hide ? "hide" : ""}`} onClick={()=>selectOptnion()}>
        <p>{option}</p>
    </div>
  )
}

export default Options