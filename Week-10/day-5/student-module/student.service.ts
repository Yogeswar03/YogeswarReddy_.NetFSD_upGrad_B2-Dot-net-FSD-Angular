import { Student } from "./student.model";
import { PASS_MARKS } from "./constants";

export function getGrade(marks:number): string{
       if(marks >= 95) return "A";
       else if(marks >= 80) return "B";
       else if(marks >= PASS_MARKS) return "C";
       else return "Fail";
}

export function getTopper(students:Student[]):Student{
        let topper = students[0];

        for(let student of students){
            if(student.marks >topper.marks){
                topper = student;
            }
        }
          return topper; 
}