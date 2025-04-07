import './App.css'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import Question from './components/Question'
import { QuizContex } from './context/quiz'
import GameOver from './components/GameOver'
import PickCategory from "./components/PickCategory"

function App() {
   const [quizState, dispatch] = useContext(QuizContex)

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "category" && <PickCategory/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>  
  
  )
}

export default App
