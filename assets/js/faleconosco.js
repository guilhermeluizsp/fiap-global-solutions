document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nomeInput = document.getElementById('nome');
  const placeholder = document.getElementById('mensagem-sucesso-placeholder');
  const spinner = document.getElementById('loading-spinner');
  const enviarBtn = document.getElementById('enviarBtn');

  if (!form || !nomeInput || !placeholder || !spinner || !enviarBtn) {
    console.error('Algum elemento do formulário está faltando.');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mostra o spinner e desativa o botão
    spinner.style.display = 'block';
    enviarBtn.disabled = true;

    setTimeout(() => {
      const nome = nomeInput.value.trim() || 'Usuário';

      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success mt-3 d-flex align-items-center';
      successMessage.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <div>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para o suporte da EnerLink.</div>
      `;

      placeholder.innerHTML = '';
      placeholder.appendChild(successMessage);

      // Esconde o spinner e ativa o botão
      spinner.style.display = 'none';
      enviarBtn.disabled = false;

      // Limpa formulário
      form.reset();

      // Remove a mensagem após 5 segundos
      setTimeout(() => {
        placeholder.innerHTML = '';
      }, 9000);
    }, 2000); // Simula um delay de 2 segundos
  });
});