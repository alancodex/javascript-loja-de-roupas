var readline = require("readline-sync");

let blusa = 20;
let calca = 70;
let vestido = 100;
let saia = 60;
let bolsa = 90;

let carrinho = 0;
let item = 0;
let saldo = 1000;

let saian = 0;
let blusan = 0;
let calcan = 0;
let vestidon = 0;
let bolsan = 0;

let nomes = ["Alan", "Bruno", "Carlos"];
let senhas = ["123", "456", "789", "101"];

login();

async function tirarCarrinho() {
  console.clear();
  console.log("|==============================|");
  console.log("|      EXCLUIR DO CARRINHO     |");
  console.log("|==============================|");
  console.log("|                              |");
  console.log("|                              |");
  console.log("|     [1] TIRAR SAIA       " + saian + "x  |");
  console.log("|     [2] TIRAR BLUSA      " + blusan + "x  |");
  console.log("|     [3] TIRAR CALÇA      " + calcan + "x  |");
  console.log("|     [4] TIRAR VESTIDO    " + vestidon + "x  |");
  console.log("|     [5] TIRAR BOLSA      " + bolsan + "x  |");
  console.log("|     [0] SAIR                 |");
  console.log("|                              |");
  console.log("|==============================|");
  var tirar = readline.question("| Escolha o item a ser removido: ");

  switch (true) {
    case tirar == 1:
      if (saian <= 0) {
        console.log("Você não tem uma saia no carrinho.");
      } else {
        saian -= 1;
        console.log(
          "Você retirou uma saia do carrinho. Agora você tem " +
            saian +
            " saias no carrinho.",
        );
      }
      await sleep(2000);
      carrinhop();
      break;
    case tirar == 2:
      if (blusan <= 0) {
        console.log("Você não tem uma blusa no carrinho.");
      } else {
        blusan -= 1;
        console.log(
          "Você retirou uma blusa do carrinho. Agora você tem " +
            blusan +
            " blusas no carrinho.",
        );
      }
      await sleep(2000);
      carrinhop();
      break;
    case tirar == 3:
      if (calcan <= 0) {
        console.log("Você não tem uma calça no carrinho.");
      } else {
        calcan -= 1;
        console.log(
          "Você retirou uma calça do carrinho. Agora você tem " +
            calcan +
            " calças no carrinho.",
        );
      }
      await sleep(2000);
      carrinhop();
    case tirar == 4:
      if (vestidon <= 0) {
        console.log("Você não tem um vestido no carrinho.");
      } else {
        vestido -= 1;
        console.log(
          "Você retirou um vestido do carrinho. Agora você tem " +
            vestidon +
            " vestidos no carrinho.",
        );
        await sleep(2000);
        carrinhop();
      }
      break;
    case tirar == 5:
      if (bolsan <= 0) {
        console.log("Você não tem uma bolsa no carrinho.");
      } else {
        vestido -= 1;
        console.log(
          "Você retirou uma bolsa do carrinho. Agora você tem " +
            bolsan +
            " bolsas no carrinho.",
        );
      }
      await sleep(2000);
      carrinhop();
      break;
    case tirar == 0:
      carrinhop();
      break;
    default:
      console.log("Opção invalida");
      await sleep(2000);
      tirarCarrinho();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cartaoCreditoNC() {
  var numero_cartao = readline.question("Digite o numero do cartao: ");
  if (numero_cartao.length == 16) {
    codigocard();
  } else {
    console.log("Número de cartão inválido");
    cartaoCreditoNC();
  }
}

function codigocard() {
  var codigo_seguranca = readline.question("Digite o codigom de seguranca: ");
  if (codigo_seguranca.length == 3) {
    validadeCartaoAno();
  } else {
    console.log("Codigo de seguranca invalido!");
    codigocard();
  }
}

function validadeCartaoAno() {
  var validade_ano = readline.question(
    "Digite os dois primeiros digitos ano da validade do cartao: ",
  );
  if (validade_ano.length == 2) {
    validadeCartaoMes();
  } else {
    console.log("Digite apenas dois digitos!");
    validadeCartaoAno();
  }
}

function validadeCartaoMes() {
  var validade_mes = readline.question(
    "Digite os dois últimos digitos mes da validade do cartao: ",
  );
  if (validade_mes.length == 2) {
    console.log("Pagamento realizado com sucesso!");
    console.log("Volte sempre!");
    LOJAMEG();
  } else {
    console.log("Digite apenas dois digitos!");
    validadeCartaoMes();
  }
}

async function pagamento() {
  console.clear();
  console.log("|==============================|");
  console.log("|           PAGAMENTO          |");
  console.log("|==============================|");
  console.log("|                              |");
  console.log("|                              |");
  console.log("|     [1] CARTAO DE CREDITO    |");
  console.log("|     [2] CARTAO DE DEBITO     |");
  console.log("|     [3] PIX                  |");
  console.log("|     [4] BOLETO               |");
  console.log("|     [0] SAIR                 |");
  console.log("|                              |");
  console.log("|==============================|");
  var pagamento = readline.question("| Qual a forma de pagamento? ");

  switch (true) {
    case pagamento == 1 || pagamento == 2:
      cartaoCreditoNC();
      break;
    case pagamento == 3:
      console.log(
        "Pix copia e cola: oNIjbuVuvIBibvUuU345423524G89G8g8YV8Ygb8g8",
      );
      break;
    case pagamento == 4:
      console.log("Código de barras: 8218321030238102");
      break;
    case pagamento == 0:
      carrinhop();
      break;
    default:
      console.log("Opção invalida");
      await sleep(2000);
      pagamento();
  }
  let repostaPagamentos = readline.question("Digite 1 para continuar ");
  switch (true) {
    case repostaPagamentos == 1: 
      LOJAMEG()
      break;
    default:
      pagamento()
  }
}

function login2() {
  let nomeUsuario = readline.question("Digite seu nome: ");
  if (nomes.includes(nomeUsuario)) {
    senhaLogin();
  } else {
    console.log("Nome não encontrado");
    login2();
  }
}

function senhaLogin() {
  let senha1 = readline.question("Digite a senha: ");
  if (senhas.includes(senha1)) {
    LOJAMEG();
  } else {
    console.log("Senha incorreta");
    senhaLogin();
  }
}

function cadastro() {
  let nome = readline.question("Digite seu nome: ");
  if (nome == nomes[1] || nome == nomes[2] || nome == nomes[0]) {
    console.log("Nome já cadastrado");
    cadastro();
  } else {
    nomes.push(nome);
  }
  let senha = readline.question("Digite sua senha: ");
  let senha2 = readline.question("Confirme sua senha: ");
  if (senha == senha2) {
    console.log("Cadastro realizado com sucesso!");
    senhas.push(senha);
    LOJAMEG();
  } else {
    console.log("Senha incorreta!");
    cadastro();
  }
}
async function login() {
  console.clear();
  console.log("|==================================|");
  console.log("|              LOGIN               |");
  console.log("|==================================|");
  console.log("|                                  |");
  console.log("|                                  |");
  console.log("|                                  |");
  console.log("|            [1]CADASTRO           |");
  console.log("|            [2]LOGIN              |");
  console.log("|                                  |");
  console.log("|                                  |");
  console.log("|                                  |");
  console.log("|==================================|");
  let usuario = readline.question("Digite a opcao desejada: ");

  switch (true) {
    case usuario == 1:
      cadastro();
      break;
    case usuario == 2:
      login2();
      break;
    default:
      console.log("Opção inválida");
      await sleep(2000);
      login();
  }
}

function ocarrinho() {
  console.log("============= CARRINHO =============");
  console.log("|                                 |");
  console.log("|                                 |");
  console.log("|                                 |");
  if (blusan > 0) {
    console.log("|      Blusa   R$20,00 " + blusan + "x         |");
  } else {
  }
  if (saian > 0) {
    console.log("|       Saia  R$60,00 " + saian + "x          |");
  } else {
  }
  if (calcan > 0) {
    console.log("|      Calça  R$70,00 " + calcan + "x          |");
  } else {
  }
  if (vestidon > 0) {
    console.log("|      Vestido R$100,00 " + vestidon + "x        |");
  } else {
  }
  if (bolsan > 0) {
    console.log("|      Bolsa   R$90,00 " + bolsan + "x         |");
  } else {
  }
  console.log("|                                 |");
  console.log("|                                 |");
  console.log("|                                 |");
  console.log("===================================");
  console.log("| Total: R$" + carrinho + "              |");
}

function blusaC() {
  console.log("Você adicionou uma blusa ao carrinho!");
  carrinho += blusa;
  item += 1;
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
    (blusan += 1),
  );
}

function calcaC() {
  console.log("Você adicionou uma calça ao carrinho!");
  carrinho += calca;
  item += 1;
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
    (calcan += 1),
  );
}

function vestidoC() {
  console.log("Você adicionou um vestido ao carrinho!");
  carrinho += vestido;
  item += 1;
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
    (vestidon += 1),
  );
}

function saiaC() {
  console.log("Você adicionou uma saia ao carrinho!");
  carrinho += saia;
  item += 1;
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
    (saian += 1),
  );
}

function bolsaC() {
  console.log("Você adicionou uma bolsa ao carrinho!");
  carrinho += bolsa;
  item += 1;
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
    (bolsan += 1),
  );
}

function finalizar() {
  if (saldo >= carrinho) {
    saldo -= carrinho;
    console.log("Pedido finalizado! Seu saldo agora é de: R$" + saldo);
  } else if (saldo < 0) {
    console.log("Seu saldo esta negativo");
  } else {
    console.log(
      "Você não tem saldo o suficiente para realizar a compra do pedido.",
    );
  }
}

function saldoVer() {
  console.log("Seu saldo é de: R$" + saldo);
}

function carrinhoVer() {
  console.log(
    "Seu carrinho está com o valor de: R$" +
      carrinho +
      ". Com " +
      item +
      " itens.",
  );
}

async function LOJAMEG() {
  console.clear();
  console.log("===============================");
  console.log("|        LOJA MEG MODA         |");
  console.log("===============================");
  console.log("|                              |");
  console.log("|                              |");
  console.log("|        [1] COMPRAR           |");
  console.log("|        [2] VER SALDO         |");
  console.log("|        [3] VER CARRINHO      |");
  console.log("|        [0] SAIR              |");
  console.log("|                              |");
  console.log("|                              |");
  console.log("===============================");
  let coisa2 = readline.question("Digite a opção desejada: ");
  console.log("============================");

  switch (true) {
    case coisa2 == 1:
      carrinhop();
      break;
    case coisa2 == 2:
      saldoVer();
      await sleep(2000);
      LOJAMEG();
      break;
    case coisa2 == 3:
      ocarrinho();
    case coisa2 == 0:
      login();
      break;
    default:
      console.log("Opção inválida!");
      await sleep(2000);
      LOJAMEG();
  }
}

async function carrinhop() {
  console.clear();
  console.log("===============================");
  console.log("|  Qual produto você deseja?  |");
  console.log("===============================");
  console.log("|    [1] Blusa: R$ 20,00      |");
  console.log("|    [2] Calça: R$ 70,00      |");
  console.log("|    [3] Vestido: R$ 100,00   |");
  console.log("|    [4] Saia: R$ 60,00       |");
  console.log("|    [5] Bolsa: R$ 90,00      |");
  console.log("|    [6] FINALIZAR PEDIDO!    |");
  console.log("|    [7] SALDO                |");
  console.log("|    [8] CARRINHO             |");
  console.log("|    [9] TIRAR ITEM           |");
  console.log("|    [0] VOLTAR               |");
  console.log("===============================");
  var coisa = readline.question("Digite a opção desejada: ");
  console.log("============================");
  switch (true) {
    case coisa == 1:
      blusaC();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 2:
      calcaC();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 3:
      vestidoC();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 4:
      saiaC();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 5:
      bolsaC();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 6:
      pagamento();
      break;
    case coisa == 7:
      saldoVer();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 8:
      ocarrinho();
      await sleep(2000);
      carrinhop();
      break;
    case coisa == 9:
      tirarCarrinho();
      break;
    case coisa == 0:
      LOJAMEG();
    default:
      console.log("Opção inválida!");
      await sleep(2000);
      carrinhop()
  }
}
