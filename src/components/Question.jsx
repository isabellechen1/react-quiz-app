import React, { useState, useEffect } from 'react';
import {decode} from 'html-entities'

export default function Question(props) {
    const [allAnswers, setAllAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [score, setScore] = useState(0)

  
    useEffect(() => {
        setAllAnswers([props.correctAnswer, ...props.incorrectAnswers].sort())
      }, [])

   
    function handleClick(e) {
        if (e.target.classList.contains("active")) {
          e.target.classList.remove("active");
        } else {
          let answers = e.target.parentNode.childNodes;
          answers.forEach((ans) => {
            ans.classList.remove("active");
          });
          e.target.classList.add("active");
          setSelectedAnswer(e.target.outerText)
        }
      }


// correct answer -> setscore worked, total score not working
// keep adding score for correct answers

    useEffect(() => {
      if (selectedAnswer === props.correctAnswer) {
        setScore(prevScore => prevScore + 1)}
      }, [selectedAnswer])

   
    console.log(props.correctAnswer)
    console.log(score)

    const answerElements = allAnswers.map((answer, index) => {
      return (
        <>
        {!props.submitted ?
        <span key={index} onClick={(e) => handleClick(e)}>{decode(answer)}</span> 
        :
        <span 
          key={index}
          className={`submitted 
          ${ props.correctAnswer === answer ? 'correct' : ""}
          ${ selectedAnswer === answer && props.incorrectAnswers.some(ans => ans === selectedAnswer) ? 'wrong' : ''}
          `}
        >
          {decode(answer)}
        </span>}
        </>
      )
    })

    return (
        <section className='quiz'>
          <h3 className='questions'>{`${decode(props.question)}`}</h3>
          <h3 className='answers'>{answerElements}</h3> 
        </section>
    )
}
