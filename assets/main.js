function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const iconShow = document.querySelector('.bxs-show');
    const iconHide = document.querySelector('.bxs-hide');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconShow.style.display = 'none';
        iconHide.style.display = 'inline';
    } else {
        passwordInput.type = 'password';
        iconShow.style.display = 'inline';
        iconHide.style.display = 'none';
    }
}
