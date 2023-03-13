var currentDay = $("#currentDay");
var nineAm = $("#9am");
var TenAm = $("#10am");
var ElevenAm = $("#11am");
var NoonPm = $("#12pm");
var ThirteenHundredPm = $("#13pm");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () { 
var giveKey = $(this).parent().attr("id");
var textvalue =$(this).siblings(".description").val();
    localStorage.setItem(giveKey,textvalue)
  })
  $("#9 .description").val (localStorage.getItem("9"));
  $("#10 .description").val (localStorage.getItem("10"));
  $("#11 .description").val (localStorage.getItem("11"));
  $("#12 .description").val (localStorage.getItem("12"));
  $("#13 .description").val (localStorage.getItem("13"));

  function hourUpdater() {
console.log(dayjs().hour());
$(".time-block").each(function () {
  var divHour = $(this).attr("id");
  if (divHour <dayjs().hour() ) {
    $(this).addClass("past");
  } else if (divHour >dayjs().hour() ) {
    $(this).addClass("future");

  }else if (divHour == dayjs().hour() ) {
    $(this).addClass("present");
  }
 
})

  }
hourUpdater();



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
 

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to get the
  // attribute of each time-block be used to do this?
  
  
  //
  // TODO: Add code to display the current date in the header of the page.
   currentDate = dayjs().format("dddd, MMMM D, YYYY, HH:mm a");
  $("#currentDay").text(currentDate);
  dayjs().hour(); 

  



    

});
