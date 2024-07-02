function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied: ' + text);
}

function openWebsite(url) {
    window.open(url, '_blank');
}


