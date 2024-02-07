import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="max-w-md rounded-lg bg-white px-8 py-6 shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">Master Norwegian Vocabulary</h1>
        <p className="mb-6 text-center text-gray-600">
          Learn effectively with our spaced repetition system. Enhance your language skills today!
        </p>
        <div className="text-center">
          <Link
            to="/norsk"
            className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-600"
            role="button"
            aria-label="Start learning Norwegian vocabulary"
            tabIndex={0}
          >
            Start Learning
          </Link>
        </div>
      </article>
    </main>
  ),
});
