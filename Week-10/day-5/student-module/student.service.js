"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = getGrade;
exports.getTopper = getTopper;
const constants_1 = require("./constants");
function getGrade(marks) {
    if (marks >= 95)
        return "A";
    else if (marks >= 80)
        return "B";
    else if (marks >= constants_1.PASS_MARKS)
        return "C";
    else
        return "Fail";
}
function getTopper(students) {
    let topper = students[0];
    for (let student of students) {
        if (student.marks > topper.marks) {
            topper = student;
        }
    }
    return topper;
}
