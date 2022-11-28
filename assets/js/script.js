// Today's date is displayed at the top of the calendar
// Use dayjs since momentjs is deprecated
var nowToday = dayjs().format("dddd, MMMM D YYYY")
$("#currentDay").text(nowToday);

// Click the save button then save text in local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();

    var time = $(this).siblings(".hour").text();
    var workplan = $(this).siblings(".workplan").val();

    localStorage.setItem(time, workplan);
  });

// grabs hour from each time slot and compares it to current time
// so that each time block is color-coded to indicate whether it's in the past, present, or future
function timeBlock() {
    var currentHour =  dayjs().hour();
    
    $(".time-block").each(function() {
        var workHour = parseInt($(this).attr("id"));
        if (workHour > currentHour) {
            $(this).addClass("future");
        } else if (workHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
timeBlock();
