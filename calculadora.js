function calculadora() {
  const operacao = +prompt(
    "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"
  );

  let primeiroValor = +prompt("Insira o primeiro valor: ");
  let segundoValor = +prompt("Insira o segundo valor: ");
  let resultado = 0;

  function soma() {
    resultado = primeiroValor + segundoValor;
    alert(`${primeiroValor} + ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  function subtracao() {
    resultado = primeiroValor - segundoValor;
    alert(`${primeiroValor} - ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  function multiplicacao() {
    resultado = primeiroValor * segundoValor;
    alert(`${primeiroValor} * ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  function divisaoReal() {
    resultado = primeiroValor / segundoValor;
    alert(`${primeiroValor} / ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  function divisaoInteira() {
    resultado = primeiroValor % segundoValor;
    alert(`${primeiroValor} % ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  function potenciacao() {
    resultado = primeiroValor ** segundoValor;
    alert(`${primeiroValor} ** ${segundoValor} = ${resultado}`);
    novaOperacao();
  }

  // função de nova operação
  function novaOperacao() {
    let opcao = prompt("Deseja fazer uma nova operação ?\n 1 - Sim\n 2 - Não");
    if (opcao == 1) {
      calculadora();
    } else if (opcao == 2) {
      alert("Até mais!");
    } else {
      alert("Digite uma opção válida!");
      novaOperacao();
    }
  }

  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  }
}

calculadora();
