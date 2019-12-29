/*
 ______       # ______      # _______     # ______      # ______       # ________     # ______      #
/_____/\      #/_____/\     #/______/\    #/_____/\     #/_____/\      #/_______/\    #/_____/\     #
\:::_ \ \     #\:::_ \ \    #\::::__\/__  #\::::_\/_    #\:::_ \ \     #\__.::._\/    #\:::_ \ \    #
 \:(_) ) )_   # \:\ \ \ \   # \:\ /____/\ # \:\/___/\   # \:(_) ) )_   #   \::\ \     # \:\ \ \ \   #
  \: __ `\ \  #  \:\ \ \ \  #  \:\\_  _\/ #  \::___\/_  #  \: __ `\ \  #   _\::\ \__  #  \:\ \ \ \  #
   \ \ `\ \ \ #   \:\_\ \ \ #   \:\_\ \ \ #   \:\____/\ #   \ \ `\ \ \ #  /__\::\__/\ #   \:\_\ \ \ #
    \_\/ \_\/ #    \_____\/ #    \_____\/ #    \_____\/ #    \_\/ \_\/ #  \________\/ #    \_____\/ #
              ##             ##             ##             ##              ##              ##         


.______        ______     _______  _______ .______       __    ______   
|   _  \      /  __  \   /  _____||   ____||   _  \     |  |  /  __  \  
|  |_)  |    |  |  |  | |  |  __  |  |__   |  |_)  |    |  | |  |  |  | 
|      /     |  |  |  | |  | |_ | |   __|  |      /     |  | |  |  |  | 
|  |\  \----.|  `--'  | |  |__| | |  |____ |  |\  \----.|  | |  `--'  | 
| _| `._____| \______/   \______| |_______|| _| `._____||__|  \______/  

*/

const janela = document.getElementsByClassName("janela")[0];
let comandInputs = document.getElementsByClassName("comandInput");
console.log(janela);

function ultimoInput() {
  let comandInput = comandInputs[comandInputs.length - 1];

  return comandInput;
}

function desabilitarInputs() {
  comandInputs = document.getElementsByClassName("comandInput");
  if (true) {
    for (comandInput of comandInputs) {
      comandInput.disabled = true;
    }
    ultimoInput().disabled = false;
  }
}

comandInput.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    outputComand(comandInput.value);
  }
});

function gerarComand() {
  const comandHtml =
    '<div class="comand"><span class="primaryColor">terminalLinux@user</span><span>:</span><span class="secondaryColor">~/</span><span>$ </span><input type="text" id="comandInput" class="comandInput" maxlength="15" autofocus /></div>';
  return comandHtml;
}

function outputComand(comand) {
  if (comand === "help") {
    console.log("Ajuda!");
    comandHelp();
  }
}

function comandHelp() {
  const area = document.createElement("div");
  const title = document.createElement("h2");
  title.appendChild(document.createTextNode("Help"));

  area.appendChild(title);

  janela.appendChild(area);
}
