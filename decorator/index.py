from time import time
from typing import final


def hello(msg):
  def wrapper(*args):
    initial_time = time()
    msg(*args)
    final_time = time()
    print(f'the time elapsed was {final_time - initial_time}')

  return wrapper

@hello
def setMsg(*m):
  for val in m:
    for v in val:
      len(v) + 2

setMsg('jojo', 'jojo', 'jojo', 'jojoo', 'joojjo')
