function getFileWithoutInput (callback) {
  let inp = document.createElement('input');
  inp.type = 'file';
  inp.style.display = 'none';
  
  document.body.appendChild(inp);

  inp.onchange = ({ target: { files: [file] } }) => {
      callback(file);
  }

  inp.click();
};

export default getFileWithoutInput;
