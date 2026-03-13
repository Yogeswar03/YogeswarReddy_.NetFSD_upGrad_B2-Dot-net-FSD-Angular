using System;

class EmployeeBonusCalculator
{
    static void Main()
    {
        Console.Write("Enter Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Salary: ");
        double salary = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Experience (years): ");
        int experience = Convert.ToInt32(Console.ReadLine());

        double bonusRate;

        // Using if-else for bonus rule
        if (experience < 2)
        {
            bonusRate = 0.05;
        }
        else if (experience <= 5)
        {
            bonusRate = 0.10;
        }
        else
        {
            bonusRate = 0.15;
        }

        double bonus = salary * bonusRate;

        // Using ternary operator for final salary calculation
        double finalSalary = bonus > 0 ? salary + bonus : salary;

        Console.WriteLine("\nEmployee: " + name);
        Console.WriteLine("Bonus: " + bonus.ToString("F2"));
        Console.WriteLine("Final Salary: " + finalSalary.ToString("F2"));
    }
}