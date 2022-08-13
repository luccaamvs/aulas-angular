"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var base = Number(rs.question('Insira a base do triangulo: '));
var altura = Number(rs.question('Insira a altura do triangulo: '));
var area = base * altura / 2;
console.log('A Área é de: ' + area);
