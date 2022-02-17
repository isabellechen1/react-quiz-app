import React, {useState, useEffect}  from "react"
import Question from "./Question"

export default function Questionlist(props) {
  
    const [submitted, setSubmitted] = useState(false)



    // useEffect(() => {
    //     localStorage.setItem(props.question, selectedAnswer)
    //   }, [selectedAnswer])

	// const allQuestionsAnswered = props.questionData.every(question => question.selectedAnswer !== "");


   function checkAnswer() {
        setSubmitted(true)
    }


    function restartQuiz() {
        setSubmitted(false)
        // setScore(0)
        props.quizStart()
    }
    
  
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const questionElements = props.questionData.map(question => 
        <Question 
            key={question.question} 
            id={question.id}
            question={question.question} 
            incorrectAnswers={question.incorrectAnswers} 
            correctAnswer={question.correctAnswer}
            guessAnswer={question.guessAnswer}
            checkAnswer={checkAnswer}
            submitted={question.submitted}
            decodeHtml={decodeHtml}
        />
    )

    
    return (
        <main className="question-list">
            {questionElements}
            {!submitted && <button onClick={checkAnswer}>Check Answers</button>}
            {submitted && <div><h3 className='score'>{`You have scored $/5 correct answers`}</h3>
                <button onClick={restartQuiz}>Play Again</button></div>}
        </main>
    )
}

// check answer - show score, play again//