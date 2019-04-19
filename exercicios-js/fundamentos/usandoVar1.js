{
    {
        {
            {
                var sera = 'Será????';
                console.log(sera);
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}

teste();
console.log(local);



/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

Uma variavel é acessivel/visivel também enquanto está dentro de um bloco de
código. (linha1 a 11). EXCETO quando está dentro de uma função.(linha13 a 19)

Devemos sempre evitar criar variaveis em escopo global,
para evitar problemas sérios na aplicação.
Por exemplo, você declara uma variavel que espera um objeto,
mas seu colega a declara depois e coloca uma string, isso irá gerar problemas na aplicação.

As variaveis tem dois escopos possiveis, ou ela é de "ESCOPO GLOBAL", ou seja,
é visivel/acessivel na sua aplicação inteira. Ou ela é de "ESCOPO DE FUNÇÃO",
onde ela é acessivel apenas dentro da função em que ela foi declarada.

*/