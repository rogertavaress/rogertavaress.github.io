const janela = document.getElementsByClassName("janela")[0];
let comandInputs = document.getElementsByClassName("comandInput");

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
  parte2.appendChild(document.createTextNode(" : "));

  const parte3 = document.createElement("span");
  parte3.setAttribute("class", "secondaryColor");
  parte3.appendChild(document.createTextNode("~/ "));

  const parte4 = document.createElement("span");
  parte4.appendChild(document.createTextNode("$ "));

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "comandInput");
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

function fundoScroll() {
  var heightPage = document.body.scrollHeight;
  window.scrollTo(0, heightPage);
}

function outputComand(comand) {
  if (comand === "HELP") {
    comandHelp();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "ABOUT") {
    comandAbout();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "EXPERIENCES") {
    comandExperiences();
    janela.appendChild(gerarComand());
    desabilitarInputs();
    fundoScroll();
  } else if (comand === "CLEAR") {
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

function comandAbout() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/about.svg");
  title.setAttribute("alt", "About me");
  title.setAttribute("class", "title");
  const list = document.createElement("p");
  list.appendChild(
    document.createTextNode(
      "Olá, meu nome é Rogério Tavares, mas meus amigos me chamam de Roger."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "Tenho " + calculaIdade() + " anos e sou programador desde o ano de 2019."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "Meu foco principal é o desenvolvimento de aplicações Web."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "Passo o meu tempo livre aprendendo sobre as novas tecnologias na stack que trabalho/estudo."
    )
  );

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandExperiences() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/experiences.svg");
  title.setAttribute("alt", "Experiences");
  title.setAttribute("class", "title");
  const list = document.createElement("p");
  list.appendChild(document.createTextNode("Experiências Profissionais:"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("ESTAGIÁRIO DE DESENVOLVIMENTO"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("VECTRA Consultoria e Serviços"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("de Set/2019 até o momento."));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("Para mais detalhes visite: "));

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/rogertavaress/"
  );
  linkedinLink.setAttribute("class", "linkTerminal");
  linkedinLink.appendChild(
    document.createTextNode("https://www.linkedin.com/in/rogertavaress")
  );

  list.appendChild(linkedinLink);

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandClear() {
  janela.innerHTML = "";
}

function calculaIdade() {
  const hoje = new Date();
  const nascimento = new Date(1996, 7, 21);
  return Math.floor(
    Math.ceil(
      Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)
    ) / 365.25
  );
}
