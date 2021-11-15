async function fetchDifferentOriginFile (url, filename='file', extension='') {
  if (!url) {
    console.log('Please, inform the URL to use fetchDifferentOriginFile method.')
    return;
  };

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
