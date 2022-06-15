class User:
    type = 'user'
    def __init__(self, name, years, height):
        self.height = height
        self.name = name
        self.years = years

    @classmethod
    def user_height(cls, years=12, height=190):
        return cls('João', years, height)

user = User('João', 12, 19)
print(User.user_height(height=200, years=20))
user.user_height()
