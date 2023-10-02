import { HTMLElementNotFoundError } from '../utils/error'

export function watchDropzone (selector: string | HTMLElement, callbackFn: (files?: File[]) => void) {
  const element: HTMLElement | null = typeof selector === 'string' ? document.querySelector(selector) : selector

  if (element) {
    element.addEventListener('dragover', (e) => {
      e.preventDefault()
    })

    element.addEventListener('drop', (e) => {
      e.preventDefault()

      callbackFn(e.dataTransfer?.files ? Array.from(e.dataTransfer?.files) : undefined)
    })
  } else {
    throw new HTMLElementNotFoundError()
  }
}
