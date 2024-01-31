import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, FormEvent } from 'react';
import { questions } from '../data'; // Ensure this is updated for English vocabulary
import { Question } from '../types';
import FeedbackModal from '../components/feedbackModal';

export const Route = createFileRoute('/english')({
  component: English,
});

function English() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  const getRandomQuestion = (): Question | null => {
    const unansweredQuestions = questions.filter(q => !wrongAnswers.includes(q) && q !== currentQuestion);

    if (unansweredQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
      return unansweredQuestions[randomIndex];
    } else if (wrongAnswers.length > 0) {
      const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
      return wrongAnswers[randomIndex];
    }

    return null; // Return null if there are no questions left to answer
  };

  const handleAnswer = () => {
    if (!currentQuestion) {
      return; // Do nothing if there's no current question
    }

    if (inputValue.toLowerCase().trim() === currentQuestion.norwegian.toLowerCase()) {
      setModalMessage('Correct!');
      setWrongAnswers(wrongAnswers.filter(q => q !== currentQuestion));
    } else {
      setModalMessage(`Incorrect! The correct answer was: ${currentQuestion.norwegian}`);
      if (!wrongAnswers.includes(currentQuestion)) {
        setWrongAnswers([...wrongAnswers, currentQuestion]);
      }
    }
    setModalIsOpen(true);
    setInputValue('');
    setCurrentQuestion(getRandomQuestion());
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAnswer();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Translate to Norsk:</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <p className="text-lg text-gray-700">{currentQuestion?.english}</p>
          <input
            required={true}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
      <FeedbackModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Feedback Modal"
        message={modalMessage}
      />
    </div>
  );
}
