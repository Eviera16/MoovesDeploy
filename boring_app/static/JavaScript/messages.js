$(document).ready(function(){
    $(".hiddenJs").hide();


    var fontType = $(".hiddenJs").find(".hideFontTypeHere").html();
    var fontSize = $(".hiddenJs").find(".fontSizeHere").html();
    var fontColor = $(".hiddenJs").find(".FontColorHere").html();
    var background = $(".hiddenJs").find(".backgroundColor").html();

   

    if (fontType == 1){
        $("#sidebar").find(".sideLinks").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#sidebar").find(".logout").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
    }
    if (fontType == 2){
        $("#sidebar").find(".sideLinks").css("font-family", "cursive")
        $("#sidebar").find(".logout").css("font-family", "cursive")
    }
    if (fontType == 3){
        $("#sidebar").find(".sideLinks").css("font-family", "fantasy")
        $("#sidebar").find(".logout").css("font-family", "fantasy")
    }
    if (fontType == 4){
        $("#sidebar").find(".sideLinks").css("font-family", "monospace")
        $("#sidebar").find(".logout").css("font-family", "monospace")
    }
    if (fontType == 5){
        $("#sidebar").find(".sideLinks").css("font-family", "sans-serif")
        $("#sidebar").find(".logout").css("font-family", "sans-serif")
    }
    if (fontType == 6){
        $("#sidebar").find(".sideLinks").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#sidebar").find(".logout").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
    }

    if (fontSize == 1){
        $("#sidebar").find(".sideLinks").css("font-size", "15px")
        $("#sidebar").find(".logout").css("font-size", "15px")
    }
    if (fontSize == 2){
        $("#sidebar").find(".sideLinks").css("font-size", "20px")
        $("#sidebar").find(".logout").css("font-size", "20px")
    }
    if (fontSize == 3){
        $("#sidebar").find(".sideLinks").css("font-size", "30px")
        $("#sidebar").find(".logout").css("font-size", "30px")
    }

    if (fontColor == 1){
        if (background == 1){
            $("#sidebar").find(".sideLinks").css("color", "black")
            $("#sidebar").find(".logout").css("color", "black")
        }
        else{
            $("#sidebar").find(".sideLinks").css("color", "white")
            $("#sidebar").find(".logout").css("color", "white")
        }
    }
    if (fontColor == 2){
        $("#sidebar").find(".sideLinks").css("color", "blue")
        $("#sidebar").find(".logout").css("color", "blue")
    }
    if (fontColor == 3){
        $("#sidebar").find(".sideLinks").css("color", "red")
        $("#sidebar").find(".logout").css("color", "red")
    }
    if (fontColor == 4){
        $("#sidebar").find(".sideLinks").css("color", "green")
        $("#sidebar").find(".logout").css("color", "green")
    }
    if (fontColor == 5){
        $("#sidebar").find(".sideLinks").css("color", "orange")
        $("#sidebar").find(".logout").css("color", "orange")
    }
    if (fontColor == 6){
        $("#sidebar").find(".sideLinks").css("color", "purple")
        $("#sidebar").find(".logout").css("color", "purple")
    }
    if (fontColor == 7){
        $("#sidebar").find(".sideLinks").css("color", "pink")
        $("#sidebar").find(".logout").css("color", "pink")
    }

    if (background == 1){
        $("#sidebar").css({"background-color": "white", "border-right": "1px solid black"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid black")
        $("#sidebar").find(".logout").css("border", "1px solid black")
        $("#sidebar").find(".sideProfile").css("border", "1px solid black")
    }
    else{
        $("#sidebar").css({"background-color": "black", "border-right": "1px solid white"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid white")
        $("#sidebar").find(".logout").css("border", "1px solid white")
        $("#sidebar").find(".sideProfile").css("border", "1px solid white")
    }


});