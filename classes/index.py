import turtle


## a good practice is naming classes with PascalCase for differentiate it from other structures
class Polygon:
  def __init__(self, sides: int, name: str, max_size: int = 400):
    self.sides = sides
    self.name = name
    self.angle = 360 / sides
    self.max_size = max_size / sides

  def draw(self):
    for _ in range(self.sides):
      turtle.forward(self.max_size)
      turtle.right(self.angle)
    turtle.done()

class Square(Polygon):
  def __init__(self, max_size):
    super().__init__(4, 'square', max_size)

  def draw(self):
    turtle.color('blue')
    super().draw()

square = Square(400)
square.draw()
