const img_vizualização = document.getElementById('imagem-visualizacao');

const img_miniatura0 = document.getElementById('0-imagem-miniatura');
const img_miniatura1 = document.getElementById('1-imagem-miniatura');
const img_miniatura2 = document.getElementById('2-imagem-miniatura');

const titulo = document.getElementById('titulo-produto');
const tamanhos = ["41", "45"];
const nome_cor = document.getElementById('nome-cor-selecionada');
let idTamanho = 1;
let idCor = 1;
let idImagem = 1;

const verde_cipreste = {
    nome: "Verde-cipreste",
    path: "./imagens/opcoes-cores/imagens-verde-cipreste/imagem-"
}

const azul_inverno = { 
    nome: "Azul-inverno",
    path: "./imagens/opcoes-cores/imagens-azul-inverno/imagem-"
}

const meia_noite = {
    nome: "Meia-noite",
    path: "./imagens/opcoes-cores/imagens-meia-noite/imagem-"
}

const estelar = { 
    nome: "Estelar",
    path: "./imagens/opcoes-cores/imagens-estelar/imagem-"
}

const rosa_claro = {
    nome: "Rosa-claro",
    path: "./imagens/opcoes-cores/imagens-rosa-claro/imagem-"
}


const opcao_cores = [verde_cipreste, azul_inverno, meia_noite, estelar, rosa_claro];

function update_tudo () { //para organizar a mudança de imagens, cores e textos
    nome_cor.innerText = `Cor - ${opcao_cores[idCor].nome}`;
    titulo.innerText = "Pulseira loop esportiva "+ opcao_cores[idCor].nome +" para caixa de " + tamanhos[idTamanho]+" mm";

    img_vizualização.setAttribute('src', opcao_cores[idCor].path + idImagem + '.jpeg') //setattribute recebe o nome do atributo e depois o valor
    img_miniatura0.setAttribute('src', opcao_cores[idCor].path +'0.jpeg') 
    img_miniatura1.setAttribute('src', opcao_cores[idCor].path +'1.jpeg') 
    img_miniatura2.setAttribute('src', opcao_cores[idCor].path +'2.jpeg') 
}

function trocarTamanho(){
    const tamanho = document.querySelector('[name="opcao-tamanho"]:checked').id
    idTamanho = tamanho.charAt(0);// o charat pega o p primeiro caracter p identificar a diferença, 1 ou 0

    if(tamanhos[idTamanho] === "41"){
        img_vizualização.classList.add('caixa-pequena');
        
       
    }else{
        img_vizualização.classList.remove('caixa-pequena');
    }

    titulo.innerText = "Pulseira loop esportiva "+ opcao_cores[idCor].nome +" para caixa de " + tamanhos[idTamanho]+" mm";
}

function trocaCor () {
    const cor = document.querySelector('[name="opcao-cor"]:checked').id
    idCor = cor.charAt(0);
    update_tudo();
}

function trocarImagem () {
    const imagem = document.querySelector('[name="opcao-imagem"]:checked').id
    idImagem = imagem.charAt(0);
    update_tudo();
}

trocarTamanho();
trocaCor();