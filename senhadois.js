document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.otp-input');
  const form = document.getElementById('code-form');

  inputs.forEach((input, index) => {
    // Pula para o próximo campo ao digitar
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Volta para o campo anterior ao pressionar Backspace
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });

    // Permite colar o código de 6 dígitos direto no primeiro campo
    input.addEventListener('paste', (e) => {
      const pasteData = e.clipboardData.getData('text').trim();
      if (pasteData.length === inputs.length && /^\d+$/.test(pasteData)) {
        pasteData.split('').forEach((char, i) => {
          inputs[i].value = char;
        });
        inputs[inputs.length - 1].focus();
      }
    });
  });

  // Envio do formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = Array.from(inputs).map(i => i.value).join('');
    
    if (code.length === 6) {
      alert(`Código enviado: ${code}`);
      // Adicione aqui a integração de validação com o backend
    } else {
      alert('Por favor, preencha todos os 6 dígitos do código.');
    }
  });
});