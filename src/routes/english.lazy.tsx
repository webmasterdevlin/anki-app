import { useSpring, animated } from '@react-spring/web';
import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { words } from '../data/words.ts';
import { shuffleArray } from '../utils/question';

import type { Question } from '../models/types.ts';
import type { FormEvent } from 'react';

export const Route = createFileRoute('/english')({
  component: English,
});

function English() {
  const [answer, setAnswer] = useState('');
  const [questionLimit, setQuestionLimit] = useState(5);
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const { width, height } = useWindowSize();
  const [isShuffled, setIsShuffled] = useState(false);
  const [questionOffset, setQuestionOffset] = useState(0);

  // Animation for the title
  const fadeIn = useSpring({
    delay: 100,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  // Animation for the quiz section
  const scaleUp = useSpring({
    delay: 300,
    from: { transform: 'scale(0.8)' },
    to: { transform: 'scale(1)' },
  });

  // Animation for buttons on hover
  const [hoverProps, setHover] = useSpring(() => {
    return {
      config: { friction: 40, mass: 5, tension: 350 },
      from: { scale: 1 },
      to: { scale: 1 },
    };
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const focusToSubmitButton = () => {
    submitButtonRef?.current?.focus();
  };

  const startQuiz = () => {
    if (isShuffled) {
      const firstShuffled = shuffleArray([...words]);
      const secondShuffled = shuffleArray([...firstShuffled]);
      const thirdShuffled = shuffleArray([...secondShuffled]);
      const shuffledNewData = shuffleArray([...thirdShuffled]);
      shuffledNewData.splice(questionLimit, shuffledNewData.length - questionLimit);
      setQuestions([...shuffledNewData]);
    } else {
      const lastAddedQuestions = words.splice(questions.length - questionOffset - questionLimit, questionLimit);
      setQuestions([...lastAddedQuestions]);
    }
    setHasQuizStarted(true);
    setFinished(false);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const areStringsEqual = questions[0].norwegian.toLowerCase() === answer.toLowerCase().trim();

    if (areStringsEqual) {
      questions.splice(questions.indexOf(questions[0]), 1);
    } else {
      alert(
        `Stemmer ikke! Riktig svar var: ${questions[0].english.toLowerCase()} = ${questions[0].norwegian.toLowerCase()}`,
      );
      const currentQuestion = questions[0];
      questions.splice(questions.indexOf(currentQuestion), 1);
      setQuestions([...questions, currentQuestion]);
      if (questions.length === 0) {
        resetForm();
        return;
      }
    }

    if (questions.length === 0) {
      resetForm();
      resetQuiz();
      setFinished(true);
      alert('Du har fullført quizen!');
      return;
    }
    resetForm();
  };

  const resetQuiz = () => {
    setHasQuizStarted(false);
    setQuestionLimit(0);
  };

  const resetForm = () => {
    setAnswer('');
    setShowHint(false);
    setShowAnswer(false);
  };

  const handleShowHint = () => {
    if (showHint) {
      setShowAnswer(true);
      focusToSubmitButton();
    } else setShowHint(true);
  };

  const handleReportQuestion = () => {
    alert('Spørsmål rapportert!');
    throw new Error('Rapportert spørsmål : ' + JSON.stringify(questions[questions.length - 1], null, 2));
  };

  return (
    <div className="min-w-96">
      {finished && <Confetti width={width} height={height} />}
      <animated.h1 style={fadeIn} className="mb-4 text-white" tabIndex={0}>
        Øve på engelske ord
      </animated.h1>
      <animated.section
        style={scaleUp}
        className="w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md"
        aria-live="polite"
      >
        {!hasQuizStarted ? (
          <form onSubmit={startQuiz}>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Hvor mange spørsmål vil du svare på? Minimum 5 og maksimum 100
            </h2>
            <div className="mb-4">
              <label htmlFor="questionLimit" className="block text-sm font-medium text-gray-700">
                Antall spørsmål
              </label>
              <input
                id="questionLimit"
                required
                type="number"
                value={questionLimit}
                onChange={e => {
                  return setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)));
                }}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="5"
                max="100"
              />
              <p id="questionLimitHelp" className="mt-2 text-sm text-gray-500">
                Velg et tall mellom 5 og 100.
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="questionOffset" className="block text-sm font-medium text-gray-700">
                Offsetting fra det siste spørsmålet (kun for det andre alternativet)
              </label>
              <input
                id="questionOffset"
                type="number"
                value={questionOffset}
                onChange={e => {
                  return setQuestionOffset(Math.max(1, parseInt(e.target.value, 10)));
                }}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="0"
                max="100"
              />
              <p id="questionOffsetHelp" className="mt-2 text-sm text-gray-500">
                Skriv inn et tall for forskyvningen (offset).
              </p>
            </div>
            <button
              onClick={() => {
                return setIsShuffled(true);
              }}
              disabled={questionLimit < 5 || questionLimit > 100}
              type="submit"
              className="mb-4 w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              start med tilfeldige spørsmål
            </button>
            <button
              onClick={() => {
                return setIsShuffled(false);
              }}
              disabled={questionLimit < 5 || questionLimit > 100}
              type="submit"
              className="w-full rounded-md border border-indigo-500 bg-white py-2 font-medium text-indigo-500 hover:border-indigo-600 hover:bg-indigo-100"
            >
              start med de siste spørsmålene lagt til
            </button>
          </form>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Oversett til norsk:
            </h2>
            <form onSubmit={handleFormSubmit} className="mb-2 space-y-4">
              <fieldset className="w-full">
                <legend className="sr-only">Engelsk ord å oversette</legend>
                <div
                  className="flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Current Question"
                >
                  <p className="text-lg lowercase text-gray-700" tabIndex={0}>
                    {questions[0]?.english}
                  </p>
                </div>
              </fieldset>
              <div className="mb-2">
                <label htmlFor="answerInput" className="sr-only">
                  Skriv svaret ditt her
                </label>
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  id="answerInput"
                  placeholder="Skriv svaret ditt her..."
                  required={!showAnswer}
                  disabled={showAnswer}
                  type="text"
                  value={answer}
                  onChange={e => {
                    return setAnswer(e.target.value);
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-200"
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
            {showAnswer && <strong tabIndex={0}>{questions[0]?.english}</strong>}
            <div className="mb-4 mr-2 mt-4 text-sm text-gray-600" tabIndex={0}>
              fremgang {questionLimit - questions.length + 1} av {questionLimit}
              <div className="mt-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2 rounded-full bg-indigo-500 p-0.5 text-center text-xs font-medium leading-none text-indigo-100"
                  style={{ width: `${((questionLimit - questions.length + 1) / questionLimit) * 100}%` }}
                />
              </div>
            </div>
            {!showAnswer && (
              <div className="mb-10 flex h-3 flex-wrap items-center justify-between">
                <button
                  tabIndex={0}
                  className="mr-2 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                  onClick={handleShowHint}
                  type="button"
                  aria-pressed={showHint ? 'true' : 'false'}
                >
                  {showHint ? 'show answer' : 'hint'}
                </button>
                {showHint && (
                  <pre className="text-xl text-gray-700" tabIndex={0}>
                    Begynner med bokstaven:{' '}
                    {questions[0]?.norwegian.startsWith('to ')
                      ? questions[0]?.norwegian.substring(0, 5)
                      : questions[0]?.norwegian.substring(0, 2)}
                  </pre>
                )}
              </div>
            )}
          </>
        )}
      </animated.section>
      <animated.button
        onMouseEnter={() => {
          return setHover({ scale: 1.1 });
        }}
        onMouseLeave={() => {
          return setHover({ scale: 1 });
        }}
        style={{
          transform: hoverProps.scale.to(scale => {
            return `scale(${scale})`;
          }),
        }}
        onClick={handleReportQuestion}
        className="mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow hover:bg-pink-600"
        aria-label="Rapporter tidligere spørsmål"
      >
        Rapporter tidligere spørsmål
      </animated.button>
    </div>
  );
}
