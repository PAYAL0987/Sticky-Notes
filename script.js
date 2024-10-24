const toggleButton = document.getElementById('toggleButton');
const themeText = document.getElementById('themeText');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Switch to dark mode
        document.body.style.backgroundColor = '#333';
        themeText.style.color = 'white';
        themeText.textContent = "Dark Mode Enabled";
    } else {
        // Switch to light mode
        document.body.style.backgroundColor = 'white';
        themeText.style.color = 'black';
        themeText.textContent = "Light Mode Enabled";
    }
});