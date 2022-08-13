"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var valor1 = rs.question('Digite o primeiro valor: ');
var valor2 = rs.question('Digite o segundo valor: ');
var valor3 = rs.question('Digite o terceiro valor: ');
var resultado = valor1 * valor2 * valor3;
console.log("O Resultado e: ".concat(resultado));
