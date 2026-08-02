export const DEFAULT_COLORS = ["FDDE3B", "48B2ED", "F5306B", "AAE85D"]

// abcd abcd
export function getColorInOrder(index, length) {
    let normalizedIndex = index % DEFAULT_COLORS.length
    if (index === length - 1 && normalizedIndex === 0) {
        normalizedIndex += 1
    }
    return DEFAULT_COLORS[normalizedIndex]
}
