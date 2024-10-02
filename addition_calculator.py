"""Simple Calculator"""


def add(a, b):
    """Adds Numbers From Input"""
    return a + b


print(add(int(input("First Number: ")), int(input("Second Number: "))))
print(add.__doc__)
