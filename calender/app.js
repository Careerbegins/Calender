function digitalClock(){
    let datefunction = new Date()
    let hours = datefunction.getHours()
    let minutes = datefunction.getMinutes()
    let seconds = datefunction.getSeconds()
    let timeFormat='AM'
    timeFormat = hours >= 12 ?'PM' : 'AM'
    hours = hours == 0 ? 12 : hours
    hours = hours > 12 ? hours - 12 : hours
    hours = hours < 10 ? '0' + hours : hours

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat
}
setInterval(digitalClock, 1000)


var dt = new Date();
function renderDate(){

dt.setDate(1);
var day = dt.getDay();
console.log(dt.getDay());

var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

var today = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById('date').innerHTML = dt.toDateString();   
document.getElementById('month').innerHTML = months[dt.getMonth()];

var cells = "";

for(x = day; x > 0; x--){
    cells += "<div class='prev_date'>" + ( prevDate - x + 1) + "</div>" ;
}

for(i = 1; i <= endDate; i++){   
  if (i == today.getDate() && dt.getMonth() == today.getMonth()){
       cells += "<div class='today'>" + i + "</div>";
  } else {
        cells += "<div>" + i + "</div>";
   }
 }

document.getElementsByClassName("dates")[0].innerHTML = cells;
}
function moveDate(move) {
    if (move == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
        renderDate();
    } else {
        dt.setMonth(dt.getMonth() + 1);
        renderDate();
    }
}