const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`)
/* CONSIDERAÇÕES FINAIS E ANOTAÇÃO DA AULA

O "template string" serve para tornar a concatenação de strings mais facil.

Em uma string, você NÃO PODE quebrar a linha da string, ja no template string sim,
como na constante "template" na linha 3. (linha3)

Todo template string deve começar e terminar com crase.(linha3)

As variaveis que ficarão no meio do template da string se resolvem com "${nomeDaVariavel}".(linha5)

Você consegue colocar expressões dentro do seu template string. (linha10)

Você pode chamar funções dentro do template string. (linha14)
*/