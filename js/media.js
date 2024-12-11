/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes frases usando uma estrutura de condição:

    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
// Verificação de entradas inválidas
const notas = [nota1, nota2, nota3, nota4];
if (notas.some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
  document.getElementById("situacaoAluno").innerHTML =
    "Erro: Insira notas válidas entre 0 e 10.";
  return;
}

// Calcular a média
const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / notas.length;


//mensagem
    let mensagem = "";
    if (media === 0) {
      mensagem = "Infelizmente você zerou a prova :( ";
  } else if (media > 0 && media <= 3) {
      mensagem = `Caramba, deu ruim, você obteve média ${media.toFixed(1)}! Estude mais e tente novamente!`;
  } else if (media > 3 && media <= 5.9) {
      mensagem = `Você obteve média ${media.toFixed(1)}! Falta pouco para a média.`;
  } else if (media >= 6 && media <= 7) {
      mensagem = `Você está na média com ${media.toFixed(1)}`;
  } else if (media > 7 && media <= 9.9) {
      mensagem = `Notão! Sua média é ${media.toFixed(1)}!`;
  } else if (media === 10) {
      mensagem = "Hoje é seu aniversário? Pq você tá de parabéns! 10 de média";
  } else {
      mensagem = "Média inválida. Verifique as notas inseridas.";
  }
  
    // evite mexer na linha de código abaixo! Atualiza o conteúdo no HTML
    document.getElementById("situacaoAluno").innerHTML = mensagem;
  }