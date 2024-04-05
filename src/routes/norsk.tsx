import { useSpring, animated } from '@react-spring/web';
import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';

import Joyride, { STATUS, type CallBackProps, type Step } from 'react-joyride';
import useWindowSize from 'react-use/lib/useWindowSize';
import Input from '../components/input.tsx';
import { words } from '../data/words.ts';
import { shuffleArray } from '../utils/question';
import type { Question } from '../models/types.ts';
import type { FormEvent } from 'react';

export const Route = createFileRoute('/norsk')({
  component: Norsk,
});

type JoyrideOptions = {
  run: boolean;
  steps: Step[];
};

const joyrideSteps: Step[] = [
  {
    content: <h3>How many questions you like?</h3>,
    placement: 'top',
    target: '#questionLimit',
    title: 'Question Limit',
  },
  {
    content: <h3>How many latest questions to skip?</h3>,
    placement: 'top',
    target: '#questionOffset',
    title: 'Offset from the last question',
  },
  {
    content: <h3>You will get questions in randomly from the database.</h3>,
    placement: 'top',
    target: '#randomButton',
    title: 'Start with random questions',
  },
  {
    content: <h3>You will get the latest questions added in the database.</h3>,
    placement: 'top',
    target: '#lastQuestionsButton',
    title: 'Start with latest questions added',
  },
];

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
  const [isShuffled, setIsShuffled] = useState(false);
  const [questionOffset, setQuestionOffset] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const [joyRide, setJoyRide] = useState<JoyrideOptions>({ run: false, steps: joyrideSteps });

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setJoyRide({ ...joyRide, run: false });
      localStorage.setItem('joyride', 'completed');
    }
  };

  useEffect(() => {
    const availableVoices = window.speechSynthesis.getVoices();
    const norwegianVoices = availableVoices.filter(voice => {
      return voice.lang.startsWith('nb') || voice.lang.startsWith('nn');
    });
    setVoices(norwegianVoices);
    if (questions.length > 0) {
      const utterance = new SpeechSynthesisUtterance(questions[0].norwegian);
      utterance.voice = norwegianVoices[0];
      utterance.rate = 0.8;
      utterance.pitch = 0.8;
      if (!isMuted) {
        window.speechSynthesis.speak(utterance);
      }
    }
    checkJoyride();
    // focusToInput(); // enable this and the noUnusedLocals in tsconfig if you don't use the hint that often, otherwise use focusToHintButton();
    focusToHintButton();
  }, [questions]);

  const checkJoyride = () => {
    const joyrideCompleted = localStorage.getItem('joyride');
    if (!joyrideCompleted) {
      setJoyRide({ ...joyRide, run: true });
    }
  };

  const speak = () => {
    if (isMuted) {
      return;
    }
    if (voices.length > 0) {
      const utterance = new SpeechSynthesisUtterance(questions[0].norwegian);
      utterance.voice = voices[0];

      window.speechSynthesis.speak(utterance);
    } else {
      alert('No Norwegian voices available');
    }
  };

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
  const answerInputRef = useRef<HTMLInputElement>(null);
  const hintButtonRef = useRef<HTMLButtonElement>(null);

  const focusToSubmitButton = () => {
    submitButtonRef?.current?.focus();
  };

  const focusToInput = () => {
    answerInputRef.current?.focus();
  };

  const focusToHintButton = () => {
    hintButtonRef.current?.focus();
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

    const areStringsEqual = questions[0].english.toLowerCase() === answer.toLowerCase().trim();

    if (areStringsEqual) {
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
    setQuestions([]);
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
    throw new Error('Reported question : ' + JSON.stringify(questions[questions.length - 1], null, 2));
  };

  return (
    <div lang="en" className="min-w-96">
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        run={joyRide.run}
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={joyRide.steps}
        styles={{
          buttonNext: {
            backgroundColor: '#6365f1',
          },
          options: {
            zIndex: 10000,
          },
        }}
      />
      {finished && <Confetti width={width} height={height} />}
      <div className="mb-4 flex items-center justify-between text-white">
        <animated.h1 style={fadeIn} className="mb-4 text-white">
          Practicing Norwegian words
        </animated.h1>
        {hasQuizStarted && (
          <button
            onClick={resetQuiz}
            className="rounded-md bg-cyan-500 px-2 py-1 text-sm shadow hover:bg-cyan-600"
            aria-label="nytt spill"
          >
            new game
          </button>
        )}
      </div>
      <animated.section
        style={scaleUp}
        className="w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md"
        aria-live="polite"
      >
        {!hasQuizStarted ? (
          <form onSubmit={startQuiz}>
            <h2 className="mb-4 text-xl font-bold text-gray-800">How many questions would you like to answer?</h2>
            <div className="mb-4">
              <label htmlFor="questionLimit" className="block text-sm font-medium text-gray-700">
                Question Limit
              </label>
              <Input
                id="questionLimit"
                type="number"
                min="1"
                max="100"
                value={questionLimit}
                onChange={e => {
                  setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)));
                }}
              />
              <p id="questionLimitHelp" className="mt-2 text-sm text-gray-500">
                Enter a number.
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="questionOffset" className="block text-sm font-medium text-gray-700">
                Offsetting from the last question (only for 2nd option)
              </label>
              <Input
                id="questionOffset"
                type="number"
                value={questionOffset}
                onChange={e => {
                  if (e.target.value === '') {
                    setQuestionOffset(0);
                  } else {
                    setQuestionOffset(Math.max(1, parseInt(e.target.value, 10)));
                  }
                }}
              />
              <p id="questionOffsetHelp" className="mt-2 text-sm text-gray-500">
                Enter a number for the offset.
              </p>
            </div>
            <button
              id="randomButton"
              onClick={() => {
                setIsShuffled(true);
              }}
              disabled={questionLimit > 100}
              type="submit"
              className="mb-4 w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              start with random questions
            </button>
            <button
              id="lastQuestionsButton"
              onClick={() => {
                setIsShuffled(false);
              }}
              type="submit"
              className="w-full rounded-md border border-indigo-500 bg-white py-2 font-medium text-indigo-500 hover:border-indigo-600 hover:bg-indigo-100"
            >
              start with latest questions added
            </button>
          </form>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Translate to English:
            </h2>
            <form onSubmit={handleFormSubmit} className="mb-2">
              <fieldset className="mb-4 w-full">
                <legend className="sr-only">Norwegian word to translate</legend>
                <div
                  role="button"
                  onClick={speak}
                  onKeyDown={e => {
                    return e.key === 'Enter' && speak();
                  }}
                  aria-label="Speak the current question"
                  className="flex items-center justify-center gap-4 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-lg font-semibold lowercase text-gray-700" tabIndex={0}>
                    {questions[0]?.norwegian}
                  </p>
                  <p aria-hidden="true">🔊👈</p>
                </div>
              </fieldset>
              {showAnswer ? (
                <div className="mb-4 flex items-center justify-center gap-4 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <p className="text-lg font-semibold lowercase text-gray-700" tabIndex={0}>
                    {questions[0]?.english}
                  </p>
                </div>
              ) : (
                <div className="mb-4 flex flex-wrap items-center justify-between">
                  <button
                    ref={hintButtonRef}
                    tabIndex={0}
                    className="mr-2 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
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
              <div className="mb-4">
                <label htmlFor="answerInput" className="sr-only">
                  Type your answer here
                </label>
                <Input
                  ref={answerInputRef}
                  autoComplete="off"
                  autoCorrect="off"
                  id="answerInput"
                  placeholder={
                    questions[0]?.english.includes(',')
                      ? 'Type two answers separated by a comma...'
                      : 'Type a single answer here...'
                  }
                  required={!showAnswer}
                  disabled={showAnswer}
                  value={answer}
                  onChange={e => {
                    setAnswer(e.target.value);
                  }}
                  minLength={!showAnswer ? 2 : 0}
                  aria-required={!showAnswer}
                />
              </div>
              <button
                ref={submitButtonRef}
                tabIndex={0}
                type="submit"
                className="w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
              >
                {showAnswer ? 'Continue' : 'Submit'}
              </button>
            </form>
            <div className="mb-4 mt-4 text-sm text-gray-600" tabIndex={0}>
              progress {questionLimit - questions.length + 1} of {questionLimit}
              <div className="mt-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2 rounded-full bg-indigo-500 p-0.5 text-center text-xs font-medium leading-none text-indigo-100"
                  style={{ width: `${((questionLimit - questions.length + 1) / questionLimit) * 100}%` }}
                />
              </div>
            </div>
          </>
        )}
      </animated.section>
      <div className="flex w-full items-center justify-between">
        <animated.button
          onMouseEnter={() => {
            setHover({ scale: 1.1 });
          }}
          onMouseLeave={() => {
            setHover({ scale: 1 });
          }}
          style={{
            transform: hoverProps.scale.to(scale => {
              return `scale(${scale})`;
            }),
          }}
          onClick={handleReportQuestion}
          className="mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow hover:bg-pink-600"
          aria-label="Report the previous question"
        >
          Report previous question
        </animated.button>
        <label className="mt-4 flex cursor-pointer items-center justify-center text-gray-700">
          <input
            className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full bg-gray-300"
            type="checkbox"
            checked={isMuted}
            onChange={() => {
              setIsMuted(!isMuted);
            }}
          />
          <span className="ml-2 text-sm text-white">Mute pronounce</span>
        </label>
      </div>
    </div>
  );
}
