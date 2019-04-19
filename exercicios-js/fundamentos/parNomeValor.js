//par nome/valor

const saudacao = 'Opa'; //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: '90',
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);


/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Nós definimos uma variavel/constante dentro de um "Contexto léxico", ou seja,
é o local onde sua variavel/constante foi definida fisicamente no código.
Exemplo: Na linha 3, a constante "saudacao" foi definida fisicamente, sendo entao
o "Contexto Léxico".

a estrutura par nome/valor basicamente é uma estrutura onde voce define uma chave(nome)
e o seu valor. Exemplo "var produto(nome/chave) = 'Celular(valor)'"

A constante "saudacao" não gera erro pois elas estão em contextos diferentes, sendo um uma
no contexto/escopo global(linha3) e a outra no contexto/escopo função.(linha6)

Os objetos são grupos aninhados de pares nome/valor.(linha10 a 18)
*/