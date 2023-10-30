class Square {
  constructor(side) {
    this.side = side;
  }
}
  
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
  
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
  
class AreaCalculator {
  static calculate(Square, Rectangle, Circle) {
    if(Square){
      return Square.side * Square.side;
    } else if(Rectangle){
      return Number(Rectangle.height * Rectangle.width);
    } else if(Circle){
      return Number(Circle.radius * 3.14);
    } else{
      return "Class not recognized"
    }
}
}
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));