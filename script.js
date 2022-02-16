/* For changing values of the slider */

let slider = document.getElementById("myRange");
let output = document.getElementById("goal-el");

 
slider.oninput = function () {
    
    output.innerHTML = this.value 

}

/* Attendance percentage */

let present = document.querySelector("#class-attended-el");
let absent = document.querySelector("#bunked-el");
let bunksAvailable = document.getElementById("bunks-counter");
let attendancePercent = document.getElementById("present-attendance-el");

present.addEventListener("change", () => {
     computeAttendance();
});

absent.addEventListener("change", () => { 
     computeAttendance();
});

slider.addEventListener("change", () => {
    computeAttendance();
});

let computeAttendance = () => {
    const a = parseInt(present.value);
    const b = parseInt(absent.value);
    
    let computeBunks = () => {
            const r = parseInt(slider.value);
            const e = (r/100 * (a+b));
            const f = (a+b) - e;
            bunksAvailable.innerHTML = f.toFixed(0);
            
            console.log(f)
        }

    if(a && b){
        console.log(a);
        console.log(b);
     
        const c = (a / (a+b))*100;
        
        attendancePercent.innerHTML = c.toFixed(2);
        computeBunks();
    }
  
       
} 



