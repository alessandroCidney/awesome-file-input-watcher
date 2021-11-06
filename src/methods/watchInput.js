function watchInput (input, callback) {
  input.addEventListener('change', (e) => callback(e.target.files[0]));
};

export default watchInput;
