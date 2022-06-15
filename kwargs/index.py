from typing import Dict


def kwargs(**kwags: int):
  for idx in kwags:
    print(kwags[idx])

kwargs(number=1)
