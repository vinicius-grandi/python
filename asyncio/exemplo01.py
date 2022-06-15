from time import time

def repeater(func, times):
    total_time = 0
    for _ in range(0, times):
        start_time = time()
        func()
        end_time = time() - start_time
        total_time += end_time
    average = total_time / times
    print(average)

def increment_count():
    count = 0
    for _ in range(0, int(10e6)):
        count += 1

repeater(increment_count, 3)
