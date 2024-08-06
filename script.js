// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('meta-tags.html')
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading meta tags:', error));
});