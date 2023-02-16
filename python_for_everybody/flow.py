# Program flow

#1. Sequential; step by step in order
x = 2
print(x)
x = x + 2
print(x)

#2. Conditional; some steps may be skipped
x = 5
if x < 10:
    print("Smaller")
if x > 10:
        print("Larger")
print("finis")
#3. Repeated; does it over and over again

n = 10

while n >= 0:
    print(n)
    n = n - 1;
print("Blastoff")

#4. Store and repeated steps combines all the three above
#prints the word that occurs most in a string and the number of times it occurs
