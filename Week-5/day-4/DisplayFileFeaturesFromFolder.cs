using System;
using System.IO;

namespace FileHandlingApp
{
    class Program
    {
        static void Run()
        {
            Console.Write("Enter folder path: ");
            string folderPath = Console.ReadLine();

            try
            {
                // Check if directory exists
                if (!Directory.Exists(folderPath))
                {
                    Console.WriteLine("Error: Directory does not exist.");
                    return;
                }

                // Get all files
                string[] files = Directory.GetFiles(folderPath);

                Console.WriteLine("\nFile Details:\n");

                int count = 0;

                foreach (string file in files)
                {
                    FileInfo fileInfo = new FileInfo(file);

                    Console.WriteLine($"Name : {fileInfo.Name}");
                    Console.WriteLine($"Size : {fileInfo.Length} bytes");
                    Console.WriteLine($"Created On : {fileInfo.CreationTime}");
                    Console.WriteLine("-----------------------------------");

                    count++;
                }

                Console.WriteLine($"\nTotal Files: {count}");
            }
            catch (UnauthorizedAccessException)
            {
                Console.WriteLine("Error: Access denied to the folder.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unexpected Error: " + ex.Message);
            }

            Console.ReadLine();
        }
    }
}