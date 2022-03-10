import React from "react";

/**
 * Question component: renders Question, options
 */
const Question = (props) => {
    //add custom classes based on whether quiz is completed or not and validations
    const addClasses = (option) => {
        const selectedOption = props.quiz.selectedOption;
        const correctAnswer = props.quiz.correctAnswer;
        if (props.quizComplete) {
            if ((selectedOption === option && option === correctAnswer)) {
                return "correct";//if user selected option is correct
            } else if (selectedOption === option && option !== correctAnswer) {
                return "incorrect";//if user selected option is wrong
            } else if (selectedOption !== option && option === correctAnswer) {
                return "unselected-correct"//if user didn't select any option and a particular option is the correct one
            } else {
                return "";//for unselected options
            }
        } else if (selectedOption === option) {
            return "selected";//if quiz is still in progress and user selects a option
        } else {
            return "";//default
        }
    }

    /**
     * render options with custom classes, onclick event handlers.
     * onClick:undefined - when quiz is complete and to disable user selection for options
     */
    const optionElements = props.quiz.options.map((option, index) => {
        return <span className={`quiz-option ${addClasses(option)}`} onClick={props.quizComplete ? undefined : () => props.handleOptionSelection(props.id, option)} key={index}>{option}</span>
    })

    return (
        <div className={`quiz-set ${props.quizComplete ? "disabled" : ""}`}>
            <h2 className="quiz-question">{props.quiz.question}</h2>
            <p>{props.quiz.correctAnswer}</p>
            {optionElements}
        </div>
    )
}

export default Question;