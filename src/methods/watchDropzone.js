function watchDropzone (dropzone, callback) {
  dropzone.addEventListener('dragover', (e) => e.preventDefault());
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    callback(
      [...e.dataTransfer.files]
    );
  })
};

export default watchDropzone;
