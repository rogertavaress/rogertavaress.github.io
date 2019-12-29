const janela = document.getElementsByClassName("janela")[0];
let comandInputs = document.getElementsByClassName("comandInput");
console.log(janela);

function ultimoInput() {
  let comandInput = comandInputs[comandInputs.length - 1];

  return comandInput;
}

function desabilitarInputs() {
  comandInputs = document.getElementsByClassName("comandInput");
  if (comandInputs.length > 1) {
    for (comandInput of comandInputs) {
      comandInput.disabled = true;
    }
  }
  ultimoInput().disabled = false;
  ultimoInput().focus();
}

comandInput.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    outputComand(comandInput.value.toUpperCase());
  }
});

function gerarComand() {
  const comand = document.createElement("div");
  comand.setAttribute("class", "comand");

  const parte1 = document.createElement("span");
  parte1.setAttribute("class", "primaryColor");
  parte1.appendChild(document.createTextNode("terminalLinux@user"));

  const parte2 = document.createElement("span");
  parte2.appendChild(document.createTextNode(":"));

  const parte3 = document.createElement("span");
  parte3.setAttribute("class", "secondaryColor");
  parte3.appendChild(document.createTextNode("~/"));

  const parte4 = document.createElement("span");
  parte4.appendChild(document.createTextNode("$ "));

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "comandInput");
  input.setAttribute("maxlength", "12");
  input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      outputComand(ultimoInput().value.toUpperCase());
    }
  });

  comand.appendChild(parte1);
  comand.appendChild(parte2);
  comand.appendChild(parte3);
  comand.appendChild(parte4);
  comand.appendChild(input);

  return comand;
}

function outputComand(comand) {
  if (comand === "HELP") {
    console.log("Ajuda!");
    comandHelp();
    janela.appendChild(gerarComand());
    desabilitarInputs();
  } else if (comand === "CLEAR") {
    console.log("Limpar!");
    comandClear();
    janela.appendChild(gerarComand());
  }
}

function comandHelp() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/help.svg");
  title.setAttribute("alt", "Help");
  title.setAttribute("class", "title");
  const list = document.createElement("p");
  list.appendChild(document.createTextNode("Lista de Comandos:"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- Help -> Listar todos os comandos.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- About -> Mostrar algumas informações sobre mim.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "- Experiences -> Listar todas as minhas experiências profissionais."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "- Skills -> Mostrar todas as tecnologias que estudo."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- Contact -> Mostrar onde você pode me encontrar.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("- Clear -> Limpar a tela."));

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandAbout() {}

function comandClear() {
  janela.innerHTML = "";
}
