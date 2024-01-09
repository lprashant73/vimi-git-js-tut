import asyncio
async def task_one():
    print("Task One started")
    await asyncio.sleep(10)  # Simulate some asynchronous operation
    print("Task One completed")

async def task_two():
    print("Task Two started")
    await asyncio.sleep(5)  # Simulate another asynchronous operation
    print("Task Two completed")

async def main():
    print("Main program started")

    # Create tasks
    t1 = asyncio.create_task(task_one())
    t2 = asyncio.create_task(task_two())

    # You can also use `await` to wait for tasks to complete if needed
    # await task_one()
    # await task_two()

    # Wait for all tasks to complete
    await asyncio.gather(t1, t2)

    print("Main program completed")

# Run the event loop
if __name__ == "__main__":
    asyncio.run(main())