function maximizar() {
  console.log("maximizar");
  const body = document.getElementsByTagName("body")[0];
  const janela = document.getElementsByClassName("janela")[0];
  const header = document.getElementsByTagName("header")[0];
  const backgroundImg = document.getElementsByClassName("bg")[0];

  const botaoA = document.getElementById("btA");
  const botaoImg = document.getElementById("btImg");

  body.style.backgroundColor = "rgb(41, 39, 54)";
  janela.style.display = "block";
  backgroundImg.style.display = "none";

  botaoA.onclick = minimizar;
  botaoImg.src = "./img/btMinimizar.svg";

  header.setAttribute("class", "barratituloMax");
}

function minimizar() {
  console.log("minimizar");
  const body = document.getElementsByTagName("body")[0];
  const janela = document.getElementsByClassName("janela")[0];
  const header = document.getElementsByTagName("header")[0];
  const backgroundImg = document.getElementsByClassName("bg")[0];

  body.style.backgroundColor = "transparent";

  const botaoA = document.getElementById("btA");
  const botaoImg = document.getElementById("btImg");

  janela.style.display = "none";
  backgroundImg.style.display = "block";

  botaoA.onclick = maximizar;
  botaoImg.src = "./img/btMaximizar.svg";

  header.setAttribute("class", "barratituloMin");
}
