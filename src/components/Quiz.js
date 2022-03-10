import React, { useEffect, useState } from "react";
import Question from "./Question";

/**
 * Quiz component: This renders Question component and also fetches the quiz, maintains 
 * the state for fetched quiz, user entered options, whether quiz is complete.
*/
const Quiz = (props) => {
    //state for fetched Quiz
    const [quizSet, setQuizSet] = useState([]);
    //state for quiz complete, updated when validation is complete
    const [quizComplete, setQuizComplete] = useState(false);
    //state for correct answers count, updated when validation is complete
    const [correctAnswerCount, setCorrectAnswerCount] = useState();

    useEffect(() => {
        //fetch Quiz from opentdb and return a custom quiz object with results from opentb as values
        const fetchQuizSet = async () => {
            try {
                const fetchQuiz = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium');
                const data = await fetchQuiz.json();
                const refinedQuiz = data.results.map((result, index) => {
                    return {
                        id: index,
                        question: result.question,
                        selectedOption: null,
                        options: [...result.incorrect_answers, result.correct_answer],
                        correctAnswer: result.correct_answer
                    }
                })
                setQuizSet(refinedQuiz);
            } catch (err) {
                return err;
            }
        }
        fetchQuizSet();
    }, []);

    /** handle option select event.
     * Updates the selectedOption in the individual quiz object, based on user's option selection
     */
    const handleOptionSelection = (questionId, optionValue) => {
        setQuizSet(prevQuestions => prevQuestions.map((question) => {
            return question.id === questionId ? { ...question, selectedOption: optionValue } : question;
        })
        )
    }

    //renders Quiz elements i.e question component with options
    const quizElements = quizSet.map((quiz, index) => {
        return <Question key={index} quiz={quiz} id={index}
            handleOptionSelection={handleOptionSelection}
            quizComplete={quizComplete} />
    })

    //validate user input and set quizComplete to true
    const handleCheckAnswers = () => {
        const correctAnswers = quizSet.filter(quiz => quiz.selectedOption === quiz.correctAnswer);
        setCorrectAnswerCount(correctAnswers.length);
        setQuizComplete(true);
    }

    /** handle playAgain button action
     * reset state for Quiz, quizComplete, answerCount and show start page
     */
    const handlePlayAgain = () => {
        setQuizSet([]);
        setQuizComplete(false);
        setCorrectAnswerCount();
        props.showQuizPage();
    }

    return (
        <div className="quiz-page">
            {quizElements}
            {/* display answer count if answer count is >=0 */}
            {(correctAnswerCount >= 0) && <p className="score">You scored {correctAnswerCount}/{quizSet.length} correct answers.</p>}
            <button onClick={quizComplete ? handlePlayAgain : handleCheckAnswers}
                className="in-quiz-btn">{quizComplete ? "Play again" : "Check answer"}</button>
        </div>
    )
}

export default Quiz;