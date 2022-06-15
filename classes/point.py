import matplotlib.pyplot as plt


class Point():
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Point(x, y)

    def plot(self):
        '''fuck this shit

        '''
        plt.scatter(self.x, self.y)

point1 = Point(4, 5)
point1.plot()
a = Point(2, 3)
b = Point(4, 5)
c = a + b
