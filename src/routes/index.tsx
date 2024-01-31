import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Welcome to the Norwegian Vocabulary Learner!
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Master Norwegian vocabulary effectively with spaced repetition. Start learning today and track your progress
          as you go!
        </p>
        <div className="text-center">
          <Link
            to="/norsk"
            className="inline-block rounded bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  ),
});
