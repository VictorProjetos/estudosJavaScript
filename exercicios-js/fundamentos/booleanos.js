let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'Eu sou verdadeiro' || 'Eu também sou verdadeiro'))

let nome = '';
console.log(nome || 'Desconhecido');

/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Para saber se uma variavel é verdadeiro(true) ou falso(false),
utilizamos as duas esclamações ou uma (!!, !), retornando assim o true ou false.(linha8)
A uma esclamaçao significa NEGAÇÃO, ou seja, se a variavel é true,
ao colocar a esclamaçao na frente, ela se torna false, (negação de true é false),
e duas esclamações, pela logica, mantém o booleano original da variavel.

Todos os numeros são verdadeiros(true),(linha11 e 12) com a exceção do zero.(linha20)

Toda string que contém pelo menos um espaço em branco, é true,(linha13)
Senão ela é false.(linha21)

Todos o null, NaN e undefined são false.(linha22, 23 e 24)

Caso voce coloque em um comando só, valores true e false, usando o operador logico
"OU" (||) ele irá retornar o verdadeiro(true).(linha28)
Caso você tire o sinal de dupla negação, ele irá retornar o primeiro
VALOR verdadeiro que encontrar.(linha29 e 32)

*/