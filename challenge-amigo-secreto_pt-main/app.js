let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let amigo = input.value.trim();

    if(amigo === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        atualizarLista();
    }

    input.value = '';
    input.focus();
}


document.querySelector('input').addEventListener('input', function () {
    let botao = document.getElementById('btnAdicionar');
    let valor = this.value.trim();

    if (valor !== '') {
        botao.style.backgroundColor = '#4CAF50'; 
        botao.style.color = 'white';
    } else {
        botao.style.backgroundColor = ''; 
        botao.style.color = '';
    }
});



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
        alert('A lista de amigos está vazia!');
        return;
    } 
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    alert(`Amigo sorteado: ${nomeSorteado}`);
}


