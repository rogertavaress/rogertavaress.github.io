class Terminal {
  constructor() {}
  escreverInicio(pagina) {
    //rogertavaress@RogerPC:~/Projetos
    const title = "terminalLinux@user";
    const pasta = "~/" + pagina;

    let inicioCompleto = document.createElement("div");
    inicioCompleto.setAttribute("class", "comand");

    let primeiraParte = document.createElement("span");
    primeiraParte.setAttribute("class", "primaryColor");
    primeiraParte.appendChild(document.createTextNode(title));

    let segundaParte = document.createElement("span");
    segundaParte.setAttribute("class", "secondaryColor");
    segundaParte.appendChild(document.createTextNode(pasta));

    inicioCompleto.appendChild(primeiraParte);
    inicioCompleto.appendChild(document.createTextNode(":"));
    inicioCompleto.appendChild(segundaParte);
    inicioCompleto.appendChild(document.createTextNode("$ "));

    return inicioCompleto;
  }
}
