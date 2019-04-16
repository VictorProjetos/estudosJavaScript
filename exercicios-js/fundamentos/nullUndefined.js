let valor //não inicializada
console.log(valor);

valor = null //ausencia de valor
console.log(valor);
//console.log(valor.toString()); //ERRO !

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);



/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Quando uma variavel é "undefined" significa que ela nem foi
inicializada, apenas declarada.(linha1 e 2)

o valor "null" significa ausencia de valor.(linha4)

Sempre que você quiser "zerar" alguma variavel que aponta para algum endereço de memória,
por padrão, atribua "null" a está variavel.(linha4)

Evite atribuir o valor "undefined" para uma variavel.
Deixe que a linguagem defina o que é "undefined" para facilitar seu trabalho.(linha15)

Uma atribuição por valor é: Você faz uma cópia do valor e cada variavel ou constante terá seu
valor independente.

Uma atribuição por referencia é: Você copiar um endereço de memória, ou seja,
duas ou mais variaveis apontam para o mesmo endereço de memória.
*/