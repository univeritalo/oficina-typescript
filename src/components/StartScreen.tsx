interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-noir-bg">
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-noir-text mb-2" style={{ fontFamily: "'Crimson Text', serif", fontStyle: 'italic' }}>Bingo Mixer</h1>
        <p className="text-lg text-gray-400 mb-8">Find your people!</p>
        
        <div className="bg-noir-card rounded-lg p-6 shadow-lg border border-noir-border mb-8" style={{ boxShadow: '0 10px 30px var(--color-noir-shadow)' }}>
          <h2 className="font-semibold text-noir-text mb-3" style={{ fontFamily: "'Crimson Text', serif" }}>How to play</h2>
          <ul className="text-left text-gray-300 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-noir-bg font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-all duration-200 hover:shadow-lg"
          style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
