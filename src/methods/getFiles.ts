export async function getFiles (
  accept: string,
) {
  return await new Promise<File[] | undefined>((resolve, reject) => {
    try {
      const element = document.createElement('input')
      element.type = 'file'
      element.style.display = 'none'
      element.multiple = true

      if (accept) {
        element.accept = accept
      }

      document.body.appendChild(element)

      element.onchange = () => {
        resolve(element.files ? Array.from(element.files) : undefined)
        document.body.removeChild(element)
      }

      element.click()
    } catch (err) {
      reject(err)
    }
  })
}