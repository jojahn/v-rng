import { randomNumber } from "@/services/random"
import i18n from "@/locales/i18n"

export function getQuoteCount() {
    const quotes = i18n.global.tm("quotes")
    return Array.isArray(quotes) ? quotes.length : 0
}

export function getQuoteByIndex(index) {
    const quotes = i18n.global.tm("quotes")
    if (!Array.isArray(quotes) || quotes.length === 0) {
        return {
            text: "Random chance plays a role in life.",
            author: "Unknown"
        }
    }
    return quotes[index % quotes.length]
}

export function getRandomQuoteIndex() {
    const count = getQuoteCount()
    if (count === 0) {
        return 0
    }

    const lastIndex = localStorage.getItem("lastQuoteIndex")
    let index
    if (lastIndex !== null) {
        const last = parseInt(lastIndex, 10)
        const available = Array.from({ length: count }, (_, i) => i).filter(
            (i) => i !== last
        )
        index =
            available.length > 0
                ? available[randomNumber(0, available.length - 1)]
                : randomNumber(0, count - 1)
    } else {
        index = randomNumber(0, count - 1)
    }
    localStorage.setItem("lastQuoteIndex", String(index))
    return index
}
