"use strict";

function parseCount(parseNumber) {
  if (isNaN(parseInt(parseNumber)) == true) {
    throw new Error("Невалидное значение");
  };
  return parseInt(parseNumber);
};

function validateCount(validateNumber) {
  try {
    return parseCount(validateNumber);
  } catch(TypeError) {
    return new Error("Невалидное значение");
  } finally {

  };
};

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.error = new Error("Треугольник с такими сторонами не существует");

    if ((this.side1 + this.side2) < this.side3 ||
        (this.side1 + this.side3) < this.side2 ||
        (this.side3 + this.side2) < this.side1) {
      throw this.error;
    };
  };

  getPerimeter() {
    return (this.side1 + this.side2 + this.side3);
  };

  getArea() {
    let pValue = this.getPerimeter() / 2;
    return parseFloat(Math.sqrt(pValue * (pValue - this.side1) * (pValue - this.side2) * (pValue - this.side3)).toFixed(3));
  };

};

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch (TypeError) {
    return new class stub {
      constructor() {
        this.error = 'Ошибка! Треугольник не существует'
      };

      getArea() {
        return this.error;
      };

      getPerimeter() {
        return this.error;
      };

    };
  };
};