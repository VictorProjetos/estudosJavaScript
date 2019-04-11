const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Em JavaScript o array é heterogêneo, ou seja, um array pode crescer e diminuir
o seu tamanho conforme os valores colocados ou tirados dele. Isso é possivel
pois o JavaScript é uma lingaguem com tipagem fraca.

Quando você busca um determinado valor em um index do array que não existe,
ele irá retorna "undefined".(linha3)

O comando ".length" serve para descobrir a quantidade de elementos dentro de um
array.(linha7)

Em um unico array em JavaScript podemos colocar valores de diferentes tipos
Numerico, string etc...(linha9)

A função ".push" serve para incluir valores dentro do array.(linha9)

A função ".pop" serve para pegar o ultimo valor do array e retorna-lo,
tirando o valor do array.(linhas12)

Outra forma de remover valores do array, é usando o "delete".(linha13)

Em javaScript um array é um "object".(linha16)


*/