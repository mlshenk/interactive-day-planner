var currentHour24Time = parseInt(moment().format("HH"))
console.log(parseInt(moment().format("HH")))
// var currentHour24Time = 20; //this will test the clock to ensure it works
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
        storageArray.push($(this).attr("id")); 
        localStorage.setItem($(this).attr("id"), $(this).prev().val());
      
    });
    var populateTaskList = function (){
        $("#9h").val(localStorage.getItem("9") || []);
        $("#10h").val(localStorage.getItem("10") || []);
        $("#11h").val(localStorage.getItem("11") || []);
        $("#12h").val(localStorage.getItem("12") || []);
        $("#13h").val(localStorage.getItem("1") || []);
        $("#14h").val(localStorage.getItem("2") || []);
        $("#15h").val(localStorage.getItem("3") || []);
        $("#16h").val(localStorage.getItem("4") || []);
        $("#17h").val(localStorage.getItem("5") || []);
    }
    populateTaskList();
    console.log(storageArray);
 