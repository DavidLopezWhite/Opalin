function toggleTheme() {
    let a11yStyle = 'css/login-style-clean.css';
    let designStyle = 'css/login_style.css';
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == a11yStyle) {
        theme.setAttribute('href', designStyle);
    } else {
        theme.setAttribute('href', a11yStyle);
    }
}
