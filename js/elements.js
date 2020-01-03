const body = document.getElementsByTagName("body")[0];
const janela = document.getElementsByClassName("janela")[0];
const header = document.getElementsByTagName("header")[0];
const backgroundImg = document.getElementsByClassName("bg")[0];

const botaoA = document.getElementById("btA");
const botaoImg = document.getElementById("btImg");

let comandInputs = document.getElementsByClassName("comandInput");

const comandList = ["AJUDA", "SOBRE", "EXP", "HAB", "CONTATOS", "LIMPAR"];

let lastComands = [];

let contListComand = lastComands.length;
