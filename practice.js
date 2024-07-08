//variable foir date picker

var datePicker = document.getElementById("datePicker");
var choosedate = document.getElementById("chooseDate");

//variable for printing values

var ageyear = document.getElementById("ageYear");
var agemonth = document.getElementById("ageMonth");
var ageday = document.getElementById("ageDay");
var agehour = document.getElementById("ageHour");
var ageSeconds = document.getElementById("ageSeconds");
var ageMiliseconds = document.getElementById("ageMiliseconds");

datePicker.addEventListener("change", function(){
    alert(this.value);
})