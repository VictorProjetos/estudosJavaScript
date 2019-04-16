// Funçao sem retorno

function imprimirSoma (a, b) {
    console.log(a + b)
};
imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();

// Função com retorno

function soma(a, b = 1) {
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

A função é uma sentença, ela executa algo que determinamos
em uma sequencia/bloco de código.

Podemos definir um valor padrão de um parametro de uma função,
atribuindo o valor ao parametro.(linha13)

*/