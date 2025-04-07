import { createContext , useReducer} from "react";
import questions from '../data/question_complete'
const STAGES = ["Start","category","Playing","End"];

const initialState={
    gameStage: STAGES[0],
    questions,
    currentQuestion :0,
    score: 0,
    answerSelected: false,
    help:false,
    helpCount:3,
    optionHide: null,
    deleteCount:2,
};

const quizReducer = (state, action) => {
    
    switch (action.type){
        
        case "CHANGE_STATE":
               return {
                   ...state,
                   gameStage: STAGES[1],
               };
        case "START_GAME":
            let quizQuestions = null

            state.questions.forEach((question)=>{
                if(question.category === action.payload){
                    quizQuestions = question.questions
                }
            })
            const reorderedQuestions = quizQuestions.sort(()=>{
                return Math.random() - 0.5;
               })
              
            return{
                ...state,
                questions: reorderedQuestions,
                gameStage: STAGES[2]

            }
   

        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            if(nexQuestion >= state.questions.length ){return{
                ...state,
                currentQuestion :0,
                gameStage: STAGES[3],
            } }

            return{
                ...state,
                optionHide: null,
                help: false,
                currentQuestion: nexQuestion,
                answerSelected: false,
                
            }
        case "END":
            return{
                ...initialState,
                questions: initialState.questions
            }
     

        case "CHECK_ANSWER":
            if(state.answerSelected) return state;
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer =1;

            return {
                ...state,
                score: state.score + (correctAnswer * 10),
                answerSelected: option,
            }

            case "SHOW_TIP":
                const atualHelpCount = state.helpCount-1;
                return {
                    ...state,
                    helpCount:atualHelpCount,
                    help: "tip",
                }

            case "REMOVE":
                if (state.deleteCount <= 0) return state;
                const maxDeleter = state.deleteCount -1;
                const questionWithoutOption = state.questions [state.currentQuestion];
                let repeat = true;
                let optionHide;

                questionWithoutOption.options.forEach((option)=>{
                    if(option !== questionWithoutOption.answer && repeat){
                        optionHide = option
                        repeat = false;
                    }
                });

                return{
                    ...state,
                    optionHide,
                    help:true,
                    deleteCount:maxDeleter,
                };



            default:
                return state;
    }
}

export const QuizContex = createContext()

export const QuizProvider = ({children}) =>{
    const value = useReducer (quizReducer, initialState);
 
    return <QuizContex.Provider value={value}>{children} </QuizContex.Provider>;
};