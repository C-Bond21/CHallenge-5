let currentDate = moment().format("dddd") + " " + moment().format("DO MMM YYYY");
let currentHour = moment().format("h:mm a");

let nine = $("#9am");
let ten = $("#10am");
let eleven = $("#11am");
let twelve = $("#12pm");
let one = $("#1pm");
let two = $("#2pm");
let three = $("#3pm");
let four = $("#4pm");
let five = $("#5pm");
let six = $("#6pm");
let seven = $("#7pm");



function initPage() {

    console.log("Hour " + hour);

    let init9 = JSON.parse(localStorage.getItem("09:00 am")); nine.val(init9);
  
    let init10 = JSON.parse(localStorage.getItem("10:00 am")); ten.val(init10);
    
    let init11 = JSON.parse(localStorage.getItem("11:00 am")); eleven.val(init11);
    
    let init12 = JSON.parse(localStorage.getItem("12:00 pm")); twelve.val(init12);
    
    let init1 = JSON.parse(localStorage.getItem("01:00 pm")); one.val(init1);
    
    let init2 = JSON.parse(localStorage.getItem("02:00 pm")); two.val(init2);
    
    let init3 = JSON.parse(localStorage.getItem("03:00 pm")); three.val(init3);
   
    let init4 = JSON.parse(localStorage.getItem("04:00 pm")); four.val(init4);
    
    let init5 = JSON.parse(localStorage.getItem("05:00 pm")); five.val(init5);
    
    let init6 = JSON.parse(localStorage.getItem("06:00 pm")); six.val(init6);
    
    let init7 = JSON.parse(localStorage.getItem("07:00 pm")); seven.val(init7);
  } 
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-row").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  })
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage() })