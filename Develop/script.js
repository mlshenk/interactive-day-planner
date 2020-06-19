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
  
    };
    
    var storageArray = JSON.parse(localStorage.getItem("user-input")) || [];
    $("button").click(function() {
        for (let i = 0; i < 9; i++) {
            storageArray.push($("textarea")[i].value); //how do we do this so we don't push back into the array (since I'm not trying to save old data??)
        }
        localStorage.setItem("user-input", JSON.stringify(storageArray));
    })
    console.log(storageArray);
 