class Calculator():
    def __init__(self, number1, number2, znak):
        self.number1 = number1
        self.number2 = number2
        self.znak = znak

    def plus(self):
         print(self.number1 + self.number2)   
    def minus(self):
         print(self.number1 - self.number2)
    def share(self):
         print(self.number1 * self.number2)
    def multiply(self):
         print(self.number1 / self.number2)           

number1 = int(input("введите первое число: ("стоп - завершить ввод:"))
number2 = int(input("введите второе число: ")) 
znak = input("введите +, -, *, /: ")
Arifm = Calculator(number1, number2, znak)

if znak == "+":
    print(number1 + number2)
if znak == "-":
    print(number1 - number2)
if znak == "/":
    print(number1 / number2)
if znak == "*":
    print(number1 * number2)


while True:
    number1 = int(input("введите первое число: ("стоп - завершить ввод:"))
    if number1 == 0:
        break      
    number2 = int(input("введите второе число: ")) 
    znak = input("введите +, -, *, /: ")
    Arifm = Calculator(number1, number2, znak)
    Arifm.wish()
