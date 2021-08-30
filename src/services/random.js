export function pickRandom(picks) {
  return picks[Math.round(randomNumber(0, picks.length - 1))];
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
