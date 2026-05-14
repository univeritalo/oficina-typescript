interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-noir-card rounded-xl p-6 max-w-xs w-full text-center border border-noir-border animate-[bounce_1s_ease-out] shadow-2xl" style={{ boxShadow: '0 20px 60px var(--color-noir-shadow)' }}>
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-accent mb-2" style={{ fontFamily: "'Crimson Text', serif", textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}>BINGO!</h2>
        <p className="text-gray-300 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-noir-bg font-semibold py-3 px-6 rounded-lg active:bg-accent-light transition-all duration-200 hover:shadow-lg"
          style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
