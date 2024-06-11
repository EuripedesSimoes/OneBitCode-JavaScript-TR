const hrs = document.getElementById('hora_p')
const mins = document.getElementById('minuto_p')
const secs = document.getElementById('segundo_p')

const clockwork = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    hrs.textContent = hr;
    mins.textContent = min;
    secs.textContent = sec;
})