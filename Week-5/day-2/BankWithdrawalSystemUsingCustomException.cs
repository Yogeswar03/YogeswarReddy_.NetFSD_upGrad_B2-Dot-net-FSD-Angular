using System;

// Custom Exception
public class InsufficientBalanceException : Exception
{
    public InsufficientBalanceException(string message) : base(message)
    {
    }
}

// BankAccount Class
class BankAccount
{
    private double balance;

    public BankAccount(double initialBalance)
    {
        balance = initialBalance;
    }

    public void Withdraw(double amount)
    {
        if (amount > balance)
        {
            // Throw custom exception
            throw new InsufficientBalanceException("Withdrawal amount exceeds available balance");
        }

        balance -= amount;
        Console.WriteLine($"Withdrawal successful! Remaining Balance: {balance}");
    }
}

class Program
{
    static void Main()
    {
        Console.Write("Enter Account Balance: ");
        double balance = double.Parse(Console.ReadLine());

        Console.Write("Enter Withdrawal Amount: ");
        double amount = double.Parse(Console.ReadLine());

        BankAccount account = new BankAccount(balance);

        try
        {
            account.Withdraw(amount);
        }
        catch (InsufficientBalanceException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected Error: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Transaction process completed.");
        }

        Console.WriteLine("Program continues safely...");
    }
}