const facebook = () => {
    let count = 0;
    let target = document.getElementById("facebook").innerHTML;
    let interval = setInterval(() => {
        document.getElementById("facebook").innerHTML = count;
        count++;
        if (count > Number(target)) {
            clearInterval(interval);
            instagram();
        }
    }, 1);
}

const instagram = () => {
    let count = 0;
    let target = document.getElementById("instagram").innerHTML;
    let interval = setInterval(() => {
        document.getElementById("instagram").innerHTML = count;
        count++;
        if (count > Number(target)) {
            clearInterval(interval);
            linkedin();
        }
    }, 1);
}

const linkedin = () => {
    let count = 0;
    let target = document.getElementById("linkedin").innerHTML;
    let interval = setInterval(() => {
        document.getElementById("linkedin").innerHTML = count;
        count++;
        if (count > Number(target)) {
            clearInterval(interval);
        }
    }, 1);
}

facebook();