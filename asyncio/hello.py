import asyncio

async def task_generator(task_number):
    print(task_number)
    await asyncio.sleep(1)
    print(f'task {task_number} finished')

async def main():
    await asyncio.gather(*[
        task_generator(val) for val in range(1, 11)
    ])

loop = asyncio.get_event_loop()
asyncio.run(main())
