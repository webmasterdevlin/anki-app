import { createFileRoute } from '@tanstack/react-router';
import { useState, FormEvent, useRef, useEffect } from 'react';
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
  const [answer, setAnswer] = useState('');
  const [questionLimit, setQuestionLimit] = useState(5);
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const { width, height } = useWindowSize();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const availableVoices = window.speechSynthesis.getVoices();
    const norwegianVoices = availableVoices.filter(voice => voice.lang.startsWith('nb') || voice.lang.startsWith('nn'));
    setVoices(norwegianVoices);
    if (questions.length > 0) {
      const utterance = new SpeechSynthesisUtterance(questions[0].norwegian);
      utterance.voice = norwegianVoices[0];
      utterance.rate = 0.8;
      utterance.pitch = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  }, [questions]);

  const speak = () => {
    if (voices.length > 0) {
      const utterance = new SpeechSynthesisUtterance(questions[0].norwegian);
      utterance.voice = voices[0];

      window.speechSynthesis.speak(utterance);
    } else {
      console.log('No Norwegian voices available');
    }
  };

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
    const firstShuffled = shuffleArray([...data]);
    const secondShuffled = shuffleArray([...firstShuffled]);
    const thirdShuffled = shuffleArray([...secondShuffled]);
    const shuffledNewData = shuffleArray([...thirdShuffled]);
    shuffledNewData.splice(questionLimit, shuffledNewData.length - questionLimit);
    setQuestions([...shuffledNewData]);
    setHasQuizStarted(true);
    setFinished(false);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (questions[0].english.toLowerCase() === answer.toLowerCase().trim()) {
      questions.splice(questions.indexOf(questions[0]), 1);
    } else {
      alert(
        `Incorrect! The correct answer was: ${questions[0].norwegian.toLowerCase()} = ${questions[0].english.toLowerCase()}`,
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
      alert('You have completed the quiz!');
      return;
    }
    resetForm();
    speak();
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
    alert('Question reported!');
    throw new Error(`Reported question : ` + JSON.stringify(questions[questions.length - 1], null, 2));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {finished && <Confetti width={width} height={height} />}
      <animated.h1 style={fadeIn} className="mb-4 text-white">
        Practicing Norwegian words
      </animated.h1>
      <animated.section
        style={scaleUp}
        className="w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md"
        aria-live="polite"
      >
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">
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
                onChange={e => setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)))}
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
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <fieldset className="w-full">
                <legend className="sr-only">Norwegian word to translate</legend>
                <div
                  role="button"
                  onClick={speak}
                  tabIndex={0}
                  aria-label="Speak the current question"
                  className="flex items-center justify-center gap-4 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-lg lowercase text-gray-700" tabIndex={0}>
                    {questions[0]?.norwegian}
                  </p>
                  <p aria-hidden="true">🔊👈</p>
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
            <div className="mb-4 mt-4 text-sm text-gray-600" tabIndex={0}>
              progress
              <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="rounded-full bg-indigo-500 p-0.5 text-center text-xs font-medium leading-none text-indigo-100"
                  style={{ width: `${((questionLimit - questions.length + 1) / questionLimit) * 100}%` }}
                >
                  {questionLimit - questions.length + 1} of {questionLimit}
                </div>
              </div>
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
                  <p className="text-gray-700" tabIndex={0}>
                    Starts with letters:{' '}
                    {questions[0]?.english.startsWith('to ')
                      ? questions[0]?.english.substring(0, 5)
                      : questions[0]?.english.substring(0, 2)}
                  </p>
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
