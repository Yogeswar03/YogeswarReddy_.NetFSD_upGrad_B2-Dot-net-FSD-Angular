using AppDemo.Models;

namespace AppDemo.DataAccess
{
    public class ContactImplementation : IContactRepo<ContactInfo>
    {
        public static List<ContactInfo> contacts = new List<ContactInfo>
        {
             new ContactInfo{ ContactId=1,FirstName="Yogi",LastName="Ch",CompanyName="Cognizant",EmailId="yogi@gmail.com",MobileNo=6745366477,Designation="Program  Analyst Trainee" },
             new ContactInfo{ ContactId=2,FirstName="Bhavitha",LastName="M",CompanyName="Cognizant",EmailId="bhavitha@gmail.com",MobileNo=6437643436,Designation="Trainee Analyst" },
             new ContactInfo{ ContactId=3,FirstName="Tarun",LastName="K",CompanyName="wipro",EmailId="tarun@gmail.com",MobileNo=7654376456,Designation="Developer" }
        };
        public bool AddContact(ContactInfo contact)
        {
            contacts.Add(contact);
            return true;
        }

        public ContactInfo GetContactById(int id)
        {
            var contact = contacts.FirstOrDefault(con => con.ContactId.Equals(id));
            return contact;
        }

        public List<ContactInfo> ShowContacts()
        {
            return contacts;
        }
    }
}
