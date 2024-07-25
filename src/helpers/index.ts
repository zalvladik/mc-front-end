export const copyText = (text: string): Promise<void> => {
  if (!navigator.clipboard.writeText) {
    return Promise.reject(new Error('The Clipboard API is not available.'))
  }

  return navigator.clipboard.writeText(text)
}
