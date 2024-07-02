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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    menuToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('active'); // Toggle the 'active' class on click
    });
  });
  