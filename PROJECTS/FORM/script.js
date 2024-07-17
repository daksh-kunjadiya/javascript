let employes = [];

let uimaker = () => {
    document.getElementById('tbody').innerHTML = "";
    for (let i = 0; i < employes.length; i++) {
        let tr = document.createElement('tr');
        let td0 = document.createElement("td");
        td0.innerHTML = i + 1;
        let td1 = document.createElement('td');
        td1.innerHTML = employes[i].employename;
        let td2 = document.createElement('td');
        td2.innerHTML = employes[i].email;
        let td3 = document.createElement('td');
        td3.innerHTML = employes[i].department;
        let td4 = document.createElement('td');
        td4.innerHTML = employes[i].experince;
        let td5 = document.createElement('td');
        // if (experince.length > 0) {
            if (employes[i].experince > 5) {
                td5.innerHTML = "senior";
            }
            else {
                td5.innerHTML = "junior";
            }
        // }
        let td6 = document.createElement('td');
        td6.innerHTML = employes[i].salary;
        let td7 = document.createElement("td");
        td7.innerHTML = "remove";
        td7.addEventListener("click", () => handledelete(i));
        tr.append(td0, td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("tbody").append(tr);
        document.getElementById("Delete").addEventListener("click", () => handledeleteall(i));
    }
}

const handledelete = (index) => {
    employes.splice(index, 1);
    uimaker();
}
const handledeleteall = (index) => {
    employes.splice(index);
    uimaker();
}
const handledata = (e) => {
    e.preventDefault();
    let employename = document.getElementById('employename').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    let experince = document.getElementById('experince').value;
    let salary = document.getElementById('salary').value;
    let employe = {
        employename: employename,
        email: email,
        department: department,
        experince: experince,
        salary: salary
    }
    employes.push(employe);
    uimaker();
}

document.getElementById("employedata").addEventListener("submit", handledata);
