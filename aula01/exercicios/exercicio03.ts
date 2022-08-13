import * as rs from 'readline-sync';

const base = Number(rs.question('Insira a base do triangulo: '));
const altura = Number(rs.question('Insira a altura do triangulo: '));

const area = base*altura /2;
console.log('A Área é de: '+area);