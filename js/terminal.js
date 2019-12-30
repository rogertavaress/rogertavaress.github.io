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

function comandHelp() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/ajuda.svg");
  title.setAttribute("alt", "Help");
  title.setAttribute("class", "title");
  const list = document.createElement("p");
  list.appendChild(document.createTextNode("Lista de Comandos:"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- Ajuda -> Listar todos os comandos.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- Sobre -> Mostrar algumas informações sobre mim.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "- Exp -> Listar todas as minhas experiências profissionais."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode("- Hab -> Mostrar todas as tecnologias que estudo.")
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    document.createTextNode(
      "- Contatos -> Mostrar onde você pode me encontrar."
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("- Limpar -> Limpar a tela."));

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandAbout() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/sobre.svg");
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
      "Passo o meu tempo livre aprendendo sobre as novas tecnologias da stack que trabalho/estudo."
    )
  );

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandExperiences() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/exp.svg");
  title.setAttribute("alt", "Experiências");
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
  linkedinLink.setAttribute("target", "_blank");
  linkedinLink.appendChild(
    document.createTextNode("https://www.linkedin.com/in/rogertavaress")
  );

  list.appendChild(linkedinLink);

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandSkills() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/hab.svg");
  title.setAttribute("alt", "Habilidades");
  title.setAttribute("class", "title");
  const list = document.createElement("p");
  const pre = document.createElement("pre");
  pre.appendChild(document.createTextNode("Linguagens:"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓▓▓      ] 4/10 - JavaScript"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓        ] 2/10 - C#"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("Frontend:"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓▓▓▓▓▓   ] 7/10 - HTML"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓▓▓▓▓    ] 6/10 - CSS"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓▓       ] 3/10 - Angular"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("Backend:"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓▓▓▓     ] 5/10 - Node.JS"));
  pre.appendChild(document.createElement("br"));
  pre.appendChild(document.createTextNode("[▓▓        ] 2/10 - Dotnet"));

  list.appendChild(pre);

  list.appendChild(document.createTextNode("Para mais detalhes visite: "));
  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/rogertavaress");
  githubLink.setAttribute("class", "linkTerminal");
  githubLink.setAttribute("target", "_blank");
  githubLink.appendChild(
    document.createTextNode("https://github.com/rogertavaress")
  );

  list.appendChild(githubLink);

  area.appendChild(title);
  area.appendChild(list);

  janela.appendChild(area);
}

function comandContatos() {
  const area = document.createElement("div");
  const title = document.createElement("img");
  title.setAttribute("src", "./img/contatos.svg");
  title.setAttribute("alt", "Habilidades");
  title.setAttribute("class", "title");
  const list = document.createElement("p");

  const emailLink = document.createElement("a");
  emailLink.setAttribute("href", "mailto:rogerioctf@gmail.com");
  emailLink.setAttribute("class", "linkTerminal");
  emailLink.setAttribute("target", "_blank");
  emailLink.appendChild(document.createTextNode("rogerioctf@gmail.com"));

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/rogertavaress");
  githubLink.setAttribute("class", "linkTerminal");
  githubLink.setAttribute("target", "_blank");
  githubLink.appendChild(
    document.createTextNode("https://github.com/rogertavaress")
  );

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/rogertavaress"
  );
  linkedinLink.setAttribute("class", "linkTerminal");
  linkedinLink.setAttribute("target", "_blank");
  linkedinLink.appendChild(
    document.createTextNode("https://www.linkedin.com/in/rogertavaress")
  );

  const twitterLink = document.createElement("a");
  twitterLink.setAttribute("href", "https://twitter.com/rogertavaress");
  twitterLink.setAttribute("class", "linkTerminal");
  twitterLink.setAttribute("target", "_blank");
  twitterLink.appendChild(
    document.createTextNode("https://twitter.com/rogertavaress")
  );

  list.appendChild(document.createTextNode("Onde você pode me encontrar?"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("Email: "));
  list.appendChild(emailLink);
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("Github: "));
  list.appendChild(githubLink);
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("Linkedin: "));
  list.appendChild(linkedinLink);
  list.appendChild(document.createElement("br"));
  list.appendChild(document.createTextNode("Twitter: "));
  list.appendChild(twitterLink);

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
