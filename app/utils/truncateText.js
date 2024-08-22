export default (text, maxLength = 60) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }
  return text
}
