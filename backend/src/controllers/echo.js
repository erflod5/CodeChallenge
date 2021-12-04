import { reverseString, isPalindrome } from '../utils/index.js'

function getText (req, res) {
  const { text } = req.query
  if (text) {
    const result = {
      palindrome: isPalindrome(text),
      text: reverseString(text)
    }
    res.status(200).json(result)
  } else {
    res.status(400).json({ error: 'no text' })
  }
}

export const echo = {
  getText
}
