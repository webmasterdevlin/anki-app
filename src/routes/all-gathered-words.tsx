import { useSpring, animated } from '@react-spring/web';
import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { words } from '../data/words.ts';
import type { Question } from '../models/types.ts';

export const Route = createFileRoute('/all-gathered-words')({
  component: AllGatheredWords,
});

function AllGatheredWords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState<Question[]>(words);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'norwegian' | 'spanish'>('english');

  const fadeInUp = useSpring({
    config: { duration: 800 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredWords(words);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = words.filter(word => {
      return (
        word.english.toLowerCase().includes(lowerCaseSearchTerm) ||
        word.norwegian.toLowerCase().includes(lowerCaseSearchTerm) ||
        word.spanish.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    setFilteredWords(filtered);
  }, [searchTerm]);

  return (
    <animated.div style={fadeInUp} className="w-full max-w-7xl px-4 py-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-emerald-600">All Gathered Words</h1>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:outline-none"
          />
          <IoSearchOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => setCurrentLanguage('english')}
            className={`rounded px-4 py-2 ${currentLanguage === 'english' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
          >
            English
          </button>
          <button
            onClick={() => setCurrentLanguage('norwegian')}
            className={`rounded px-4 py-2 ${currentLanguage === 'norwegian' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
          >
            Norwegian
          </button>
          <button
            onClick={() => setCurrentLanguage('spanish')}
            className={`rounded px-4 py-2 ${currentLanguage === 'spanish' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
          >
            Spanish
          </button>
        </div>
      </div>

      {filteredWords.length === 0 ? (
        <div className="mt-8 text-center text-lg text-gray-500">No matching words found</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredWords.map((word, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 font-bold text-emerald-700">
                {currentLanguage === 'english'
                  ? word.english
                  : currentLanguage === 'norwegian'
                    ? word.norwegian
                    : word.spanish}
              </div>
              <div className="text-sm text-gray-600">
                {currentLanguage !== 'english' && (
                  <div>
                    <span className="font-medium">English:</span> {word.english}
                  </div>
                )}
                {currentLanguage !== 'norwegian' && (
                  <div>
                    <span className="font-medium">Norwegian:</span> {word.norwegian}
                  </div>
                )}
                {currentLanguage !== 'spanish' && (
                  <div>
                    <span className="font-medium">Spanish:</span> {word.spanish}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center text-sm text-gray-500">
        Showing {filteredWords.length} of {words.length} words
      </div>
    </animated.div>
  );
}
