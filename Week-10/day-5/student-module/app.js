"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_service_1 = require("./student.service");
const utils_1 = require("./utils");
const students = [
    { id: 1, name: "yogi", marks: 94 },
    { id: 2, name: "sravs", marks: 98 },
    { id: 3, name: "bhav", marks: 87 }
];
console.log("----formatted name-----");
students.forEach(s => {
    console.log((0, utils_1.formatName)(s.name));
});
// grades
console.log("\n-----Grades-----");
students.forEach(s => {
    console.log(`${s.name}: ${(0, student_service_1.getGrade)(s.marks)}`);
});
// avg marks
console.log("\n------ avg marks-----");
console.log((0, utils_1.calculateAverage)(students));
// topper
console.log("\n------topper------");
console.log((0, student_service_1.getTopper)(students));
