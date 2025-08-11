let amigos = [];

let input = document.querySelector('input');
let botao = document.getElementById('btnAdicionar');

input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        botao.style.backgroundColor = '#4CAF50'; // Verde
        botao.style.color = 'white';
    } else {
        botao.style.backgroundColor = ''; // Cor original do CSS
        botao.style.color = '';
    }
});

function adicionarAmigo() {
    let input = document.querySelector('input');
    let amigo = input.value.trim();

    if(amigo === '') {
        console.log('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        atualizarLista();
    }

    input.value = '';
    botao.style.backgroundColor = '';
    botao.style.color = '';
    input.focus();
}

function atualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo () {
    if (amigos.length === 0) {
        console.log('A lista de amigos está vazia!');
        return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    console.log(`Amigo sorteado: ${nomeSorteado}`);
}

