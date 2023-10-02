export async function downloadFile(file, filename) {
    const objectUrl = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.download = filename;
    a.href = objectUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
