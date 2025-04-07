import imagen from '../img/quiz.svg';
import "./Welcome.css";
import { useContext } from 'react';
import { QuizContex } from '../context/quiz';

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContex)

  
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={imagen} alt="Inicio do Quiz" />

    </div>
  )
}

export default Welcome