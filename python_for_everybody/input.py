name = input('Who are you ?')
print("Hello ", name)


inp = input("What Europe floor?")
#input gives a string that has to be converted to an integer
usf = int(inp) + 1
print("US Floor", usf)

# Write a program to prompt the user for hours and rate per hour using input to compute gross pay. Use 35 hours and a rate of 2.75 per hour to test the program (the pay should be 96.25). You should use input to read a string and float() to convert the string to a number. Do not worry about error checking or bad user data.

hrs = input("Enter Hours:")
rate_per_hour = input("Enter Rate:")
gross = int(hrs) * float(rate_per_hour)
print("Pay:", gross)
