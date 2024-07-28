"use strict";
// Tipos Básicos
let age = 5;
const firstName = 'Renan';
const isValid = true;
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const booleans = [true, false, false, true, false];
const firstNames = ["joao", "mariano", "pablo", "jane"];
// Tupla
const person = [1, 'Renan'];
// Lista tuplas
const people = [[1, 'Renan'], [2, 'João'], [3, 'Maria']];
// Intersections
const productId = 1;
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction["left"] = "Esquerda";
    Direction["right"] = "Direita";
})(Direction || (Direction = {}));
const direction = Direction.up;
// Type Assertions
const productName = 'Boné';
//let itemId = productName as string;
let itemId = productName;
