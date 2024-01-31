import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, FormEvent } from 'react';
import { questions } from '../data';
import { Question } from '../types';

export const Route = createFileRoute('/norsk')({
  component: Norsk,
});

function Norsk() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  const getRandomQuestion = (): Question | null => {
    const unansweredQuestions = questions.filter(q => !wrongAnswers.includes(q) && q !== currentQuestion);

    if (unansweredQuestions.length > 0) {
      // If there are unanswered questions, return one of them
      const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
      return unansweredQuestions[randomIndex];
    } else if (wrongAnswers.length > 0) {
      // If all questions have been answered but some were wrong, start returning from wrongAnswers
      const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
      return wrongAnswers[randomIndex];
    }

    return null; // Return null if there are no questions left to answer
  };

  const handleAnswer = () => {
    if (!currentQuestion) {
      return; // Do nothing if there's no current question
    }

    if (inputValue.toLowerCase().trim() === currentQuestion.english.toLowerCase()) {
      // Correct answer
      alert('Correct!');
      setWrongAnswers(wrongAnswers.filter(q => q !== currentQuestion)); // Remove from wrongAnswers if it's there
    } else {
      // Incorrect answer
      alert(`Incorrect! The correct answer was: ${currentQuestion.english}`);
      if (!wrongAnswers.includes(currentQuestion)) {
        setWrongAnswers([...wrongAnswers, currentQuestion]);
      }
    }

    setInputValue(''); // Clear the input field
    setCurrentQuestion(getRandomQuestion()); // Fetch the next question
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the default form submission action
    handleAnswer();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleFormSubmit} className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <h2 className="mb-2 block text-lg font-bold text-gray-700">Translate to English:</h2>
        <p className="text-md mb-4 block text-gray-700">{currentQuestion?.norwegian}</p>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <button
          type="submit"
          className="focus:shadow-outline mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
