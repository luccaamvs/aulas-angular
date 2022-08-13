"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var nota1 = Number(rs.question('Digite a nota1: '));
var nota2 = Number(rs.question('Digite a nota2: '));
var nota3 = Number(rs.question('Digite a nota3: '));
var media = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);
console.log('Média final é: ' + media);
