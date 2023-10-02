export async function downloadFileFromUrl (url: string, filename: string) {
  const response = await fetch(url)
  const blob = await response.blob()

  const objectUrl = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.style.display = 'none'
  a.download = filename
  a.href = objectUrl

  document.body.appendChild(a)

  a.click()

  document.body.removeChild(a)
}
