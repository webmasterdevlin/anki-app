import { useSpring, animated } from '@react-spring/web';
import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';

import Joyride, { STATUS, type CallBackProps, type Step } from 'react-joyride';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import useWindowSize from 'react-use/lib/useWindowSize';
import dominating from '../assets/dominating.mp3';
import doubleKill from '../assets/doubleKill.mp3';
import dragonballZ from '../assets/dragonballZ.mp3';
import godlike from '../assets/godlike.mp3';
import holyShit from '../assets/holyShit.mp3';
import killingSpree from '../assets/killingSpree.mp3';
import megaKill from '../assets/megaKill.mp3';
import monsterKill from '../assets/monsterKill.mp3';
import rampage from '../assets/rampage.mp3';
import tripleKill from '../assets/tripleKill.mp3';
import ultraKill from '../assets/ultraKill.mp3';
import wickedSick from '../assets/wickedSick.mp3';
import Input from '../components/input.tsx';
import { words } from '../data/words.ts';
import { stripNorskWordForHint } from '../utils/answer.ts';
import { shuffleArray } from '../utils/question.ts';

import type { Question } from '../models/types.ts';
import type { FormEvent } from 'react';

export const Route = createFileRoute('/english')({
  component: English,
});

type JoyrideOptions = {
  run: boolean;
  steps: Step[];
};

const joyrideSteps: Step[] = [
  {
    content: <h3>Hvor mange spørsmål liker du?</h3>,
    placement: 'top',
    target: '#questionLimit',
    title: 'Spørsmålsgrense',
  },
  {
    content: <h3>Hvor mange siste spørsmål skal du hoppe over?</h3>,
    placement: 'top',
    target: '#questionOffset',
    title: 'Offset fra siste spørsmål',
  },
  {
    content: <h3>Du vil få spørsmål inn tilfeldig fra databasen.</h3>,
    placement: 'top',
    target: '#randomButton',
    title: 'Start med tilfeldige spørsmål',
  },
  {
    content: <h3>Du vil få de siste spørsmålene lagt til i databasen.</h3>,
    placement: 'top',
    target: '#lastQuestionsButton',
    title: 'Start med de siste spørsmålene lagt til',
  },
];
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
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [streak, setStreak] = useState(0);
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

  // Reference to the audio element
  const audioRef = useRef<any>(null);
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

  useEffect(() => {
    const availableVoices = window.speechSynthesis.getVoices();
    const norwegianVoices = availableVoices.filter(voice => {
      return voice.lang.startsWith('nb') || voice.lang.startsWith('nn');
    });
    setVoices(norwegianVoices);
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

  const message = (info: string) => {
    toast.warn(info, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-center',
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

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
      const questionData = [...words];
      const lastAddedQuestions = [...questionData].splice(
        questions.length - questionOffset - questionLimit,
        questionLimit,
      );
      setQuestions([...lastAddedQuestions]);
    }
    setHasQuizStarted(true);
    setFinished(false);
  };

  const playSound = () => {
    switch (streak) {
      case 2:
        audioRef.current.src = killingSpree;
        audioRef.current?.play();
        break;
      case 3:
        audioRef.current.src = dominating;
        audioRef.current?.play();
        break;
      case 4:
        audioRef.current.src = megaKill;
        audioRef.current?.play();
        break;
      case 5:
        audioRef.current.src = wickedSick;
        audioRef.current?.play();
        break;
      case 6:
        audioRef.current.src = monsterKill;
        audioRef.current?.play();
        break;
      case 7:
        audioRef.current.src = godlike;
        audioRef.current?.play();
        break;
      case 8:
        audioRef.current.src = holyShit;
        audioRef.current?.play();
        break;
      case 10:
        audioRef.current.src = doubleKill;
        audioRef.current?.play();
        break;
      case 11:
        audioRef.current.src = tripleKill;
        audioRef.current?.play();
        break;
      case 12:
        audioRef.current.src = ultraKill;
        audioRef.current?.play();
        break;
      case 13:
        audioRef.current.src = rampage;
        audioRef.current?.play();
        break;
      case 14:
        audioRef.current.src = holyShit;
        audioRef.current?.play();
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    toast.dismiss();
    const areStringsEqual = questions[0].norwegian.toLowerCase() === answer.toLowerCase().trim();

    if (areStringsEqual) {
      questions.splice(questions.indexOf(questions[0]), 1);
      playSound();
      setStreak(streak + 1);
    } else {
      if (answer)
        message(
          `Stemmer ikke! Riktig svar var: ${questions[0].english.toLowerCase()} = ${questions[0].norwegian.toLowerCase()}`,
        );
      setStreak(0);
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
      audioRef.current.src = dragonballZ;
      audioRef.current?.play();
      message('Du har fullført quizen!');
      return;
    }
    resetForm();
  };

  const resetQuiz = () => {
    setHasQuizStarted(false);
    setQuestionLimit(0);
    setStreak(0);
    setQuestions([]);
    setShowAnswer(false);
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
      speak();
    } else setShowHint(true);
  };

  const handleReportQuestion = () => {
    message('Spørsmål rapportert!');
    throw new Error('Rapportert spørsmål : ' + JSON.stringify(questions[questions.length - 1], null, 2));
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
      message('No Norwegian voices available');
    }
  };

  return (
    <div lang="nb" className="min-w-96">
      <ToastContainer />
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
      <audio ref={audioRef} preload="auto" />
      {finished && <Confetti width={width} height={height} />}
      <div className="mb-4 flex items-center justify-between text-white">
        <animated.h1 style={fadeIn}>Øve på engelske ord</animated.h1>
        {hasQuizStarted && (
          <button
            onClick={resetQuiz}
            className="rounded-md bg-cyan-500 px-2 py-1 text-sm shadow-sm hover:bg-cyan-600"
            aria-label="nytt spill"
            tabIndex={0}
          >
            nytt spill
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
            <h2 className="mb-4 text-xl font-bold text-gray-800" tabIndex={0}>
              Hvor mange spørsmål vil du svare på?
            </h2>
            <div className="mb-4">
              <label htmlFor="questionLimit" className="block text-sm font-medium text-gray-700">
                Antall spørsmål
              </label>
              <Input
                id="questionLimit"
                required
                type="number"
                value={questionLimit}
                onChange={e => {
                  setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)));
                }}
                min="1"
                max="100"
              />
              <p id="questionLimitHelp" className="mt-2 text-sm text-gray-500">
                Velg et tall.
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="questionOffset" className="block text-sm font-medium text-gray-700">
                Offsetting fra det siste spørsmålet (kun for det andre alternativet)
              </label>
              <Input
                id="questionOffset"
                value={questionOffset}
                type="number"
                min="0"
                onChange={e => {
                  if (e.target.value === '') {
                    setQuestionOffset(0);
                  } else {
                    setQuestionOffset(Math.max(1, parseInt(e.target.value, 10)));
                  }
                }}
              />
              <p id="questionOffsetHelp" className="mt-2 text-sm text-gray-500">
                Skriv inn et tall for forskyvningen (offset).
              </p>
            </div>
            <button
              id="randomButton"
              tabIndex={0}
              onClick={() => {
                setIsShuffled(true);
              }}
              disabled={questionLimit > 100}
              type="submit"
              className="mb-4 w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600"
            >
              start med tilfeldige spørsmål
            </button>
            <button
              id="lastQuestionsButton"
              tabIndex={0}
              onClick={() => {
                setIsShuffled(false);
              }}
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
            <form onSubmit={handleFormSubmit} className="mb-2">
              <fieldset className="mb-4 w-full">
                <legend className="sr-only">Engelsk ord å oversette</legend>
                <div
                  className="flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-xs focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  aria-label="Nåværende spørsmål"
                >
                  <p className="text-lg lowercase text-gray-700">{questions[0]?.english}</p>
                </div>
              </fieldset>
              {showAnswer ? (
                <div
                  role="button"
                  onClick={speak}
                  onKeyDown={e => {
                    e.key === 'Enter' && speak();
                  }}
                  aria-label="Snakk det nåværende spørsmålet"
                  className="mb-4 flex items-center justify-center gap-4 rounded-md border border-gray-300 px-3 py-2 shadow-xs focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-lg font-semibold lowercase text-gray-700" tabIndex={0}>
                    {questions[0]?.norwegian}
                  </p>
                  <p aria-hidden="true">🔊👈</p>
                </div>
              ) : (
                <div className="mb-4 flex flex-row-reverse flex-wrap items-center justify-between">
                  <button
                    ref={hintButtonRef}
                    tabIndex={0}
                    className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
                    onClick={handleShowHint}
                    type="button"
                    aria-pressed={showHint ? 'true' : 'false'}
                  >
                    {showHint ? 'Vis svar' : 'hint'}
                  </button>
                  {showHint && (
                    <p className="text-xs text-gray-700">
                      Begynner med bokstaven:{' '}
                      <span className="text-base">{stripNorskWordForHint(questions[0]?.norwegian)}</span>
                    </p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="answerInput" className="sr-only">
                  Skriv svaret ditt her
                </label>
                <Input
                  ref={answerInputRef}
                  autoComplete="off"
                  autoCorrect="off"
                  id="answerInput"
                  placeholder={
                    questions[0]?.norwegian.includes(',')
                      ? 'Skriv inn to svar atskilt med komma... '
                      : 'Skriv inn ett enkelt svar her...'
                  }
                  required={!showAnswer}
                  disabled={showAnswer}
                  type="text"
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
                {showAnswer ? 'Fortsette' : 'Sende inn'}
              </button>
            </form>
            <div className="mb-4 mr-2 mt-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>
                  fremgang{' '}
                  <span className="underline decoration-pink-700 decoration-2">
                    {questionLimit - questions.length + 1}
                  </span>{' '}
                  av {questionLimit}
                </span>
                <span>
                  seiersrekke: <span className="underline decoration-pink-700 decoration-2">{streak}</span>
                </span>
              </div>
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
          className="mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow-sm hover:bg-pink-600"
          aria-label="Rapporter tidligere spørsmål"
        >
          Rapporter tidligere spørsmål
        </animated.button>
        <label className="mt-4 flex cursor-pointer items-center justify-center text-gray-700">
          <input
            tabIndex={1}
            className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full bg-gray-300"
            type="checkbox"
            checked={isMuted}
            onChange={() => {
              setIsMuted(!isMuted);
            }}
          />
          <span className="ml-2 text-sm text-white">demp uttale</span>
        </label>
      </div>
    </div>
  );
}
