import { Student } from "./student.model";
import { getGrade, getTopper } from "./student.service";
import { formatName,calculateAverage } from "./utils";

const students : Student[] = [
    {id:1, name:"yogi",marks:94},
    {id:2, name:"sravs",marks:98},
    {id:3, name:"bhav",marks:87}
]

console.log("----formatted name-----");
students.forEach(s =>{
    console.log(formatName(s.name));
    
});

// grades

console.log("\n-----Grades-----");
students.forEach(s =>{
    console.log(`${s.name}: ${getGrade(s.marks)}`);
    
});

// avg marks

console.log("\n------ avg marks-----");
console.log(calculateAverage(students));

// topper
console.log("\n------topper------");
console.log(getTopper(students));






