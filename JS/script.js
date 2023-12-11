const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const loader = document.getElementById('loader');
const imageContainer = document.getElementById('image-container');
const uploadedImage = document.getElementById('uploaded-image');
const copyButton = document.getElementById('copy-button');

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('active');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('active');
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

function handleFile(file) {
  const reader = new FileReader();

  reader.onload = (e) => {
    uploadedImage.src = e.target.result;
    imageContainer.classList.remove('hidden');
    copyButton.classList.remove('hidden');
  };

  reader.readAsDataURL(file);
}

copyButton.addEventListener('click', () => {
  const imageSource = uploadedImage.src;
  copyToClipboard(imageSource);
  alert('La imagen ha sido copiada al portapapeles.');
});

function copyToClipboard(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}
