"""Weight Converter"""

Weight = input("Weight: ")
unit = input("(K)g or (L)bs: ")
if unit.upper() == "K" or unit.lower() == "k":
    print("Weight in Lbs:", float(Weight) * 2.205)
if unit.upper() == "L" or unit.lower() == "l":
    print("Weight in KG:", float(Weight) // 2.205)
