// Função para rolar suavemente até o topo da página quando um link é clicado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1); // Remove o #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault(); // Evita o comportamento padrão do link
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Adiciona rolagem suave
                });
            }
        });
    });
});

// Função para adicionar uma animação de transição ao trocar de cenas
function applySceneTransition() {
    const twStory = document.querySelector('tw-story');
    if (twStory) {
        twStory.style.opacity = 0;
        setTimeout(() => {
            twStory.style.transition = 'opacity 0.5s ease-in-out';
            twStory.style.opacity = 1;
        }, 100);
    }
}

// Aplica a transição de cena sempre que a história é carregada
document.addEventListener('DOMContentLoaded', function() {
    applySceneTransition();
});

// Adiciona um efeito de "luz pulsante" aos botões para destacar ações
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.boxShadow = '0px 0px 15px rgba(255, 255, 255, 0.8)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
    });
});
