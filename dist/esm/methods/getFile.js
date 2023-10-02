export async function getFile(accept) {
    return await new Promise((resolve, reject) => {
        try {
            const element = document.createElement('input');
            element.type = 'file';
            element.style.display = 'none';
            if (accept) {
                element.accept = accept;
            }
            document.body.appendChild(element);
            element.addEventListener('onchange', () => {
                resolve(element.files?.[0]);
                document.body.removeChild(element);
            });
            element.click();
        }
        catch (err) {
            reject(err);
        }
    });
}
