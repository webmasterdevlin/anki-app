import { createLazyFileRoute } from '@tanstack/react-router';
import { useState, FormEvent, useRef } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { data } from '../data.ts';
import { Question } from '../types.ts';
import { shuffleArray } from '../utils/question';

export const Route = createLazyFileRoute('/english')({
  component: English,
});

function English() {
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
  const [previousQuestion, setPreviousQuestion] = useState<Question>();
  const { width, height } = useWindowSize();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const focusToSubmitButton = () => {
    submitButtonRef?.current?.focus();
  };

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
      alert('Ingen spørsmål funnet');
      return;
    }

    setPreviousQuestion(currentQuestion);

    if (isReview) {
      if (currentQuestion.norwegian.toLowerCase() === answer.toLowerCase().trim()) {
        alert('Riktig!');
        questionsFromIncorrectAnswers.splice(questionsFromIncorrectAnswers.indexOf(currentQuestion), 1);
        const result = questionsFromIncorrectAnswers.pop();
        if (result) {
          setCurrentQuestion(result);
          questionsFromIncorrectAnswers.unshift(result);
          setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers]);
        } else {
          setFinished(true);
          alert('Du har fullført quizen!');
          resetQuiz();
        }
      } else {
        alert(`Stemmer ikke! Riktig svar var: ${currentQuestion.norwegian.toLowerCase()}`);
        let question = questionsFromIncorrectAnswers.pop();
        if (question) {
          setCurrentQuestion(question);
          setQuestionsFromIncorrectAnswers([currentQuestion, ...questionsFromIncorrectAnswers]);
        }
      }
    } else {
      if (currentQuestion.norwegian.toLowerCase() === answer.toLowerCase().trim()) {
        alert('Riktig!');
      } else {
        alert(`Stemmer ikke! Riktig svar var: ${currentQuestion.norwegian.toLowerCase()}`);
        setQuestionsFromIncorrectAnswers([currentQuestion, ...questionsFromIncorrectAnswers]);
      }

      if (questionCount < questionLimit) {
        setQuestionCount(questionCount + 1);
      } else {
        setFinished(true);
        alert('Du har fullført quizen!');
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
          alert('Du har fullført quizen!');
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
    alert('Spørsmål rapportert!');
    throw new Error(`Rapportert spørsmål : ` + JSON.stringify(previousQuestion, null, 2));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-white" tabIndex={0}>
        Øve på engelske ord
      </h1>
      <div className="w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md" aria-live="polite">
        {finished && <Confetti width={width} height={height} />}
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Hvor mange spørsmål vil du svare på? Minimum 5 og maksimum 50
            </h2>
            <div className="mb-4">
              <label htmlFor="questionLimit" className="sr-only">
                Antall spørsmål
              </label>
              <input
                id="questionLimit"
                required
                type="number"
                value={questionLimit}
                onChange={e => setQuestionLimit(Math.max(5, parseInt(e.target.value, 10)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="5"
                aria-describedby="questionLimitHelp"
              />
              <p id="questionLimitHelp" className="sr-only">
                Velg et tall mellom 5 og 50.
              </p>
            </div>
            <button
              disabled={questionLimit < 5 || questionLimit > 50}
              onClick={startQuiz}
              className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              Starte quizen
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Oversett til norsk:
            </h2>
            {isReview && (
              <div className="mb-5">
                <p tabIndex={0}>
                  Gjennomgå {questionsFromIncorrectAnswers.length + (currentQuestion ? 0 : 1)} feil svar
                </p>
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex w-full items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <p className="text-lg lowercase text-gray-700" tabIndex={0}>
                  {currentQuestion?.norwegian}
                </p>
              </div>
              <input
                placeholder="Skriv svaret ditt her..."
                required={!showAnswer}
                disabled={showAnswer}
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                minLength={!showAnswer ? 2 : 0}
                aria-label="Ditt svar"
              />
              <button
                ref={submitButtonRef}
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
              >
                {showAnswer ? 'Fortsette' : 'Sende inn'}
              </button>
            </form>
            {showAnswer && <strong tabIndex={0}>{currentQuestion?.english}</strong>}
            {/* Making answer reveal focusable */}
            <div className="mb-4 mt-4 text-sm text-gray-600">
              Spørsmål {Math.min(questionCount + 1, questionLimit)} av {questionLimit}
            </div>
            {!showAnswer && (
              <div className="mb-10 flex h-3 flex-wrap items-center justify-between">
                <button
                  className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                  onClick={handleShowHint}
                  type="button"
                >
                  {showHint ? 'Vis svar' : 'hint'}
                </button>
                {showHint && (
                  <pre className="text-xl text-gray-700" tabIndex={0}>
                    Begynner med bokstaven: {currentQuestion?.english[0]}
                  </pre>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <button
        onClick={handleReportQuestion}
        className="mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow hover:bg-pink-600"
        aria-label="Rapporter tidligere spørsmål"
      >
        Rapporter tidligere spørsmål
      </button>
    </main>
  );
}
