const a = 7;
let b = 3;

b += a; // Equivalente a: b = b + a
console.log(b);

b -= 4; // Equivalente a: b = b - 4
console.log(b);

b *= 2; // Equivalente a: b = b * 2
console.log(b);

b /= 2; // Equivalente a: b = b / 2
console.log(b);

b %= 2 // Equivalente a: b = b % 2
console.log(b);
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

O operador "+=" significa que você está fazendo uma atribuição aditiva,
ou seja, você está pegando o valor da variaveis e somando o valor da outra variavel.(linha4)

Por sua vez, o operador "-=" é uma atribuição subtrativa.(linha7)

O operador "*=" é uma atribuição multiplicativa.(linha10)

O operador "/=" é uma atribuição divisiva.(linha13)

O operador "%=" é uma atribuição modular.(linha16)

Em uma operação modular, quando o resultado é par o valor é zero, e impar um.

Nas atribuições aritiméticas, sempre o simbolo da operação
virá antes do igual.(+=, -=, *=, /=, %=).
*/