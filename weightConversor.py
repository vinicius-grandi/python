weight = float(input('Tell me your weight: '))
unit = input('(K)g or (L)bs: ').lower()
if unit == 'k':
  print('Weight in Lbs: ' + str((weight * 2.2).__round__(2)))
else:
  print('Weight in Kgs: ' + str((weight / 2.2).__round__(2)))
