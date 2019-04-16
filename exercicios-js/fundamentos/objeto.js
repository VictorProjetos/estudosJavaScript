const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
};

console.log(prod2);
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

JSON significa "javaScript object notation" Ou "Notação de objeto em JavaScript";
Um objeto em JavaScript não é a mesma coisa de JSON, o JSON é um formato textual;

Para criar um objeto, basta colocar chaves.(linha1)

Um objeto em JavaScript é uma coleção de chave e valor. 

Podemos criar as chaves do objeto de forma dinamica, por exemplo,
valor da chave "nome" é "Celular Ultra Mega".(linha2)

Ao criar atributos para seu objeto, evite cria-los com espaço mesmo sendo possivel.(linha4)

Podemos também dar valor as chaves na propria declaração do objeto.(linha8 a 17)

Podemos ter objetos dentro de objeto.


*/