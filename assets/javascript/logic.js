var buttonTwoClick = false;
var column1Row1Click = false;

$("#column1-button").click(function(){
    $("#popper").removeClass("popper-inactive");
    $("#main-window").removeClass("main-window-active");
    $("#main-window").addClass("main-window-inactive");
    $("#sidebar").removeClass("sidebar-active");
    $("#sidebar").addClass("sidebar-inactive");
    // $("#column1-button").removeClass("column1-button-active");
    // $("#column1-button").addClass("column1-button-inactive");
    $("#column1-button").css("background-color", "#999999");
    $("#column2-button").removeClass("column2-button-active");
    $("#column2-button").addClass("column2-button-inactive");
    $("body").addClass("main-window-inactive");
});

$("#popper-x").click(function(){
    $("#popper").addClass("popper-inactive");
    $("#main-window").removeClass("main-window-inactive");
    $("#main-window").addClass("main-window-active");
    $("#sidebar").removeClass("sidebar-inactive");
    $("#sidebar").addClass("sidebar-active");
    // $("#column1-button").removeClass("column1-button-intive");
    // $("#column1-button").addClass("column1-button-active");
    $("#column1-button").css("background-color", "white");
    $("#column2-button").removeClass("column2-button-inactive");
    $("#column2-button").addClass("column2-button-active");
    $("body").removeClass("main-window-inactive");
});

$("#popper-arrow").click(function(){
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


$("#column2-button").click(function(){
    if (buttonTwoClick === false) {
        $("#column1-row1-text2").html("<input id='column1-row1-input' style='height: 6px; position: relative; top:0px;' type='text' name='firstname' placeholder='First Value I'><i id='column1-row1-x' class='fa fa-times' aria-hidden='true'></i>");
        buttonTwoClick = true;
    }
    else if(buttonTwoClick === true) {
        $("#column1-row1-text2").html("<p>First value</p>");  
        buttonTwoClick = false;
    }
});

$("#column1-row1").click(function(){
    $("#column1-row1").addClass("column1-row1-active");
    if(column1Row1Click === false){
        $("#pencil").css("visibility", "visible");
        column1Row1Click = true;
    }
    else if(column1Row1Click === true){
        $("#pencil").css("visibility", "hidden");
        column1Row1Click = false;
    }
});

