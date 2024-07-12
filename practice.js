//variable foir date picker

var datePicker = document.getElementById("datePicker");
var choosedate = document.getElementById("chooseDate");

//variable for printing values

var ageYear = document.getElementById("ageYear");
var ageMonth = document.getElementById("ageMonth");
var ageDays = document.getElementById("ageDays");
var ageHours = document.getElementById("ageHours");
var ageSeconds = document.getElementById("ageSeconds");
var ageMiliseconds = document.getElementById("ageMiliseconds");

datePicker.addEventListener("change", function(){
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US',options);

    chooseDate.innerHTML = "DOB : " + " " + DOB;

    var miliSeconds_Btw_DOB = Date.parse(DOB);
    var miliSeconds_Btw_Now = Date.now();

    var age_in_MiliSeconds = miliSeconds_Btw_Now - miliSeconds_Btw_DOB;
    // console.log(age_in_MiliSeconds);

    var miliseconds = age_in_MiliSeconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    var years= Math.round(miliseconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(miliseconds/hour);
    var seconds = Math.round(miliseconds/second);

    ageYear.innerHTML = years
    ageMonth.innerHTML = months
    ageDays.innerHTML = days
    ageHours.innerHTML = hours
    ageSeconds.innerHTML = seconds
    ageMiliseconds.innerHTML = miliseconds;

    document.querySelector('.age-calc').classList.add('expand');
})
