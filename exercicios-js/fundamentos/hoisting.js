console.log("a = ", a);
var a = 2;
console.log("a = ", a);


// console.log("b = ", b);
// let b = 2;
// console.log("b = ", b);



/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Em varias linguagens, ele le o script de cima para baixo,
no JavaScript tabém, com a excessão das variaveis.
No exemplo aci2ma(linha1, 2 e 3), o console.log da linha 1
está exibindo o valor da variavel a, porém ela só é declarada na linha 2,
em outras lingaguens isso iria gerar um erro, mas o JavaScript ao ler a declaração
na linha 2, ele faz o que se chama "HOISTING", ou seja, ele joga a variavel para cima.
Porém no console.log da linha 1, o valor da variavel é "undefined", pois ele apenas
joga para cima a variavel e não o valor, sendo que o valor só é atribuido na linha 2.
LEMBRANDO QUE ISSO SÓ OCORRE COM AS VARIAVEIS DECLARADAR COMO VAR !
Nas linhas 6, 7 e 8, ira gerar um erro, pois a variavel é declarada com o tipo LET.

*/