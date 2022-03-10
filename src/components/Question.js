import React from "react";

const Question = (props) => {
    const addClasses = (option) => {
        const selectedOption = props.quiz.selectedOption;
        const correctAnswer = props.quiz.correctAnswer;
        if (props.quizComplete) {
            if ((selectedOption === option && option === correctAnswer)) {
                return "correct";
            } else if (selectedOption === option && option !== correctAnswer) {
                return "incorrect";
            } else if (selectedOption !== option && option === correctAnswer) {
                return "unselected-correct"
            } else {
                return "";
            }
        } else if (selectedOption === option) {
            return "selected";
        } else {
            return "";
        }
    }

    const optionElements = props.quiz.options.map((option, index) => {
        return <span className={`quiz-option ${addClasses(option)}`} onClick={() => props.handleOptionSelection(props.id, option)} key={index}>{option}</span>
    })

    return (
        <div className="quiz-set">
            <h2 className="quiz-question">{props.quiz.question}</h2>
            <p>{props.quiz.correctAnswer}</p>
            {optionElements}
        </div>
    )
}

export default Question;