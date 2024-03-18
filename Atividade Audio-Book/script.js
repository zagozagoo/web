const audio = document.getElementById("audio-capitulo");
let capitulo = 1;

const titulo = document.getElementById("capitulo");

function passar() {
    if (capitulo < 10) {
        capitulo+=1;
    }else {
        capitulo = 1;
    }
    titulo.innerText = "Capitulo "+ capitulo; // mudando numero do titulo
    audio.src = "./books/dom-casmurro/"+capitulo+".mp3";
    playAudio();
}

function playAudio() {
    const button = document.getElementById("play-pause");

    if (button.classList.contains("bi-play-circle-fill")) {
        button.classList.remove("bi-play-circle-fill");
        button.classList.add("bi-pause-circle-fill");
        audio.play();
    } else {
        button.classList.remove("bi-pause-circle-fill");
        button.classList.add("bi-play-circle-fill");
        audio.pause();
    }
}

function voltar(){
    if (capitulo <= 10 && capitulo > 1) {
        capitulo-=1;
    }else {
        capitulo = 10;
    }
    titulo.innerText = "Capitulo "+ capitulo;
    audio.src = "./books/dom-casmurro/"+capitulo+".mp3";
    playAudio();
}