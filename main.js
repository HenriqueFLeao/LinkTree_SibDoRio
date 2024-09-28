const botaoCopy = document.querySelectorAll('.button_copy');

// Adiciona um listener de clique a cada botão
botaoCopy.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        // Previne que o botão dentro do <a> execute a navegação do link
        event.preventDefault();

        //Pega o elemento <button> de casse .link relacionado ao botão de copiar
        const linkElemento = botao.previousElementSibling

        // Pega o valor do onclick que contém o link
        const hrefValor = linkElemento.getAttribute('onclick');

        //Extrai a URL do comando 'changeLocation'
        const link = hrefValor.match(/'([^']+)'/)[1];

        //Utiliza a API do Clipboard para copiar o link 
        navigator.clipboard.writeText(link)

        .then(()=>{
            //Confirmação visual de que o link foi copiado 
            const img = botao.querySelector('.img_copy');

            //Armazena a imagem original
            const imgOriginal = img.src;

            //Muda a imagem para uma de "confimado"
            img.src = './Assets/img/copiado.png';

            //Volta à imagem original após 2 segundos
            setTimeout(()=>{
                img.src = imgOriginal;
            },2000); //2000 milissegundos = 2 segundos
        })

    });
});


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
