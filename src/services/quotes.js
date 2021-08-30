import { pickRandom } from "./random";

export const quotes = [
  // chaos
  {
    text: "Chaos, when left alone, tends to multiply.",
    author: "Stephen Hawking"
  },
  {
    text: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu"
  },
  {
    text: "All great changes are preceded by chaos.",
    author: "Deepak Chopra"
  },
  {
    text: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung"
  },
  // random
  {
    text: "randomness comes from atmospheric noise",
    author: "random.org"
  },
  // chance
  {
    text: "Chance favors the prepared mind.",
    author: "Louis Pasteur"
  },
  {
    text: "If you flip a coin three times and it lands on heads each time, it’s probably chance. If you flip it a hundred times and it lands on heads each time, you can be pretty sure the coin has heads on both sides. That’s the concept behind statistical significance—it’s the odds that the correlation (or other finding) is real, that it isn’t just random chance.",
    author: "T. Colin Campbell"
  },
  {
    text: "Random chance plays a huge part in everybody's life.",
    author: "Gary Gygax"
  }
];

export function getRandomQuote() {
  const lastQuote = localStorage.getItem("lastQuote");
  let qoute = null;
  if (lastQuote) {
    qoute = pickRandom(quotes.filter((q) => q.text !== lastQuote));
  } else {
    qoute = pickRandom(quotes);
  }
  localStorage.setItem("lastQoute", qoute.text);
  return qoute;
}
