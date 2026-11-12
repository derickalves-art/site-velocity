document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reset-password-form');
  const newPasswordInput = document.getElementById('new-password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword.length < 6) {
      alert('A nova senha deve ter no mínimo 6 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem. Digite novamente.');
      confirmPasswordInput.focus();
      return;
    }

    alert('Senha redefinida com sucesso! Redirecionando para o login...');
    // Redireciona para a página de login (ajuste o caminho conforme necessário)
    // window.location.href = '../login.html';
  });
});