const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2));
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

"Number.isInteger" é utilizado para verificar se um tipo de variavél "Number" é inteiro, retornando TRUE ou FALSE.

"toFixed" serve para ter um controle maior sobre numeros com muitas casas decimais, após determinar a quantidade de casa
a ser exibida, ele irá tirar os números após esta casa determinada.

"toString" converte o valor de uma variavel numerica para String.

*/