document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

    // Define o usuário padrão como admin e senha como 1234
    if (user === 'adm' && pass === '1234') {
        localStorage.setItem('loggedInUser', 'Rafaela');
        window.location.href = 'dashboard.html';
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos.';
    }
});
