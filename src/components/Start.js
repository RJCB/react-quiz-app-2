import React from "react";

const Start = (props) => {
    return (
        <div className="start-page">
            <h1 className="title">Quizzical</h1>
            <p className="game-desc">This is a Quiz</p>
            <button onClick={props.showQuizPage} className="start-btn">Start quiz</button>
        </div>
    )
}

export default Start;