let students = JSON.parse(localStorage.getItem("students")) || [];

const remove = (index) => {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    mapper(students);
};
const mapper = (data) => {
    document.getElementById("stduentList").innerHTML = "";
    data.forEach((ele, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.name;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.course;
        let td3 = document.createElement("td");
        td3.innerHTML = ele.fees;
        let td4 = document.createElement("td");
        td4.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        td4.addEventListener("click", () => remove(i));
        tr.append(td1, td2, td3, td4);
        document.getElementById("stduentList").append(tr);
    });
};
const handleSort = (orderBy) => {
    let sortedStudents;
    if (orderBy === "lth") {
        sortedStudents = [...students].sort((a, b) => a.fees - b.fees);
    } else {
        sortedStudents = [...students].sort((a, b) => b.fees - a.fees);
    }
    mapper(sortedStudents);
};
document.getElementById("sortOptions").addEventListener("change", (event) => { handleSort(event.target.value); });
const search = (e) => {
    e.preventDefault();
    let searchValue = document.getElementById("search").value;
    let filteredStudents = students.filter((ele) =>
        ele.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    mapper(filteredStudents);
};

