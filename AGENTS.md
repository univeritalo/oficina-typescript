# AGENTS.md

## Purpose
This repository is a static React + TypeScript frontend for a social bingo game called Bingo Mixer.

## Key facts for AI agents
- Root entry: `src/App.tsx`
- Main UI lives under `src/components/`
- Game state hook: `src/hooks/useBingoGame.ts`
- Game logic / tests: `src/utils/bingoLogic.ts` and `src/utils/bingoLogic.test.ts`
- Question data lives in `src/data/questions.ts`
- Types are defined in `src/types/index.ts`

## Build and run commands
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`

## Tech stack
- React 19
- TypeScript 5.9
- Vite 8
- Tailwind CSS 4
- Vitest for unit tests

## Guidance for changes
- Keep component logic isolated in `src/components/`
- Use the custom hook in `src/hooks/useBingoGame.ts` for game state and actions
- Keep game rules in `src/utils/bingoLogic.ts`; tests should cover new behavior there
- Use Tailwind utility classes instead of custom CSS where possible
- Preserve the workshop docs in `workshop/` and link to them only for context

## Useful docs
- `README.md` for setup and deployment notes
- `workshop/GUIDE.md` for project purpose and lab flow
