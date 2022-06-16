import random

class DataGenerator:
    def __init__(self, n):
        self.n = n
        self.cursor = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.cursor < self.n:
            self.cursor += 1
            return random.randint(1, 6)
        raise StopIteration

generator =  DataGenerator(1)

iterator = iter(generator)
print(next(iterator))
print(next(iterator))
print(next(iterator))
