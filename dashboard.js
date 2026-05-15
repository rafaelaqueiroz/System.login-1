 Verifica se o usuário está logado
const username = localStorage.getItem('loggedInUser');

if (!username) {
    window.location.href = 'index.html'; // Redireciona se não logou
} else {
    document.getElementById('welcomeMessage').textContent = `Bom dia ${username}. Bem-vinda(o)!`;
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
