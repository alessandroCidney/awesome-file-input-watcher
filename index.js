function watchInput (input, callback) {
  input.addEventListener('change', (e) => callback(e.target.files[0]));
};

function watchMultipleInput (input, callback) {
  input.addEventListener('change', (e) => callback(
    [...e.target.files]
  ));
};

function watchDropzone (dropzone, callback) {
  dropzone.addEventListener('dragover', (e) => e.preventDefault());
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    callback(
      [...e.dataTransfer.files]
    );
  })
};

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

export {
  watchInput,
  watchMultipleInput,
  watchDropzone
};