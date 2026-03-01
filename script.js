
// Scroll suave para links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Função para alternar entre português e inglês
function toggleLang() {
  document.body.classList.toggle('en-active');
}



// Adiciona evento de clique ao botão de alternância de idioma
document.getElementById('lang-toggle').addEventListener('click', toggleLang);

document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea').value;
    
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos");
        e.preventDefault(); // Impede o envio
    }
});
