import { useContext } from "react";
import { QuizContex } from "../context/quiz";
import Welldone from "../img/welldone.svg"
import './GameOver.css'


const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContex)
  return (
    <div id="gameover">
        <h2>Fim de Jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>você acertou {quizState.score / 10} de {quizState.questions.length} perguntas.</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button onClick={()=>dispatch({type:"END"})}>Reniciar</button>
    </div>
  )
}

export default GameOver