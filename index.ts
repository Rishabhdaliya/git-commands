let a: number = 4;
let b: number = 5;

function add(x: number, y: number): number {
  return x + y;
}
function subtract(x: number, y: number): number {
  return x - y;
}
function multiply(x: number, y: number): number {
  return x * y;
}
function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}
function square(x: number): number {
  return x * x;
}
