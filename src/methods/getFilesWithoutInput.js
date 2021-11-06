function getFilesWithoutInput (callback) {
  let inp = document.createElement('input');
  inp.type = 'file';
  inp.style.display = 'none';
  inp.multiple = true;
  
  document.body.appendChild(inp);

  inp.onchange = ({ target: { files } }) => {
      callback([...files]);
  }

  inp.click();
};

export default getFilesWithoutInput;
