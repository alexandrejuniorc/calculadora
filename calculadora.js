function calculadora() {
  const operacao = +prompt(
    "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"
  );
  // verifica se a operação é diferente de números e maior que as operações, se for irá travar na operação inválida
  if (!operacao || operacao > 6) {
    alert("Operação inválida!");
    calculadora();
  } else {
    let primeiroValor = +prompt("Insira o primeiro valor: ");
    let segundoValor = +prompt("Insira o segundo valor: ");
    let resultado = 0;

    //se o primeiro e segundo valor for diferente de números ou seja, uma letra, ele irá travar
    if (!primeiroValor || !segundoValor) {
      alert("Erro - Parâmetros inválidos");
      calculadora();
    } else {
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
        let opcao = prompt(
          "Deseja fazer uma nova operação ?\n 1 - Sim\n 2 - Não"
        );
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else {
          alert("Digite uma opção válida!");
          novaOperacao();
        }
      }
    }

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}

calculadora();
