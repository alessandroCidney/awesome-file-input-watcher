export class HTMLElementNotFoundError extends Error {
  constructor () {
    super('HTML element not found. Try to change the selector.')
    this.name = 'HTMLElementNotFoundError'
  }
}
