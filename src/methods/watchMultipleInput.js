function watchMultipleInput (input, callback) {
  input.addEventListener('change', (e) => callback(
    [...e.target.files]
  ));
};

export default watchMultipleInput;
