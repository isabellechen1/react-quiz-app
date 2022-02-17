// import { useEffect, useState } from 'react';
import React from 'react';

export default function Welcome(props) {

    // const [categoryOption, setCategoryOption] = useState(0)

    // category in api: category=${category}
    // let newOptions = questionData.map(categoryOption => {
    //     return (
    //         <option value={categoryOption.id}>{categoryOption.name}</option>
    //     )
    //     })
    
    return (
    <div className="welcome">
        <h2>Quizzical Trivia</h2>
        <p>Test Your Knowledge</p>
        <button onClick={props.quizStart}>Start Quiz</button>
        {/* <div className='welcome-option'>
            <select name="category-option" onChange={(e) => setCategoryOption(e.target.value)}>
                <option value={categoryOption} selected disabled hidden>All categories</option>
                {newOptions}
            </select>
        </div> */}
    </div>)
}

