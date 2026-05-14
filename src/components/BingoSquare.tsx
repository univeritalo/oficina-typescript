import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-accent border-accent text-noir-bg'
      : 'bg-marked border-marked-border text-noir-bg'
    : 'bg-noir-card border-noir-border text-gray-300 active:bg-noir-border';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm text-accent' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={isWinning ? { boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)' } : square.isMarked ? { boxShadow: '0 0 10px rgba(0, 255, 0, 0.4)' } : {}}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-noir-bg text-xs">✓</span>
      )}
    </button>
  );
}
