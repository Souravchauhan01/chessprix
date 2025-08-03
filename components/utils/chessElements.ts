// Deterministic random number generator
export function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateChessElements(count: number = 14): Array<{
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: string;
  color: string;
}> {
  const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];
  
  return Array.from({ length: count }).map((_, i) => {
    const seed = i * 12345; // Deterministic seed based on index
    const size = Math.floor(seededRandom(seed) * 60) + 40;
    const top = seededRandom(seed + 1) * 100;
    const left = seededRandom(seed + 2) * 100;
    const delay = seededRandom(seed + 3) * 3;
    const duration = seededRandom(seed + 4) * 5 + 5;
    
    return {
      size: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      delay,
      duration,
      type: chessTypes[i % chessTypes.length],
      color: 'text-yellow-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]',
    };
  });
}

export function generateFloatingElements(count: number = 14): Array<{
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}> {
  return Array.from({ length: count }).map((_, i) => {
    const seed = i * 12345; // Deterministic seed based on index
    const size = Math.floor(seededRandom(seed) * 60) + 40;
    const top = seededRandom(seed + 1) * 100;
    const left = seededRandom(seed + 2) * 100;
    const delay = seededRandom(seed + 3) * 3;
    const duration = seededRandom(seed + 4) * 5 + 5;
    
    return {
      size: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      delay,
      duration,
    };
  });
} 