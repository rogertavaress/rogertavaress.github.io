function keyboardKeys(e) {
  let comand = ultimoInput().value.toUpperCase();
  // Enter
  if (e.keyCode === 13) {
    outputComand(comand);
    if (comandList.indexOf(comand, 0) >= 0) {
      lastComands.push(comand);
      contListComand = lastComands.length;
    }
  }
  // Tab
  if (e.keyCode === 9) {
    e.preventDefault();
    autoComplete(ultimoInput().value.toUpperCase());
  }
  // Cima
  if (e.keyCode === 38) {
    comandBack();
  }
  // Baixo
  if (e.keyCode === 40) {
    comandNext();
  }
}
