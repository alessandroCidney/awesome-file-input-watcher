function readAndDisplayImage (file, region, customStyles) {
  region.style.backgroundPosition = 'center';
  region.style.backgroundSize = 'cover';
  region.style.backgroundRepeat = 'no-repeat';

  if (!!customStyles) {
    Object.entries(customStyles).forEach(([property, value]) => {
      region.style[property] = value;
    });
  };
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    region.style.backgroundImage = `url('${reader.result}')`;
  };
};

export default readAndDisplayImage;
