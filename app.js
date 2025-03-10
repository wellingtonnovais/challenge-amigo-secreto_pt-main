/*
Nome: Sorteador de amigos
Autor: Wellington Novais
Data: 07/02/2025
Descrição: Sorteia um nome aleatoriamente dentre os adicionados à lista
*/
let amigos = [];
let id = 'listaAmigos';
//Adiciona o nome digitado pelo usuário à lista "amigos". Caso o campo esteja vazio ou o nome seja repetido chama uma função de erro equivalente
function adicionandoAmigos() {
    let nomeEscrito = document.querySelector('input').value.trim();
    let jaExiste = amigos.includes(nomeEscrito);
    if (jaExiste === false && nomeEscrito != '') {
        amigos.push(nomeEscrito)
        limpaNome();
        exibirListaDeAmigos();
    } else {
        if (jaExiste === true) {
            limpaNome();
            mensagemNomeRepetido();
        } else {
            mensagemCampoVazio();
        }   
    }
}

//Limpa o campo iputput
function limpaNome() {
    document.querySelector('input').value = '';
}

//Exibe um alert de erro devido ao campo vazio
function mensagemCampoVazio() {
    alert('ERRO! Para adicionar um amigo o campo não pode estar vazio.');
}

//Exibe um alert de erro devido a nome repetido
function mensagemNomeRepetido(){
    alert('ERRO! Esse amigo já foi adicionado, digite um nome diferente.');
}

//Exibe uma lista com os nomes dos amigos
function exibirListaDeAmigos() {
    limpaListaHtml();
    for (let contador = 0; contador < amigos.length; contador ++) {
        let novoAmigo = amigos[contador];
        lista = document.getElementById(id)
        let novoElemento = document.createElement('li');
        lista.appendChild(novoElemento);
        novoElemento.innerHTML = novoAmigo;
    }
}

function limpaListaHtml() {
    let lista = document.getElementById(id)
    lista.innerHTML = '';
}

//limpa a lista e sorteia um amigo aleatório destre os presentes na lista
function sortearAmigo() {
    if(amigos != '') {
        limpaListaHtml();
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indice];
        let textoResultado = document.getElementById('resultado');
        textoResultado.innerHTML = (`O amigo secreto sorteado é: ${amigoSorteado}`);
        amigos.pop(indice);
    } else {
        alert('Você ainda não adicionou nenhum amigo ou todos os amigos já foram sorteados!')
    }
}