import { useContext } from "react";
import { QuizContex } from "../context/quiz";
import Category from '../img/category.svg';
import "./PickCategory.css";

function PickCategory() {
    const [quizState, dispatch] = useContext(QuizContex)
    const choseCategoryAndReorderQuestion = (category) =>{
        dispatch({type: "START_GAME", payload: category})
    }

  return (
    <div id="category">
       <h2>Escolha uma categoria</h2>
       <p>As perguntas serão referentes a os temas abaixo</p>
       <div>
       {quizState.questions.map((question)=>(
        <button onClick={()=> choseCategoryAndReorderQuestion(question.category)} key={question.category}>
            {question.category}
        </button>
       ))}
       </div>
       <img src={Category} alt="categoria do Quiz" />
    </div>
  )
}

export default PickCategory