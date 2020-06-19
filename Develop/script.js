var currentHour24Time = parseInt(moment().format("HH"))
console.log(parseInt(moment().format("HH")))
// var currentHour24Time = 15;  <-- this will test the clock to ensure it works
var currentDate = moment().format("dddd, MMMM Do, YYYY <br><br> hh:mm a");
$("#currentDay").append(currentDate)



// console.log(moment().format("ha"));

// var textAreas = $(".col-8")
// console.log(textAreas)

// var buttons =$(".savBtn")
// console.log(buttons)


//loop for checking time and displaying textArea color

for (i = 9; i <= 17 ; i++) {
    checkTime([i]);
}
    function checkTime(z) {
    if(currentHour24Time < z) {
        $("#" + z + "h").addClass("future");
    } else if (currentHour24Time > z) {
    $("#" + z + "h").addClass("past");
    } else {
        $("#" + z + "h").addClass("present");
    }
    //not sure why this makes my col-8 look like a col-2


//loop for saving textArea input when clicked
$("button").click(function(){
for (i=0; i<buttons.length; i++) {
     if(buttons[i]){};
}
});
     //if id of save button is clicked, save that text area's content to local storage



//if(textAreas[i].attributes[0].nodeValue === (moment().format("ha"))) {
          //console.log("true")
          //(textArea+i).attr("class","past")
     //} from underneath the loop w


//if current time < block time, color = green
//if current time = block time, color = red
//if current time > block tim, coloe = grey

//to save to local storage... localStorage.setItem("todo", textArea[i].textContent) 
    }