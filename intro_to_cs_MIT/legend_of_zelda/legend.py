# counter = 0
# response = input("You are lost in the forest.\n**********\n**********\n:)\n**********\n**********\nGo left or right?")
# while response == "right" or response == "Right" :
#     counter +=1
#     response = input("You are lost in the forest.\n**********\n**********\n:)\n**********\n**********\nGo left or right?")
#     if counter > 2 and response == "Right" or response == "right" :
#         response = input("You are lost in the forest.\n**********\n*****" "" "" "**\n___:(\n**********\n**********\nGo left or right?")
#     elif response == "left" or response == "Left" :
#         print("You got out of the lonely forest\n🕺🏿")
#     else :
#         print("You got out of the lonely forest\n🕺🏿")
# print("You got out of the lonely forest\n🕺🏿")


counter = 0
response = input("You are lost in the forest.\n**********\n**********\n:)\n**********\n**********\nGo left or right?")

while response == "right" or response == "Right" :
    counter += 1
    response = input("You are lost in the forest.\n**********\n**********\n:)\n**********\n**********\nGo left or right?")
    if counter > 2 and response == "Right" or response == "right" :
        response = input("You are lost in the forest.\n**********\n*****" "" "" "**\n___:(\n**********\n**********\nGo left or right?")
    elif response == "left" or response == "Left" :
        print("You got out of the lonely forest\n🕺🏿")
        break
    else :
        print("Invalid input, please try again.")

print("You got out of the lonely forest\n🕺🏿")
