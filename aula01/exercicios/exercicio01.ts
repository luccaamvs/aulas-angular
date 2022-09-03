import * as rs from 'readline-sync';

const valor1: number = Number(rs.question('Digite o primeiro valor: '));
const valor2: number = Number(rs.question('Digite o segundo valor: '));
const valor3: number = Number(rs.question('Digite o terceiro valor: '));

let resultado = valor1 * valor2 * valor3; 
console.log(`O Resultado e: ${resultado}`);