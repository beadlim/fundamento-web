// Função para validar o nome
function validarNome() {
    const nomeInput = document.getElementById('nome');
    const nomeFeedback = document.getElementById('txtNome');
    if (nomeInput.value.trim() === '') {
        nomeFeedback.innerText = 'Por favor, insira seu nome.';
    } else {
        nomeFeedback.innerText = '';
    }
}

// Função para validar o e-mail
function validarEmail() {
    var emailInput = document.getElementById('email');
    var emailFeedback = document.getElementById('txtEmail');
    
    if (!emailRegex.test(emailInput.value)) {
        emailFeedback.innerText = 'Por favor, insira um e-mail válido.';
    } else {
        emailFeedback.innerText = '';
    }
}

// Função para validar a mensagem
function validarMensagem() {
    var mensagemInput = document.getElementById('mensagem');
    var mensagemFeedback = document.getElementById('txtMensagem');
    
    if (mensagemInput.value.trim() === '') {
        mensagemFeedback.innerText = 'Por favor, deixe sua mensagem.';
    } else {
        mensagemFeedback.innerText = '';
    }
}

// Função para consultar o CEP
function consultarCep() {
    var cepInput = document.getElementById('cep');
    var dadosTextarea = document.getElementById('dados');

    var cep = cepInput.value.replace(/\D/g, ''); 

    if (cep.length !== 8) {
        dadosTextarea.value = 'CEP inválido. Deve conter 8 dígitos.';
    } else {
        dadosTextarea.value = 'Dados do CEP não disponíveis';
    }
    
}

var enviarBotao = document.querySelector('#formulario_mensagem button');
enviarBotao.addEventListener('click', function () {
    validarNome();
    validarEmail();
    validarMensagem();

});
