// Tipos Básicos
let age: number = 5;
const firstName: string = 'Renan';
const isValid: boolean = true;

const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const booleans: boolean[] = [true, false, false, true, false];
const firstNames: string[] = ["joao", "mariano", "pablo", "jane"];

// Tupla
const person: [number, string] = [1, 'Renan'];

// Lista tuplas
const people: [number, string][] = [[1, 'Renan'], [2, 'João'], [3, 'Maria']];

// Intersections
const productId: string | number | boolean = 1;

// Enum 
enum Direction {
  up = 1,
  down = 2,
  left = 'Esquerda',
  right = 'Direita'
}

const direction = Direction.up;

// Type Assertions
const productName: any = 'Boné';

//let itemId = productName as string;
let itemId = <string>productName;