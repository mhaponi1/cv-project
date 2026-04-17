// Nr indeksu: 77550

function toggleTheme() {
    var themeLink = document.getElementById('theme-style');
    var currentTheme = themeLink.getAttribute('href');

    if (currentTheme === 'red.css') {
        themeLink.setAttribute('href', 'green.css');
    } else {
        themeLink.setAttribute('href', 'red.css');
    }
}

function toggleSection() {
    var section = document.getElementById('projekty');
    var button = document.getElementById('toggle-btn');

    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.textContent = 'Ukryj Projekty';
    } else {
        section.style.display = 'none';
        button.textContent = 'Pokaż Projekty';
    }
}
