import { useContext } from 'react'
import { QuizContex } from '../context/quiz'
import './Question.css'
import Options from './Options';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContex);
    const currentQuestion = quizState.questions[quizState.currentQuestion ]

    const onSelectOption = (option)=>{
        dispatch({
            type: "CHECK_ANSWER",
            payload:{answer: currentQuestion.answer, option}
        });
    }
    console.log(quizState);
  return (
    <div id='question'>
        <p>pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>

        <h2>{currentQuestion.question}</h2>

        <div id='option-container'>
            {currentQuestion.options.map((option)=>(
                <Options option={option} key={option} answer={currentQuestion.answer}
                selectOptnion={()=> onSelectOption(option)}
                hide={quizState.optionHide === option ? "hide": null}/>
            ))}
        </div>
        {!quizState.answerSelected &&  !quizState.help && (
            <>
            {quizState.helpCount > 0 &&(
                <button onClick={()=>dispatch({type: "SHOW_TIP",})}>Dica x {quizState.helpCount}</button>
            )}
            {quizState.deleteCount> 0 &&(
                <button onClick={()=> dispatch({type: "REMOVE"})}>Ecluir uma x {quizState.deleteCount}</button>
            )}
            </>
        )}
           {quizState.help ==="tip" &&
                <p>{currentQuestion.tip}</p>
                }
        {quizState.answerSelected && (<button onClick={()=>dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>)}
    </div>
  )
}

export default Question