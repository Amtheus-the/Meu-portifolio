document.addEventListener('DOMContentLoaded', function () {
    // Selecione a div com a classe "projeto1"
    const projeto1 = document.querySelector('.projeto1');
  
    // Crie um elemento div para a sobreposição (overlay)
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Crie um texto e um botão para a sobreposição
    const texto = document.createElement('h5');
    texto.textContent = 'Somos Uma Empresa Especializada Em Tecnologia E Inovação. Buscamos sempre atender da melhor forma possível nossos clientes.';
  
    // Crie um elemento âncora (link) para o botão
    const botao = document.createElement('a');
    botao.textContent = 'Visite o site >';
    botao.href = 'https://yuwork.co/index';
    botao.target = '_blank'; // Abre o link em uma nova janela ou guia

// Adicione estilos CSS ao botão
botao.style.border = '2px solid #6E07F3'; // Adiciona uma borda de 2px sólida com a cor #6E07F3
botao.style.width = '150px'; // Define a largura do botão como 150px
botao.style.height = '45px'; // Define a altura do botão como 40px
botao.style.padding = '10px'; // Adiciona preenchimento interno ao botão
botao.style.borderRadius = '10px';
botao.style.textDecoration = 'none'; // Remove o sublinhado padrão de links
botao.style.transition = 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease'; // Adiciona uma transição suave na cor de fundo, cor do texto e cor da borda
botao.style.display = 'inline-block'; // Faz o botão exibir como um elemento em linha
botao.style.backgroundColor = '#141c3a'; // Define a cor de fundo inicial do botão
botao.style.color = '#fff'; // Define a cor do texto inicial do botão como branco

// Adicione um ouvinte de evento para a transição suave ao passar o mouse
botao.addEventListener('mouseover', () => {
  botao.style.backgroundColor = '#6E07F3'; // Muda a cor de fundo ao passar o mouse
  botao.style.color = '#fff'; // Muda a cor do texto ao passar o mouse
  botao.style.borderColor = '#6E07F3'; // Muda a cor da borda ao passar o mouse
});

botao.addEventListener('mouseout', () => {
  botao.style.backgroundColor = '#141c3a'; // Restaura a cor de fundo original
  botao.style.color = '#fff'; // Mantém a cor do texto como branco
  botao.style.borderColor = '#6E07F3'; // Restaura a cor da borda original
});

// Adicione o botão à sobreposição
overlay.appendChild(botao);

  
    // Adicione o texto e o botão à sobreposição
    overlay.appendChild(texto);
    overlay.appendChild(botao);
  
    // Adicione a sobreposição à div com a classe "projeto1"
    projeto1.appendChild(overlay);
  
    // Adicione um ouvinte de evento para a transição suave
    projeto1.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
    });
  
    projeto1.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
    });
  });

  // projeto2

  document.addEventListener('DOMContentLoaded', function () {
    // Selecione a div com a classe "projeto1"
    const projeto2 = document.querySelector('.projeto2');
  
    // Crie um elemento div para a sobreposição (overlay)
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Crie um texto e um botão para a sobreposição
    const texto = document.createElement('h5');
    texto.textContent = 'Somos Uma Empresa Especializada Em Tecnologia E Inovação. Buscamos sempre atender da melhor forma possível nossos clientes.';
  
    // Crie um elemento âncora (link) para o botão
    const botao = document.createElement('a');
    botao.textContent = 'Visite o site >';
    botao.href = 'http://swellitsolutions.com.br/index';
    botao.target = '_blank'; // Abre o link em uma nova janela ou guia

// Adicione estilos CSS ao botão
botao.style.border = '2px solid #6E07F3'; // Adiciona uma borda de 2px sólida com a cor #6E07F3
botao.style.width = '150px'; // Define a largura do botão como 150px
botao.style.height = '45px'; // Define a altura do botão como 40px
botao.style.padding = '10px'; // Adiciona preenchimento interno ao botão
botao.style.borderRadius = '10px';
botao.style.textDecoration = 'none'; // Remove o sublinhado padrão de links
botao.style.transition = 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease'; // Adiciona uma transição suave na cor de fundo, cor do texto e cor da borda
botao.style.display = 'inline-block'; // Faz o botão exibir como um elemento em linha
botao.style.backgroundColor = '#141c3a'; // Define a cor de fundo inicial do botão
botao.style.color = '#fff'; // Define a cor do texto inicial do botão como branco

// Adicione um ouvinte de evento para a transição suave ao passar o mouse
botao.addEventListener('mouseover', () => {
  botao.style.backgroundColor = '#6E07F3'; // Muda a cor de fundo ao passar o mouse
  botao.style.color = '#fff'; // Muda a cor do texto ao passar o mouse
  botao.style.borderColor = '#6E07F3'; // Muda a cor da borda ao passar o mouse
});

botao.addEventListener('mouseout', () => {
  botao.style.backgroundColor = '#141c3a'; // Restaura a cor de fundo original
  botao.style.color = '#fff'; // Mantém a cor do texto como branco
  botao.style.borderColor = '#6E07F3'; // Restaura a cor da borda original
});

// Adicione o botão à sobreposição
overlay.appendChild(botao);

  
    // Adicione o texto e o botão à sobreposição
    overlay.appendChild(texto);
    overlay.appendChild(botao);
  
    // Adicione a sobreposição à div com a classe "projeto2"
    projeto2.appendChild(overlay);
  
    // Adicione um ouvinte de evento para a transição suave
    projeto2.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
    });
  
    projeto2.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
    });
  });

  
  
  