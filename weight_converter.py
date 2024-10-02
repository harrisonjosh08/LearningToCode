"""Weight Converter"""

unit = input("(K)Gs or (L)Bs: ")

if unit.upper() == "K" or unit.lower() == "k":

    def multiply(a, b):
        """Converts KGs to LBs"""
        return a * b

    print(multiply(int(input("Weight: ")), 2.205))

if unit.upper() == "L" or unit.lower() == "l":

    def divide(a, b):
        """Converts LBs to KGs"""
        return a / b

    print(divide(int(input("Weight: ")), 2.205))
