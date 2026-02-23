
var student = {
    name: "Rahul Sharma",
    rollNo: 101,
    marks: 85
};

function updateStudentProfile(studentObj) {
    var profileDiv = document.getElementById("profileCard");

    profileDiv.innerHTML =
        "<h3>Student Profile</h3>" +
        "<p>Name: " + studentObj.name + "</p>" +
        "<p>Roll No: " + studentObj.rollNo + "</p>" +
        "<p>Marks: " + studentObj.marks + "</p>";
}

function updateMarks(newMarks) {
    student.marks = newMarks;   
    updateStudentProfile(student);  
}

updateStudentProfile(student);

document.getElementById("updateBtn").addEventListener("click", function () {
    var newMarksValue = document.getElementById("marksInput").value;
    updateMarks(newMarksValue);
});