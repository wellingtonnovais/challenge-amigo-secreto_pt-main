
let amigos = [];
let nome = '';
//Esta função e acionada quando o botão "adicionar" é clicado e faz o teste no campo imput do HTML, caso o campo tenha algum valor, esse valor é adicionado na ultima posição da lista "amigos" caso contrário chama a função "mensagemErro"
function adicionandoAmigos() {
    let jaExiste = amigos.includes(document.querySelector('input').value);
    if(document.querySelector('input').value != '' && jaExiste === false) {
        nome = document.querySelector('input').value;
        amigos.push(document.querySelector('input').value) && limpaNome();
        exibirListaDeAmigos('li', nome);
    } else {
        if(jaExiste == true) {
            limpaNome();
            mensagemNomeRepetido();
        } else {
            mensagemErro();
        }
    }
}

//Limpa o campo iputput
function limpaNome() {
    document.querySelector('input').value = '';
}

//Exibe um alert de erro
function mensagemErro() {
    alert('ERRO! Para adicionar um amigo o campo não pode estar vazio.');
}

//Exibe os nomes dos amigos
function exibirListaDeAmigos(tag,nome) {
    
    let nomeDigitado = document.getElementById('listaAmigos');
    nomeDigitado.innerHTML = nome; 
}

//Exibe um alert devido a nome repetido
function mensagemNomeRepetido(){
    alert('ERRO! Esse amigo já foi adicionado, escreva um nome diferente.');
}
