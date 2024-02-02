import { createFileRoute } from '@tanstack/react-router';
import { useState, FormEvent } from 'react';
import { data } from '../data';
import { Question } from '../types';

export const Route = createFileRoute('/norsk')({
  component: Norsk,
});

function shuffleArray(array: Question[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Norsk() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>();
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [questionLimit, setQuestionLimit] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isAtWrongAnswers, setIsAtWrongAnswers] = useState(false);

  const startQuiz = () => {
    shuffleArray(data);
    data.splice(questionLimit, data.length - questionLimit);
    const question = data.pop();
    setQuestions([...data]);
    setCurrentQuestion(question);
    setHasQuizStarted(true);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!currentQuestion) {
      alert('No question found');
      return;
    }

    if (isAtWrongAnswers) {
      if (inputValue.toLowerCase().trim() === currentQuestion.english.toLowerCase()) {
        alert('Correct!');
        const result = wrongAnswers.pop();
        if (result) {
          setWrongAnswers([...wrongAnswers]);
        } else {
          alert('You have completed the quiz!');
        }
      } else {
        alert(`Incorrect! The correct answer was: ${currentQuestion.english}`);
        let question = wrongAnswers.pop();
        if (question) {
          setCurrentQuestion(question);
          setWrongAnswers([...wrongAnswers, currentQuestion]);
        }
      }
    } else {
      if (inputValue.toLowerCase().trim() === currentQuestion.english.toLowerCase()) {
        alert('Correct!');
      } else {
        alert(`Incorrect! The correct answer was: ${currentQuestion.english}`);
        console.log('wrongAnswers', wrongAnswers);
        console.log('currentQuestion', currentQuestion);
        setWrongAnswers([...wrongAnswers, currentQuestion]);
      }

      if (questionCount < questionLimit) {
        setQuestionCount(questionCount + 1);
      } else {
        alert('You have completed the quiz!');
      }
      let question = questions.pop();
      if (question) {
        setCurrentQuestion(question);
        setQuestions([...questions]);
      } else {
        setIsAtWrongAnswers(true);
        const result = wrongAnswers.pop();
        if (result) {
          setCurrentQuestion(result);
          wrongAnswers.unshift(result);
        }
      }
    }

    setInputValue('');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md">
        {!hasQuizStarted ? (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">How many questions would you like to answer?</h2>
            <div className="mb-4">
              <input
                required={true}
                type="number"
                value={questionLimit}
                onChange={e => setQuestionLimit(Math.max(1, parseInt(e.target.value, 10)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="10"
              />
            </div>
            <button
              onClick={startQuiz}
              className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
            >
              Start Quiz
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">Translate to English:</h2>
            {isAtWrongAnswers && <p>reviewing {wrongAnswers.length} incorrect answers</p>}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <p className="text-lg text-gray-700">{currentQuestion?.norwegian}</p>
              <input
                required={true}
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
              Question {Math.min(questionCount + 1, questionLimit)} of {questionLimit}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
