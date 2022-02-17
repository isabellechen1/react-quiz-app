import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Questionlist from './components/Questionlist'

function App() {
  const [questionData, setQuestionData] = useState([])
  const [started, setStarted] = useState(false)

  useEffect(() => {
    async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?&amount=5&difficulty=easy&type=multiple")
      const data = await res.json()
      setQuestionData(data.results.map(question => ({
        question:question.question,
        correctAnswer: question.correct_answer,
        incorrectAnswers:question.incorrect_answers,
        guessAnswer:""
      })))

    }
    getQuizData()
}, [])

  // useEffect(() => {
  //   localStorage.setItem("questionData", JSON.stringify(questionData))
  // }, [questionData])

  function quizStart(){
    setStarted(true)
  }


  return( 
    <main className='start-page'>
      <Questionlist 
        questionData={questionData}
        started={started}
        quizStart={quizStart}/>
    </main>
  )
}

export default App;


// {!started ? (
//   <Welcome quizStart={quizStart} />
// ):(
//   <Questionlist 
//     questionData={questionData}
//     quizStart={quizStart}/>
// )
// }



// structure:
// Parent: App
// Child: Welcome : Questionlist -  Question 


// passed questionData to Questionlist:       
// <Questionlist 
//   questionData={questionData}/>

// passed from Questionlist to Question
// const questionElements = props.questionData.map(question => 
//   <Question {value} />
// return {questionElements}

// display questions in Question
// return <h4>{props.question}</h4>