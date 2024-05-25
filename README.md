
# 🎰 Windows 32 Russian Roulette    

Welcome to the Windows 32 Russian Roulette! This is a game of chance where you pick a chamber, and if you're unlucky, you might end up deleting critical system files from your Windows 32 directory.

## References
- "The Web Application Hacker's Handbook" de Dafydd Stuttard e Marcus Pinto
- "Hacking: The Art of Exploitation" de Jon Erickson
- "Gray Hat Python: Python Programming for Hackers and Reverse Engineers" de Justin Seitz
  
## Languages
<div align="left">
  <img src="https://skillicons.dev/icons?i=cpp" height="38" alt="cplusplus logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="38" alt="javascript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=ruby" height="38" alt="ruby logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=cs" height="38" alt="csharp logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=go" height="38" alt="go logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=py" height="38" alt="python logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=java" height="38" alt="java logo"  />
</div>
  
## Explanations
If you open Visual Studio Code (or any other code editor) as an *administrator* and run this code on a Windows system, the code may delete the ```"C:\Windows\System32"``` directory. Here's what you should consider:

**Administrator Permissions:** Running the code editor as an administrator gives the program elevated permissions, allowing it to make changes to protected areas of the system, such as the "C:\Windows\System32" directory. 

**User Account (UAC):** When you open VS Code as an administrator, you have already passed UAC verification, which means the program has the necessary permissions to perform actions that would normally be blocked.Windows 

**File Protection (WFP):** Although WFP may attempt to restore critical files automatically, deleting the entire directory may cause damage before WFP can restore the files. 

**Locking Files in Use:** Many files in the "System32" directory are in use by the system and may not be deleted immediately. However, attempting to delete the entire directory may cause unpredictable behavior and corrupt the system. 

Running this code with administrator permissions is extremely dangerous and may result in the deletion of critical system files, rendering Windows unusable. You would need to reinstall the operating system to restore normal functionality.

## Disclaimer

**Warning:** This game is provided purely for educational and entertainment purposes. Deleting critical system files can cause irreparable damage to your system, leading to data loss and rendering your computer inoperable.
**DO NOT RUN THIS CODE ON A REAL SYSTEM.** Running this program can have severe consequences for your computer and personal data.

## ⚠ How to Play
```
1. Run the program.
2. Pick a chamber number between 1 and 6.
3. Pray it's not the chamber with the bullet (i.e., the randomly chosen number).
```

