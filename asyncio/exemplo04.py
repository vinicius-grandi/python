import queue
count = 0

def increment_1000(task_name):
    yield
    global count
    for _ in range(0, 1000):
        print(task_name)
        count += 1

def increment_count(n):
    global count
    for _ in range(0, int(10e2)):
        count += 1
        print(n)
        yield increment_1000(n)

q = queue.Queue()
q.put(increment_count('task 1'))
q.put(increment_count('task 2'))
while not q.empty():
    iterator = q.get()
    try:
        fn = next(iterator)
        if fn:
            q.put(fn)
    except StopIteration:
        pass
    else:
        q.put(iterator)

print(count)
