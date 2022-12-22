let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm="AM"


    if(h > 12){
        h = h-12
        ampm = "PM"
    // alert(m)

    }
  h = h < 10 ? "0" + h  : h;
  m = m < 10 ? "0" + m  : m;
  s = s < 10 ? "0" + s  : s;
  // console.log("houe:",h , "min:",m, "second :",s, "ampm : ",ampm)
    hourEl.innerText = h;
    minuteEl.innerText= m;
    secondEl.innerText = s;
    ampmEl.innerText=ampm;



}
setInterval(()=>{
  console.log("hi")
  updateClock();
}, 1000)