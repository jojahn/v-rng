import { pickRandom } from "@/services/random";
import i18n from "@/locales/i18n";

export function getQuotes() {
  const quotes = i18n.global.tm("quotes");
  return Array.isArray(quotes) ? quotes : [];
}

export function getRandomQuote() {
  const quotes = getQuotes();
  if (quotes.length === 0) {
    return { text: "Random chance plays a role in life.", author: "Unknown" };
  }

  const lastQuote = localStorage.getItem("lastQuote");
  let quote = null;
  if (lastQuote) {
    const filtered = quotes.filter((q) => q.text !== lastQuote);
    quote = filtered.length > 0 ? pickRandom(filtered) : pickRandom(quotes);
  } else {
    quote = pickRandom(quotes);
  }
  localStorage.setItem("lastQuote", quote.text);
  return quote;
}
