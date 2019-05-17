//Global variables used later in the code to add functionality
var buttonTwoClick = false;
var buttonThreeClick = false;
var buttonFourClick = false;
var buttonFiveClick = false;
var buttonSixClick = false;
var buttonSevenClick = false;

var column1Row1Click = false;

//Series of jQuery commands that activate after clicking the "#column1-button"
$("#column1-button").click(function () {
    $("#popper").removeClass("popper-inactive");
    $("#main-window").removeClass("main-window-active");
    $("#main-window").addClass("main-window-inactive");
    $("#sidebar").removeClass("sidebar-active");
    $("#sidebar").addClass("sidebar-inactive");
    $("#column1-button").css("background-color", "#999999");
    $("#column2-button").removeClass("column2-button-active");
    $("#column2-button").addClass("column2-button-inactive");
    $("body").addClass("main-window-inactive");
});

//Series of jQuery commands that activate after clicking the "#popper-x" element
$("#popper-x").click(function () {
    $("#popper").addClass("popper-inactive");
    $("#main-window").removeClass("main-window-inactive");
    $("#main-window").addClass("main-window-active");
    $("#sidebar").removeClass("sidebar-inactive");
    $("#sidebar").addClass("sidebar-active");
    $("#column1-button").css("background-color", "white");
    $("#column2-button").removeClass("column2-button-inactive");
    $("#column2-button").addClass("column2-button-active");
    $("body").removeClass("main-window-inactive");
});

//Series of jQuery commands that activate after clicking the "#popper-arrow" element
$("#popper-arrow").click(function () {
    $("#popper").addClass("popper-inactive");
    $("#main-window").removeClass("main-window-inactive");
    $("#main-window").addClass("main-window-active");
    $("#sidebar").removeClass("sidebar-inactive");
    $("#sidebar").addClass("sidebar-active");
    $("#column1-button").removeClass("column1-button-active");
    $("#column1-button").addClass("column1-button-inactive");
    $("#column1-button").css("background-color", "white");
    $("#column2-button").removeClass("column2-button-inactive");
    $("#column2-button").addClass("column2-button-active");
    $("body").removeClass("main-window-inactive");
});

//Series of jQuery commands that activate after clicking the "#column2-button" element
$("#column2-button").click(function () {
    //Beginning of an if/else statement.  The statement checks the status of the buttonTwoClick variable
    //If the variable is false, it changes the html to include an input field, and then changes
    //the variable to true.  If is is true, it changes the html to simply display a line of text,
    //and then changes the value of buttonTwoClick to false
    if (buttonTwoClick === false) {
        $("#column1-row1-text2").html("<input id='column1-row1-input' style='height: 6px; position: relative; top:0px;' type='text' name='firstname' placeholder='First Value I'><i id='column1-row1-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonTwoClick = true;
    }
    else if (buttonTwoClick === true) {
        $("#column1-row1-text2").html("<p>First value</p>");
        buttonTwoClick = false;
    }
});

$("#column1-row1").click(function(){
    if (buttonTwoClick === false) {
        $("#column1-row1-text2").html("<input id='column1-row1-input' style='height: 6px; position: relative; top:0px;' type='text' name='firstname' placeholder='First Value I'><i id='column1-row1-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonTwoClick = true;
    }
    else if (buttonTwoClick === true) {
        $("#column1-row1-text2").html("<p>First value</p>");
        buttonTwoClick = false;
    }
})

$("#column1-row2").click(function(){
    if (buttonThreeClick === false) {
        $("#column1-row2-text2").html("<input id='column1-row2-input' style='width:110px; height: 22px; position: relative; top:-5px; right: 10px;' type='text' name='firstname' placeholder='Value'><i id='column1-row2-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonThreeClick = true;
    }
    else if (buttonThreeClick === true) {
        $("#column1-row2-text2").html("<p>Value</p>");
        buttonThreeClick = false;
    }
})

$("#column1-row3").click(function(){
    if (buttonFourClick === false) {
        $("#column1-row3-text2").html("<input id='column1-row3-input' style='width:110px; height: 22px; position: relative; top:-5px; right: 10px;' type='text' name='firstname' placeholder='Value'><i id='column1-row2-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonFourClick = true;
    }
    else if (buttonFourClick === true) {
        $("#column1-row3-text2").html("<p>Value</p>");
        buttonFourClick = false;
    }
})

$("#column2-row1").click(function(){
    if (buttonFiveClick === false) {
        $("#column2-row1-text2").html("<input id='column2-row1-input' style='width:110px; height: 22px; position: relative; top:-5px; right: 10px;' type='text' name='firstname' placeholder='Value'><i id='column1-row2-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonFiveClick = true;
    }
    else if (buttonFiveClick === true) {
        $("#column2-row1-text2").html("<p>Value</p>");
        buttonFiveClick = false;
    }
})

$("#column2-row2").click(function(){
    if (buttonSixClick === false) {
        $("#column2-row2-text2").html("<input id='column2-row2-input' style='width:110px; height: 22px; position: relative; top:-5px; right: 10px;' type='text' name='firstname' placeholder='Value'><i id='column1-row2-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonSixClick = true;
    }
    else if (buttonSixClick === true) {
        $("#column2-row2-text2").html("<p>Value</p>");
        buttonSixClick = false;
    }
})

$("#column2-row3").click(function(){
    if (buttonSevenClick === false) {
        $("#column2-row3-text2").html("<input id='column2-row3-input' style='width:110px; height: 22px; position: relative; top:0px; right: 10px;' type='text' name='firstname' placeholder='Value'><i id='column1-row2-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonSevenClick = true;
    }
    else if (buttonSevenClick === true) {
        $("#column2-row3-text2").html("<p>Value</p>");
        buttonSevenClick = false;
    }
})
//Series of jQuery commands that activate after hovering over the different column rows.
// Designed to display a pencil icon depending on the user interaction
$("#column1-row1").mouseover(function () {
    $("#pencil1").css("visibility", "visible");
});
$("#column1-row1").mouseout(function () {
    $("#pencil1").css("visibility", "hidden");
});
$("#column1-row2").mouseover(function () {
    $("#pencil2").css("visibility", "visible");
});
$("#column1-row2").mouseout(function () {
    $("#pencil2").css("visibility", "hidden");
});
$("#column1-row3").mouseover(function () {
    $("#pencil3").css("visibility", "visible");
});
$("#column1-row3").mouseout(function () {
    $("#pencil3").css("visibility", "hidden");
});
$("#column2-row1").mouseover(function () {
    $("#pencil4").css("visibility", "visible");
});
$("#column2-row1").mouseout(function () {
    $("#pencil4").css("visibility", "hidden");
});
$("#column2-row2").mouseover(function () {
    $("#pencil5").css("visibility", "visible");
});
$("#column2-row2").mouseout(function () {
    $("#pencil5").css("visibility", "hidden");
});
$("#column2-row3").mouseover(function () {
    $("#pencil6").css("visibility", "visible");
});
$("#column2-row3").mouseout(function () {
    $("#pencil6").css("visibility", "hidden");
});


$("#column1-row1-input").click(function(event){
    event.preventDefault();
  });