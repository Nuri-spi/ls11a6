

const weekContainer = document.querySelector('.wrap-week');
const watch = document.querySelector('.wrap-watch');

const week = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"

]

    const d = new Date();
    const currenWeekIndex = d.getDay()
    console.log(currenWeekIndex, '-index week')
weekContainer.innerHTML = week.map( (w, index) => {
    let klass = "" //calss bosh emes
    if (currenWeekIndex === index) {
        klass = " active"
    }else{
        klass = " "
    }
    return`<h4 class="${klass}"> ${w}</h4>`
}).join("");


setInterval(showWatch, 1000);

function showWatch() {
    const d = new Date();
    watch.innerHTML ='<h2>' + d.getHours() + ':' + d.getMinutes()+ ':' + d.getSeconds()+'</h2>'
}

