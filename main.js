const botaoCopy = document.querySelectorAll('.button_copy');


// Seleciona todos os elementos com a classe 'botao'
const botoes = document.querySelectorAll('.botao');

// Adiciona eventos de mouse para cada botão
botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        botao.classList.add('active');
    });

    botao.addEventListener('mouseout', () => {
        botao.classList.remove('active');
    });
});

// Seleciona todos os elementos com a classe 'link'
const links = document.querySelectorAll('.link');

// Adiciona evento de mouseover a cada link
links.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.preventDefault(); // Previne o comportamento padrão
    });
});

function changeLocation(url) {
  window.location.href = url; // Muda a URL da aba atual
}

