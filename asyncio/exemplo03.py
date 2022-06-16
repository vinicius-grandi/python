import random


def data_generator(n):
    for _ in range(0, n):
        yield random.randint(1, 6)
        print('jojo')
