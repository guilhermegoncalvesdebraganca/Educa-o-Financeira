// Função para abrir o modal de cadastro
function openModal() {
    document.getElementById('modal').style.display = 'flex'; // Exibe o modal
  }
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Esconde o modal
  }
  
  // Função para confirmar o cadastro
  function confirmRegister() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpf = document.getElementById('cpf').value;
  
    // Valida os campos
    if (email && password && cpf) {
      alert('Cadastro realizado com sucesso!'); // Alerta de sucesso
      closeModal(); // Fecha o modal
    } else {
      alert('Por favor, preencha todos os campos!'); // Alerta de erro
    }
  }
  