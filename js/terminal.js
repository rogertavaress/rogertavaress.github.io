janela.appendChild(gerarComand());

function ultimoInput() {
  comandInputs = document.getElementsByClassName("comandInput");
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

function gerarComand() {
  const comand = document.createElement("div");
  comand.setAttribute("class", "comand");

  const parte1 = document.createElement("span");
  parte1.setAttribute("class", "primaryColor");
  parte1.appendChild(document.createTextNode("terminalLinux@user"));

  const parte2 = document.createElement("span");
  parte2.appendChild(document.createTextNode(" : "));

  const parte3 = document.createElement("span");
  parte3.setAttribute("class", "secondaryColor");
  parte3.appendChild(document.createTextNode("~/ "));

  const parte4 = document.createElement("span");
  parte4.appendChild(document.createTextNode("$ "));

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "comandInput");
  input.addEventListener("keydown", e => keyboardKeys(e), false);
  input.onchange = function() {
    this.focus();
  };

  comand.appendChild(parte1);
  comand.appendChild(parte2);
  comand.appendChild(parte3);
  comand.appendChild(parte4);
  comand.appendChild(input);

  return comand;
}

function fundoScroll() {
  var heightPage = document.body.scrollHeight;
  window.scrollTo(0, heightPage);
}

function outputComand(comand) {
  if (comand === "AJUDA") {
    comandHelp();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "SOBRE") {
    comandAbout();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "EXP") {
    comandExperiences();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "HAB") {
    comandSkills();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "CONTATOS") {
    comandContatos();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "LIMPAR") {
    comandClear();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "") {
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else {
    const area = document.createElement("div");
    const resp = document.createElement("p");
    resp.appendChild(
      document.createTextNode("Desculpe, comando não encontrado.")
    );
    area.appendChild(resp);
    janela.appendChild(area);
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  }
}

function autoComplete(comand) {
  let suggestionComand = [];

  for (c of comandList) {
    if (c.search(comand) >= 0) {
      suggestionComand.push(c);
    }
  }

  if (suggestionComand.length === 1) {
    ultimoInput().value = suggestionComand[0];
  } else if (suggestionComand.length > 1) {
    const area = document.createElement("div");
    const resp = document.createElement("p");
    let resposta = "";

    for (sC of suggestionComand) {
      resposta += sC + "  ";
    }

    resp.appendChild(document.createTextNode(resposta));
    area.appendChild(resp);
    janela.appendChild(area);
    janela.appendChild(gerarComand());
    ultimoInput().value = comand;
    desabilitarInputs();
    fundoScroll();
  }
}

function comandBack() {
  contListComand -= 1;
  if (contListComand < 0) {
    contListComand = 0;
  }
  if (lastComands.length == 0) {
    ultimoInput().value = "";
  } else {
    ultimoInput().value = lastComands[contListComand];
  }
}

function comandNext() {
  contListComand += 1;
  if (contListComand >= lastComands.length) {
    contListComand = lastComands.length;
    ultimoInput().value = "";
  } else {
    ultimoInput().value = lastComands[contListComand];
  }
}
