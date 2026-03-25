using System;
using System.IO;
using System.Text;

namespace FileHandlingApp
{
    class Program
    {
        static void Run()
        {
            string filePath = "log.txt";

            try
            {
                Console.Write("Enter your message: ");
                string? message = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(message))
                {
                    Console.WriteLine("Invalid message.");
                    return;
                }

                byte[] data = Encoding.UTF8.GetBytes(message + Environment.NewLine);

                using (FileStream fs = new FileStream(filePath, FileMode.Append, FileAccess.Write))
                {
                    fs.Write(data, 0, data.Length);
                }

                Console.WriteLine("Message written successfully!");
            }
            catch (UnauthorizedAccessException)
            {
                Console.WriteLine("Error: No permission to access file.");
            }
            catch (IOException ex)
            {
                Console.WriteLine("File Error: " + ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unexpected Error: " + ex.Message);
            }
            finally
            {
                Console.WriteLine("Operation completed.");
            }

            Console.ReadLine();
        }
    }
}