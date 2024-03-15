const button = document.getElementById("button");
let interruptor = "on";
function lampada() {
    if (interruptor === "on") {
        document.body.style.backgroundColor = "rgb(244, 245, 170)";
        interruptor = "off";
        button.innerText = "Apagar Luz";
    } else {
        document.body.style.backgroundColor = "black";
        interruptor = "on";
        button.innerText = "Acender Luz";
    }
}