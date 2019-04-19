console.log(Math.ceil(6.1))

const obj1 = {};
obj1.nome = 'Bola';
console.log(obj1.nome);

function Obj (nome) {
    this.nome = nome;
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();




/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

O comando "Math.ceil()" serve para arredondamento de valores para cima.(linha1)

A palavra reservada "this" (Duvida!)

A notação ponto é muito importante na liguagem JavaScript, ela está presente em
toda a linguagem, com ela você acessa os membros de um objeto, de uma função etc...


*/