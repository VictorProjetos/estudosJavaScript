const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e'));
console.log(escola.replace(/\w/g, 'e'));

console.log('Victor, Aline, Duda'.split(','));

/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

A string é uma cadeia de caracteres delimitada por aspas duplas ou simples,
sendo que se voce começa uma string com aspas duplas, voce deve terminar com aspas duplas.

A partir da versão de 2015, as strings podem ser determinadas também por crase.

A função "charAt" exibe a letra que está no indice da string que você determinou.(linha3)
Caso voce determine um indice que não existe na string, a função irá te retornar vazio/nada.(linha4)

A função "charCodeAt" pega a letra no indice da string determinada por você e
retorna o valor dela na tabela UniCode. (linha5)

TABELA UNICODE : https://unicode-table.com/pt/

A função "indexOf" serve para você descobrir em qual indice está o digito que você colocou no seu
parametro. (linha6)

A funcção "substring" serve para exibir as caracteres a partir do index
que voce colocou no seu parametro. (linha8)
Voce também pode determinar a partir de que indice ele irá exibir e em qual
ele deve parar, lembrando que se voce colocar o indice final e ele irá exibir até a letra do
index anterior. (linha9)

A função "concat" serve para concatenar a string. (linha11)
mas a função pode ser substituida pelo "+", desde que esteja no constesto de strings.

A função "replace" serve para você substituir caracteres nas strings. (linha12)
Existe a expressão regular "/\d/" que serve para você substituir todos os digitos(numericos)
dentro da string pelo valor que você determinou. (linha13)
Existe outra expresão regular que é "/\w/g" que substitui todas os digitos(numerico) e
caracteres da string pelo valor que você determinou. (linha14)

A função "split" serve para você transformar strings em arrays,
sempre passando como parâmetro o separador que ele irá usar na hora de montar
o array. (linha16) 
*/