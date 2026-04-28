// base class

class Employee{
    public id: number;
    protected name:string;
    private salary:number;

    constructor(id: number, name: string, salary: number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(amount:number):void {
          if (amount > 0) {
            this.salary = amount;
          } else {
            console.log("Enter a valid salary grater than 0");
            
          }
    }

    dispalyDetails():void{
     console.log(`Emp id : ${this.id}`);
     console.log(`Emp name : ${this.name}`);
     console.log(`Salary :${this.salary}`); 
}
}


// derived class

class Manager extends Employee{
    teamSize : number;

    constructor(id:number , name:string, salary:number , teamSize: number ){
           super(id, name, salary);
           this.teamSize = teamSize; 
    }

    //method overriding

    dispalyDetails(): void {
        console.log("------Manager Details-----");
        console.log(`Employee id : ${this.id}`);
        console.log(`Manager name : ${this.name}`);
        console.log(`Salary : ${this.getSalary()}`);
        console.log(`Team size : ${this.teamSize}`);
    }
}

//objects

const emp1 = new Employee(101,"Yogi",89000);
const manager1 = new Manager(102,"Bhav",95000,5);

console.log("----emp details-----");
emp1.dispalyDetails();

console.log("updated salary");
emp1.setSalary(98000);
console.log(emp1.getSalary());

manager1.dispalyDetails();





