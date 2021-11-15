async function fetchDifferentOriginFile (url, filename='file', extension='') {
  let response = await fetch(url);
  let blob = await response.blob();
  let objectURL = URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.style.display = 'none';
  a.download = `${filename}${!!extension ? extension : ''}`;
  a.href = objectURL;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
};
