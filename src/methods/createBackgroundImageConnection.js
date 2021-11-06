function createBackgroundImageConnection (input, element, customStyle) {
  input.addEventListener('change', ({ target: { files: [file] } }) =>  {  
    if (!!customStyle) {
      Object.entries(customStyle).forEach(arr => {
        element.style[arr[0]] = arr[1];
      })
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      element.style.backgroundImage = 'url(' + reader.result + ')';
    }
  })
};

export default createBackgroundImageConnection;
