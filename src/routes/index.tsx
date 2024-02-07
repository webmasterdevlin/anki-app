import { Link, createFileRoute } from '@tanstack/react-router';
import { useSpring, animated } from '@react-spring/web';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 1000 }, // Adjust the timing here (in ms)
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Apply the animation to the article */}
      <animated.article style={fadeInUp} className="max-w-md rounded-lg bg-white px-8 py-6 shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">Master Norwegian Vocabulary</h1>
        <p className="mb-6 text-center text-gray-600">
          Discover the power of spaced repetition learning. Boost your linguistic prowess and start your journey to
          fluency today!
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
      </animated.article>
    </main>
  );
}
