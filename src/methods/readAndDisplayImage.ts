import { HTMLElementNotFoundError } from '../utils/error'

export function readAndDisplayImage (
  file: File,
  selector: string | HTMLElement,
  customStyles: Partial<CSSStyleDeclaration>,
) {
  const element: HTMLElement | null = typeof selector === 'string' ? document.querySelector(selector) : selector

  if (element) {
    element.style.backgroundPosition = 'center'
    element.style.backgroundSize = 'cover'
    element.style.backgroundRepeat = 'no-repeat'

    if (customStyles) {
      Object.entries(customStyles).forEach(([property, value]) => {
        element.style[property] = value
      })
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        element.style.backgroundImage = `url('${reader.result}')`
      }
    }
  } else {
    throw new HTMLElementNotFoundError()
  }
}
