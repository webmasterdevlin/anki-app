# Anki App - Multilingual Vocabulary Collection

A comprehensive vocabulary learning application containing words and phrases in Norwegian, English, and Spanish. This repository is designed for language learners using the Anki spaced repetition system or similar flashcard-based learning methods.

## Overview

This repository contains a large collection of multilingual vocabulary entries, making it easy to learn and practice translation between Norwegian, English, and Spanish. The vocabulary is organized into TypeScript files that define structured question objects with translations in all three languages.

## Vocabulary Statistics

The repository contains approximately **14,426 vocabulary entries** across multiple files:

- `words.ts`: ~6,539 entries
- `words2.ts`: ~6,748 entries  
- `words3.ts`: ~1,138 entries
- `words4.ts`: Template file (empty collection)

Each entry contains:
- **Norwegian** translation
- **English** translation
- **Spanish** translation

## Structure

### Question Type

All vocabulary entries follow this TypeScript structure:

```typescript
type Question = {
  norwegian: string;
  english: string;
  spanish: string;
};
```

### Example Entry

```typescript
{
  english: "expectations",
  norwegian: "forhåpninger",
  spanish: "expectativas",
}
```

## Usage

These vocabulary files can be used in several ways:

1. **Import into TypeScript/JavaScript projects**: Use the exported `words` arrays in your language learning applications
2. **Anki deck creation**: Process the data to create Anki flashcard decks
3. **Language learning practice**: Reference material for studying translations between the three languages
4. **API development**: Use as a data source for language learning APIs

## File Organization

- `words.ts` - Primary vocabulary collection
- `words2.ts` - Extended vocabulary collection  
- `words3.ts` - Additional vocabulary collection
- `words4.ts` - Template file for future additions

## Getting Started

To use these vocabulary files in your project:

```typescript
import { words } from './words';
import { words as words2 } from './words2';
import { words as words3 } from './words3';

// Access vocabulary entries
console.log(words[0]); // First vocabulary entry
```

## Contributing

To add new vocabulary entries, follow the existing structure in the TypeScript files. Ensure all three language translations are included for each entry.

## License

This project is maintained by [webmasterdevlin](https://github.com/webmasterdevlin).

## Languages Supported

- 🇳🇴 Norwegian (Norsk)
- 🇬🇧 English
- 🇪🇸 Spanish (Español)

---

Perfect for language learners, educators, and developers building multilingual applications!
