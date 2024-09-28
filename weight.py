Weight = input("Weight: ")
Type = input("(K)g or (L)bs: ")
if Type.upper() == 'K' or Type.lower() == 'k':
    print("Weight in Lbs:", float(Weight) * 2.205)
if Type.upper() == 'L' or Type.lower() == 'l':
    print("Weight in KG:", float(Weight) // 2.205)
