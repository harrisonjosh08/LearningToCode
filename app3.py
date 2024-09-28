unit = input("K = Kg to Lbs L = Lbs to Kg: ")
Weight = input("Weight: ")
K = float(Weight) * 2.205
L = float(Weight) / 2.205
if unit.upper() == 'K' or unit.lower() == 'k':
    print(K)
elif unit.upper() == 'L' or unit.lower() == 'l':
    print(L)


