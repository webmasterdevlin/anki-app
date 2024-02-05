import { createFileRoute } from '@tanstack/react-router';
import { useState, FormEvent } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { data } from '../data';
import { Question } from '../types';
import { shuffleArray } from '../utils/question';

export const Route = createFileRoute('/norsk')({
  component: Norsk,
});

function Norsk() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>();
  const [questionsFromIncorrectAnswers, setQuestionsFromIncorrectAnswers] = useState<Question[]>([]);
  const [answer, setAnswer] = useState('');
  const [questionLimit, setQuestionLimit] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isReview, setIsReview] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const { width, height } = useWindowSize();

  const startQuiz = () => {
    const newData = [...data];
    shuffleArray(newData);
    newData.splice(questionLimit, newData.length - questionLimit);
    const question = newData.pop();
    setCurrentQuestion(question);
    setQuestions([...newData]);
    setHasQuizStarted(true);
    setFinished(false);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!currentQuestion) {
      alert('No question found');
      return;
    }

    if (isReview) {
      if (currentQuestion.english.toLowerCase() === answer.toLowerCase().trim()) {
        alert('Correct!');
        questionsFromIncorrectAnswers.splice(questionsFromIncorrectAnswers.indexOf(currentQuestion), 1);
        const result = questionsFromIncorrectAnswers.pop();
        if (result) {
          setCurrentQuestion(result);
          questionsFromIncorrectAnswers.unshift(result);
          setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers]);
        } else {
          setFinished(true);
          alert('You have completed the quiz!');
          resetQuiz();
        }
      } else {
        alert(`Incorrect! The correct answer was: ${currentQuestion.english.toLowerCase()}`);
        let question = questionsFromIncorrectAnswers.pop();
        if (question) {
          setCurrentQuestion(question);
          setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers, currentQuestion]);
        }
      }
    } else {
      if (currentQuestion.english.toLowerCase() === answer.toLowerCase().trim()) {
        alert('Correct!');
      } else {
        alert(`Incorrect! The correct answer was: ${currentQuestion.english.toLowerCase()}`);
        setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers, currentQuestion]);
      }

      if (questionCount < questionLimit) {
        setQuestionCount(questionCount + 1);
      } else {
        setFinished(true);
        alert('You have completed the quiz!');
        resetQuiz();
      }
      let question = questions.pop();
      if (question) {
        setCurrentQuestion(question);
        setQuestions([...questions]);
      } else {
        if (questionsFromIncorrectAnswers.length > 0) {
          setIsReview(true);
          const result = questionsFromIncorrectAnswers.pop();
          if (result) {
            setCurrentQuestion(result);
            questionsFromIncorrectAnswers.unshift(result);
          }
        } else {
          alert('You have completed the quiz!');
          resetQuiz();
        }
      }
    }

    setAnswer('');
    setShowHint(false);
    setShowAnswer(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(null);
    setQuestionsFromIncorrectAnswers([]);
    setIsReview(false);
    setHasQuizStarted(false);
    setQuestionLimit(0);
    setQuestionCount(0);
  };

  const handleShowHint = () => {
    if (showHint) setShowAnswer(true);
    else setShowHint(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-4">Practicing Norwegian words</h1>
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md">
        {finished && <Confetti width={width} height={height} />}
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              How many questions would you like to answer? Minimum 5 and maximum 50
            </h2>
            <div className="mb-4">
              <input
                required={true}
                type="number"
                value={questionLimit}
                onChange={e => setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="5"
              />
            </div>
            <button
              disabled={questionLimit < 5 || questionLimit > 50}
              onClick={startQuiz}
              className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              Start the Quiz
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">Translate to English:</h2>
            {isReview && (
              <div className="mb-5">
                <p>reviewing {questionsFromIncorrectAnswers.length + (currentQuestion ? 0 : 1)} incorrect answers</p>
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex w-full items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <p className="text-lg lowercase text-gray-700">{currentQuestion?.norwegian}</p>
              </div>
              <input
                placeholder="Type your answer here..."
                required={showAnswer ? false : true}
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                minLength={showAnswer ? 0 : 3}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
              >
                {showAnswer ? 'Continue' : 'Submit'}
              </button>
            </form>
            {showAnswer && <strong>{currentQuestion?.english}</strong>}
            <div className="mb-4 mt-4 text-sm text-gray-600">
              Question {Math.min(questionCount + 1, questionLimit)} of {questionLimit}
            </div>
            {!showAnswer && (
              <div className="flex h-3 flex-wrap items-center justify-between">
                <button
                  className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                  onClick={handleShowHint}
                  type="button"
                >
                  {showHint ? 'show answer' : 'hint'}
                </button>
                {showHint && (
                  <pre className="text-xl text-gray-700">starts with letter: {currentQuestion?.english[0]}</pre>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <button
        onClick={() => {
          alert('Reported question');
          throw new Error('Reported question');
        }}
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white shadow-md hover:bg-red-600"
      >
        report previous question
      </button>
    </div>
  );
}
