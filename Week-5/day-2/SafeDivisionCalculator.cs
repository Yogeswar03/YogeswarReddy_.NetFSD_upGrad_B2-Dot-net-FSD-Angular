using System;

class Calculator
{
    public void Divide(int numerator, int denominator)
    {
        try
        {
            int result = numerator / denominator;
            Console.WriteLine($"Result: {result}");
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Error: Cannot divide by zero");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected Error: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Operation completed safely");
        }
    }
}

class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        Console.Write("Enter Numerator: ");
        int numerator = int.Parse(Console.ReadLine());

        Console.Write("Enter Denominator: ");
        int denominator = int.Parse(Console.ReadLine());

        calc.Divide(numerator, denominator);

        // Program continues execution
        Console.WriteLine("\nProgram is still running...");
    }
}