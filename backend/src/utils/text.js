export function isPalindrome (text) {
  const lowerText = text.toLowerCase()
  const reverseText = reverseString(lowerText)
  return reverseText === lowerText
}

export function reverseString (text) {
  return text ? text.split('').reverse().join('') : ''
}
