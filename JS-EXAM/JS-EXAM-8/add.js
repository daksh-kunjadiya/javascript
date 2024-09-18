let students = JSON.parse(localStorage.getItem("students")) || [];
const handleSubmit = (e) => {
    e.preventDefault();
    let student = {
        name: document.querySelector(".name").value,
        fees: document.querySelector(".fees").value,
        course: document.querySelector(".course").value,
    };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
};
document.getElementById("studentData").addEventListener("submit", handleSubmit);