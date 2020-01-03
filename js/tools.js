function calculaIdade() {
  const hoje = new Date();
  const nascimento = new Date(1996, 7, 21);
  return Math.floor(
    Math.ceil(
      Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)
    ) / 365.25
  );
}
