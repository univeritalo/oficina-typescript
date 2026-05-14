import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-noir-bg">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-noir-card border-b border-noir-border">
        <button
          onClick={onReset}
          className="text-gray-400 text-sm px-3 py-1.5 rounded active:bg-noir-border transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-noir-text" style={{ fontFamily: "'Crimson Text', serif" }}>Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-gray-400 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-marked text-noir-bg text-center py-2 font-semibold text-sm" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
