
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);


/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA
O operador "destructuring" serve para desestruturação, ou seja, para desestruturar um objeto,
como, extrair informações de dentro de um objeto, tirar elementos de dentro de um array.

O operador "destructuring", tem duas formas de escrita:
Quando você trabalha no ambito de objeto, é utilizado as chaves "{}" (linha11);
Quando você trabalha no ambito de array, é utilizado os colchetes "[]";

Na  linha 11 , as chaves "{}" não servem para a declaração de um objeto,
ela na verdade representa o operador de desestruturação (operador destructuring),
diferente das chaves na constante "pessoa" (linha2), que elas sim declaram um objeto.

Ainda na linha 11, "const {nome, idade} = pessoa", o operador destructuring serve da seguinte forma:
Tire o valor dos atributos 'nome' e 'idade' do objeto 'pessoa'.
A partir da linha 11 o destructuring ira "criar" duas variaveis (nome e idade), com os valores extraidos
do atributo do objeto, como mostrado na linha 12.

Na linha 14 "const {nome: n, idade: i} = pessoa", ainda estamos executando a mesma coisa que foi feita
na linha 11, porém, quando escrevemos "nome: n, idade: i", estamos dando outro nome para a variavel
que o destructuring irá criar, ou seja: Tire os valores dos atrubitos 'nome' e 'idade' do objeto 'pessoa',
e chame 'nome' de 'n' e 'idade' de 'i', como mostrado na linha 15.

Na linha 17, passamos atributos do objeto que não existem nele ("sobrenome" e "bemHumarada"), ao imprimir
os valores destes atributos, ele serão "undefined", mas caso você queira atribuir um valor padrão para este
atributo, basta atribuir o valor a este atributo ("bemHumorada = true").

Na linha 20, para extrair o valor de um atributo de um objeto que esta dentro de outro objeto, basta fazer
"const {endereco: {logradouro, numero, cep } } = pes soa;"


*/