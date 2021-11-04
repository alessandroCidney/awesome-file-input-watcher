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

export {
  watchInput,
  watchMultipleInput,
  watchDropzone
};