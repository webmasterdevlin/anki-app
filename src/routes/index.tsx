import { useSpring, animated } from '@react-spring/web';
import { Link, createFileRoute } from '@tanstack/react-router';
import { invoke } from '@tauri-apps/api/core';
import { scan, Format } from '@tauri-apps/plugin-barcode-scanner';
import { ask } from '@tauri-apps/plugin-dialog';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [tapTitle, setTapTitle] = useState(false);
  const fadeInUp = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' }, // Adjust the timing here (in ms)
  });

  const handleOpenDialog = async () => {
    setTapTitle(true);
    await invoke('my_custom_command');
    await ask('This action cannot be reverted. Are you sure?', {
      kind: 'warning',
      title: 'Tauri',
    });
    scan({ formats: [Format.QRCode], windowed: true });
  };

  return (
    <animated.article style={fadeInUp} className="max-w-md rounded-lg bg-white px-8 py-6 shadow-lg">
      <h1 onClick={handleOpenDialog} className="mb-4 text-center text-3xl font-bold text-gray-800">
        Norsk {tapTitle && 'vocabs'} drills
      </h1>
      <p className="mb-6 text-center text-gray-600">
        Improve your Norwegian vocabulary with this simple app. Choose between Norwegian to English or English to
        Norwegian translations.
      </p>
      <div className="flex flex-col gap-2 text-center">
        <Link
          tabIndex={0}
          to="/english"
          className="inline-block rounded-lg bg-indigo-500 px-6 py-2 text-white transition duration-300 hover:bg-indigo-600"
          role="button"
          aria-label="Start learning Norwegian vocabulary"
        >
          Engelsk til norsk
        </Link>
        <Link
          tabIndex={0}
          to="/norsk"
          className="inline-block rounded-lg bg-indigo-500 px-6 py-2 text-white transition duration-300 hover:bg-indigo-600"
          role="button"
          aria-label="Start learning Norwegian vocabulary"
        >
          Norwegian to english
        </Link>
      </div>
    </animated.article>
  );
}
