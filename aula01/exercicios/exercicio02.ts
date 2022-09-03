import * as rs from 'readline-sync';

const nota1 = Number(rs.question('Digite a nota1: '));
const nota2 = Number(rs.question('Digite a nota2: '));
const nota3 = Number(rs.question('Digite a nota3: '));

const media = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);

console.log('Média final é: '+media);