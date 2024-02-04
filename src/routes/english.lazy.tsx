import { createLazyFileRoute } from '@tanstack/react-router';
import { useState, FormEvent } from 'react';
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
  const { width, height } = useWindowSize();

  const startQuiz = () => {
    shuffleArray(data);
    data.splice(questionLimit, data.length - questionLimit);
    const question = data.pop();
    setCurrentQuestion(question);
    setQuestions([...data]);
    setHasQuizStarted(true);
    setFinished(false);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!currentQuestion) {
      alert('Ingen spørsmål funnet');
      return;
    }

    if (isReview) {
      if (currentQuestion.norwegian.toLowerCase().includes(answer.toLowerCase().trim())) {
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
        alert(`Stemmer ikke! Riktig svar var: ${currentQuestion.norwegian}`);
        let question = questionsFromIncorrectAnswers.pop();
        if (question) {
          setCurrentQuestion(question);
          setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers, currentQuestion]);
        }
      }
    } else {
      if (currentQuestion.norwegian.toLowerCase().includes(answer.toLowerCase().trim())) {
        alert('Riktig!');
      } else {
        alert(`Stemmer ikke! Riktig svar var: ${currentQuestion.norwegian}`);
        setQuestionsFromIncorrectAnswers([...questionsFromIncorrectAnswers, currentQuestion]);
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-4">Øve på engelske ord</h1>
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md">
        {finished && <Confetti width={width} height={height} />}
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              HHvor mange spørsmål vil du svare på? Minimum 5 og maksimum 50
            </h2>
            <div className="mb-4">
              <input
                required={true}
                type="number"
                value={questionLimit}
                onChange={e => setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="5"
              />
            </div>
            <button
              disabled={questionLimit < 5 || questionLimit > 50}
              onClick={startQuiz}
              className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
            >
              starte quizen
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">Oversett til norsk:</h2>
            {isReview && (
              <div className="mb-5">
                <p>gjennomgå {questionsFromIncorrectAnswers.length + (currentQuestion ? 0 : 1)} feil svar</p>
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-gray-300
                  px-3
                  py-2
                  shadow-sm
                  focus:border-transparent
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
              "
              >
                <p className="text-lg text-gray-700">{currentQuestion?.english}</p>
              </div>
              <input
                placeholder="Skriv svaret ditt her..."
                required={true}
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                minLength={3}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
              >
                Sende inn
              </button>
            </form>
            {showAnswer && <strong>{currentQuestion?.english}</strong>}
            <div className="mb-4 mt-4 text-sm text-gray-600">
              Spørsmål {Math.min(questionCount + 1, questionLimit)} av {questionLimit}
            </div>
            {!showAnswer && (
              <div className="flex h-3 items-center justify-between">
                <button
                  className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                  onClick={() => {
                    if (showHint) {
                      setShowAnswer(true);
                    } else {
                      setShowHint(true);
                    }
                  }}
                  type="button"
                >
                  {showHint ? 'show answer' : 'hint'}
                </button>
                {showHint && (
                  <pre className="text-xl text-gray-700">starts with letter: {currentQuestion?.english[0]}</pre>
                )}
              </div>
            )}
            <div className="flex h-3 items-center justify-between">
              {/* a simple small tailwind ui button below */}
              <button
                className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                onClick={() => {
                  setShowHint(true);
                  setShowAnswer(true);
                }}
                type="button"
              >
                hint
              </button>
              {showHint && (
                <pre className="text-xl text-gray-700">starts with letter: {currentQuestion?.english[0]}</pre>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
