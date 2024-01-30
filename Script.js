const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    
    sexo: 'F',
    salario: 3350.25,
    },
    ];

// 1. Imprima no console a quantidade total de pessoas.
console.log(`1. Quantidade total de pessoas: ${data.length}`);

// 2. Imprima no console as mulheres.
let mulheres = data.filter(pessoa => pessoa.sexo === 'F');
console.log(`2. Pessoas do sexo Feminino: ${mulheres.map(pessoa => pessoa.nome).join(', ')}`);

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`3. Soma total dos salários: ${somaSalarios}`);

// 4. Imprima no console a média do salário de todas as pessoas.
let mediaSalarios = somaSalarios / data.length;
console.log(`4. Média dos salários: ${mediaSalarios.toFixed(2)}`);

// 5. Imprima no console a soma do salário de todas as pessoas do sexo Masculino.
let somaSalariosMasculinos = data.filter(pessoa => pessoa.sexo === 'M').reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`5. Soma dos salários dos homens: ${somaSalariosMasculinos}`);

// 5.1 Imprima no console a soma do salário de todas as pessoas do sexo Feminino.
let somaSalariosFemininos = data.filter(pessoa => pessoa.sexo === 'F').reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`5.1 Soma dos salários das mulheres: ${somaSalariosFemininos}`);

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino.
let mediaSalariosMasculinos = somaSalariosMasculinos / (data.filter(pessoa => pessoa.sexo === 'M').length || 1);
console.log(`6. Média dos salários dos homens: ${mediaSalariosMasculinos.toFixed(2)}`);

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000.
let salarioSuperior7000 = data.some(pessoa => pessoa.salario > 7000);
console.log(`7. Existe salário superior a R$ 7.000? ${salarioSuperior7000}`);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
let indiceTrindade = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade');
console.log(`8. Posição da pessoa 'Eva Trindade': ${indiceTrindade}`);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
let pessoaSobrenomeSilva = data.filter(pessoa => pessoa.nome.includes('Silva'));
console.log(`9. Pessoas com sobrenome Silva: ${pessoaSobrenomeSilva.map(pessoa => pessoa.nome).join(', ')}`);

// 10. Imprima os nomes utilizando o MAP.
console.log(`10. Nomes utilizando MAP: ${data.map(pessoa => pessoa.nome).join(', ')}`);


/*
1. Imprima no console a quantidade de pessoas Total.
2. Imprima no console a quantidade de pessoas pessoas do sexo
Feminino.
3. Imprima no console a soma do salário de todas as pessoas.
4. Imprima no console a média do salário de todas as pessoas.
5. Imprima no console a soma do salário de todos as pessoas do sexo
Masculino
6. Imprima no console a média do salário de todas as pessoas do sexo
Masculino
7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.
8. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.
9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".
10. Imprima os nomes utilizando o MAP
*/

