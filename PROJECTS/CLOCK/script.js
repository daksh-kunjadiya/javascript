
const time = document.getElementById("time");
const AmPm = document.getElementById("AmPm");
const dateElement = document.getElementById("date");

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    } else {
        hours = hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }

    if (date.getHours() >= 12) {
        AmPm.innerHTML = "PM";
    } else {
        AmPm.innerHTML = "AM";
    }

    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfMonth = date.getDate();
    const weekDay = days[date.getDay()];
    const month = months[date.getMonth()];
    dateElement.innerHTML = `${weekDay}, ${dayOfMonth} ${month}`;
}, 1000)