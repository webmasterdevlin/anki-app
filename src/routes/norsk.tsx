import { createFileRoute } from '@tanstack/react-router';
import { useState, FormEvent, useRef } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useSpring, animated } from '@react-spring/web';
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
  const [questionLimit, setQuestionLimit] = useState(5);
  const [questionCount, setQuestionCount] = useState(0);
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isReview, setIsReview] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const [previousQuestion, setPreviousQuestion] = useState<Question>();
  const { width, height } = useWindowSize();

  // Animation for the title
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  // Animation for the quiz section
  const scaleUp = useSpring({
    from: { transform: 'scale(0.8)' },
    to: { transform: 'scale(1)' },
    delay: 300,
  });

  // Animation for buttons on hover
  const [hoverProps, setHover] = useSpring(() => ({
    to: { scale: 1 },
    from: { scale: 1 },
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const focusToSubmitButton = () => {
    submitButtonRef?.current?.focus();
  };

  const startQuiz = () => {
    const newData = [...data];
    const firstShuffled = shuffleArray(newData);
    const secondShuffled = shuffleArray([...firstShuffled]);
    const thirdShuffled = shuffleArray([...secondShuffled]);
    const shuffledNewData = shuffleArray([...thirdShuffled]);
    shuffledNewData.splice(questionLimit, shuffledNewData.length - questionLimit);
    const question = shuffledNewData.pop();
    setCurrentQuestion(question);
    setQuestions([...shuffledNewData]);
    setHasQuizStarted(true);
    setFinished(false);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!currentQuestion) {
      alert('No question found');
      return;
    }

    setPreviousQuestion(currentQuestion);

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
        alert(
          `Incorrect! The correct answer was: ${currentQuestion.norwegian.toLowerCase()} = ${currentQuestion.english.toLowerCase()}`,
        );
        let question = questionsFromIncorrectAnswers.pop();
        if (question) {
          setCurrentQuestion(question);
          setQuestionsFromIncorrectAnswers([currentQuestion, ...questionsFromIncorrectAnswers]);
        }
      }
    } else {
      if (currentQuestion.english.toLowerCase() === answer.toLowerCase().trim()) {
        alert('Correct!');
      } else {
        alert(
          `Incorrect! The correct answer was: ${currentQuestion.norwegian.toLowerCase()} = ${currentQuestion.english.toLowerCase()}`,
        );
        setQuestionsFromIncorrectAnswers([currentQuestion, ...questionsFromIncorrectAnswers]);
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
    if (showHint) {
      setShowAnswer(true);
      focusToSubmitButton();
    } else setShowHint(true);
  };

  const handleReportQuestion = () => {
    alert('Question reported!');
    throw new Error(`Reported question : ` + JSON.stringify(previousQuestion, null, 2));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {finished && <Confetti width={width} height={height} />}
      <animated.h1 style={fadeIn} className="mb-4 text-white" tabIndex={0}>
        Practicing Norwegian words
      </animated.h1>
      <animated.section
        style={scaleUp}
        className="w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md"
        aria-live="polite"
      >
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              How many questions would you like to answer? Minimum 5 and maximum 100
            </h2>
            <div className="mb-4">
              <label htmlFor="questionLimit" className="block text-sm font-medium text-gray-700">
                Question Limit
              </label>
              <input
                id="questionLimit"
                required
                type="number"
                value={questionLimit}
                onChange={e => setQuestionLimit(Math.max(5, parseInt(e.target.value, 10)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="5"
                max="100"
                aria-describedby="questionLimitHelp"
              />
              <p id="questionLimitHelp" className="mt-2 text-sm text-gray-500">
                Enter a number between 5 and 100.
              </p>
            </div>
            <button
              disabled={questionLimit < 5 || questionLimit > 100}
              onClick={startQuiz}
              className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              Start the quiz
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Translate to English:
            </h2>
            {isReview && (
              <div className="mb-5">
                <p tabIndex={0}>
                  Reviewing {questionsFromIncorrectAnswers.length + (currentQuestion ? 0 : 1)} incorrect answers
                </p>
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <fieldset className="w-full">
                <legend className="sr-only">Norwegian word to translate</legend>
                <div
                  className="flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Current Question"
                >
                  <p className="text-lg lowercase text-gray-700" tabIndex={0}>
                    {currentQuestion?.norwegian}
                  </p>
                </div>
              </fieldset>
              <div>
                <label htmlFor="answerInput" className="sr-only">
                  Type your answer here
                </label>
                <input
                  id="answerInput"
                  placeholder="Type your answer here..."
                  required={!showAnswer}
                  disabled={showAnswer}
                  type="text"
                  value={answer}
                  onChange={e => setAnswer(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  minLength={!showAnswer ? 2 : 0}
                  aria-required={!showAnswer}
                />
              </div>
              <button
                ref={submitButtonRef}
                type="submit"
                className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
              >
                {showAnswer ? 'Continue' : 'Submit'}
              </button>
            </form>
            {showAnswer && <strong tabIndex={0}>{currentQuestion?.english}</strong>}
            <div className="mb-4 mt-4 text-sm text-gray-600" tabIndex={0}>
              Question {Math.min(questionCount + 1, questionLimit)} of {questionLimit}
            </div>
            {!showAnswer && (
              <div className="mb-10 flex h-3 flex-wrap items-center justify-between">
                <button
                  className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                  onClick={handleShowHint}
                  type="button"
                  aria-pressed={showHint ? 'true' : 'false'}
                >
                  {showHint ? 'show answer' : 'hint'}
                </button>
                {showHint && (
                  <pre className="text-xl text-gray-700" tabIndex={0}>
                    Starts with letter: {currentQuestion?.english[0]}
                  </pre>
                )}
              </div>
            )}
          </>
        )}
      </animated.section>
      <animated.button
        onMouseEnter={() => setHover({ scale: 1.1 })}
        onMouseLeave={() => setHover({ scale: 1 })}
        style={{ transform: hoverProps.scale.to(scale => `scale(${scale})`) }}
        onClick={handleReportQuestion}
        className="mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow hover:bg-pink-600"
        aria-label="Report the previous question"
      >
        Report previous question
      </animated.button>
    </main>
  );
}
