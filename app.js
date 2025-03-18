//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função para adicionar um amigo à lista

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar se o campo de texto está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adicionar o nome à lista
    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItem);

    // Limpar o campo de texto após adicionar
    inputAmigo.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const itensAmigos = listaAmigos.getElementsByTagName('li');

    // Verificar se há nomes na lista
    if (itensAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    // Selecionar um nome aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * itensAmigos.length);
    const amigoSorteado = itensAmigos[indiceSorteado].textContent;

    // Exibir o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo secreto: ${amigoSorteado}`;
}