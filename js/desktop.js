function maximizar() {
  body.style.backgroundColor = "rgb(41, 39, 54)";

  janela.style.display = "block";
  backgroundImg.style.display = "none";

  botaoA.onclick = minimizar;
  botaoImg.src = "./img/btMinimizar.svg";

  header.setAttribute("class", "barratituloMax");
}

function minimizar() {
  body.style.backgroundColor = "transparent";

  janela.style.display = "none";
  backgroundImg.style.display = "block";

  botaoA.onclick = maximizar;
  botaoImg.src = "./img/btMaximizar.svg";

  header.setAttribute("class", "barratituloMin");
}
