document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        const destinatario = 'galgapetroleo@gmail.com';
        const assunto = `Contacto do Site - ${nome}`;
        const corpoEmail = `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`;

        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

        window.location.href = mailtoLink;
    });
});