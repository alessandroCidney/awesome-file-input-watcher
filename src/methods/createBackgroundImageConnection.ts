import { HTMLElementNotFoundError } from '../utils/error'

export function createBackgroundImageConnection (
  inputSelector: string | HTMLElement,
  elementSelector: string | HTMLElement,
  customStyle: Partial<CSSStyleDeclaration>,
) {
  const input: HTMLElement | null = typeof inputSelector === 'string'
    ? document.querySelector(inputSelector)
    : inputSelector

  if (!(input instanceof HTMLInputElement)) {
    throw new HTMLElementNotFoundError()
  }

  const element: HTMLElement | null = typeof elementSelector === 'string'
    ? document.querySelector(elementSelector)
    : elementSelector

  if (input && element) {
    input.addEventListener('change', () => {
      if (customStyle) {
        Object.entries(customStyle).forEach(arr => {
          element.style[arr[0]] = arr[1]
        })
      }

      if (input.files?.[0]) {
        const reader = new FileReader()

        reader.readAsDataURL(input.files?.[0])

        reader.onload = () => {
          if (typeof reader.result === 'string') {
            element.style.backgroundImage = 'url(' + reader.result + ')'
          }
        }
      }
    })
  } else {
    throw new HTMLElementNotFoundError()
  }
}
