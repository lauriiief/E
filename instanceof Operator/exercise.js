class Allshapes {

}


class Square extends Allshapes{
  constructor(side) {
    super()
    this.side = side;
  }
}

class Rectangle extends Allshapes{
  constructor(width, height) {
    super()
    this.width = width;
    this.height = height;
  }
}

class Circle extends Allshapes{
  constructor(radius) {
    super()
    this.radius = radius;
  }
}

class AreaCalculator extends Allshapes{
  static calculate(value) {
    if(value === Circle.class) {
      return 3.14 * (Circle.radius * Circle.radius);
    } else if(Square.class) {
      return Square.side * Square.side;
    } else if(Rectangle.class){
      return Rectangle.width * Rectangle.height;
    } else {
      return "The class is not recognized";
    }
}
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(square instanceof Allshapes)
console.log(rectangle instanceof Allshapes)
console.log(circle instanceof Allshapes)


console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));