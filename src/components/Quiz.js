import React, { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = (props) => {
    const [quizSet, setQuizSet] = useState([]);
    const [quizComplete, setQuizComplete] = useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = useState();
    useEffect(() => {
        const fetchQuizSet = async () => {
            try {
                const fetchQuiz = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple');
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

    const handleOptionSelection = (questionId, optionValue) => {
        setQuizSet(prevQuestions => prevQuestions.map((question) => {
            return question.id === questionId ? { ...question, selectedOption: optionValue } : question;
        })
        )
    }

    const quizElements = quizSet.map((quiz, index) => {
        return <Question key={index} quiz={quiz} id={index}
            handleOptionSelection={handleOptionSelection}
            quizComplete={quizComplete} />
    })

    const handleCheckAnswers = () => {
        const correctAnswers = quizSet.filter(quiz => quiz.selectedOption === quiz.correctAnswer);
        setCorrectAnswerCount(correctAnswers.length);
        setQuizComplete(true);
    }

    const handlePlayAgain = () => {
        setQuizSet([]);
        setQuizComplete(false);
        setCorrectAnswerCount();
        props.showQuizPage();
    }

    return (
        <div className="quiz-page">
            {quizElements}
            {(correctAnswerCount === 0 || correctAnswerCount > 0) && <p className="score">You scored {correctAnswerCount}/{quizSet.length} correct answers.</p>}
            <button onClick={quizComplete ? handlePlayAgain : handleCheckAnswers}
                className="in-quiz-btn">{quizComplete ? "Play again" : "Check answer"}</button>
        </div>
    )
}

export default Quiz;