$(document).ready(function(){
    $(".hiddenJs").hide();

    var fontType = $(".hiddenJs").find(".hideFontTypeHere").html();
    var fontSize = $(".hiddenJs").find(".fontSizeHere").html();
    var fontColor = $(".hiddenJs").find(".FontColorHere").html();
    var background = $(".hiddenJs").find(".backgroundColor").html();

    if (fontType == 1){
        $("#sidebar").find(".sideLinks").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#sidebar").find(".logout").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".headerH2").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".backPage").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".updateImg").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".imgForm").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".subProPic").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
    }
    if (fontType == 2){
        $("#sidebar").find(".sideLinks").css("font-family", "cursive")
        $("#sidebar").find(".logout").css("font-family", "cursive")
        $("#header").find(".headerH2").css("font-family", "cursive")
        $("#header").find(".backPage").css("font-family", "cursive")
        $("#header").find(".updateImg").css("font-family", "cursive")
        $("#header").find(".imgForm").css("font-family", "cursive")
        $("#header").find(".subProPic").css("font-family", "cursive")
    }
    if (fontType == 3){
        $("#sidebar").find(".sideLinks").css("font-family", "fantasy")
        $("#sidebar").find(".logout").css("font-family", "fantasy")
        $("#header").find(".headerH2").css("font-family", "fantasy")
        $("#header").find(".backPage").css("font-family", "fantasy")
        $("#header").find(".updateImg").css("font-family", "fantasy")
        $("#header").find(".imgForm").css("font-family", "fantasy")
        $("#header").find(".subProPic").css("font-family", "fantasy")
    }
    if (fontType == 4){
        $("#sidebar").find(".sideLinks").css("font-family", "monospace")
        $("#sidebar").find(".logout").css("font-family", "monospace")
        $("#header").find(".headerH2").css("font-family", "monospace")
        $("#header").find(".backPage").css("font-family", "monospace")
        $("#header").find(".updateImg").css("font-family", "monospace")
        $("#header").find(".imgForm").css("font-family", "monospace")
        $("#header").find(".subProPic").css("font-family", "monospace")
    }
    if (fontType == 5){
        $("#sidebar").find(".sideLinks").css("font-family", "sans-serif")
        $("#sidebar").find(".logout").css("font-family", "sans-serif")
        $("#header").find(".headerH2").css("font-family", "sans-serif")
        $("#header").find(".backPage").css("font-family", "sans-serif")
        $("#header").find(".updateImg").css("font-family", "sans-serif")
        $("#header").find(".imgForm").css("font-family", "sans-serif")
        $("#header").find(".subProPic").css("font-family", "sans-serif")
    }
    if (fontType == 6){
        $("#sidebar").find(".sideLinks").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#sidebar").find(".logout").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".headerH2").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".backPage").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".updateImg").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".imgForm").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".subProPic").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
    }

    if(fontSize == 1){
        $("#sidebar").find(".sideLinks").css("font-size", "15px")
        $("#sidebar").find(".logout").css("font-size", "15px")
        $("#header").find(".headerH2").css("font-size", "15px")
        $("#header").find(".backPage").css("font-size", "15px")
        $("#header").find(".updateImg").css("font-size", "15px")
        $("#header").find(".imgForm").css("font-size", "15px")
        $("#header").find(".subProPic").css("font-size", "15px")
    }
    if(fontSize == 2){
        $("#sidebar").find(".sideLinks").css("font-size", "20px")
        $("#sidebar").find(".logout").css("font-size", "20px")
        $("#header").find(".headerH2").css("font-size", "20px")
        $("#header").find(".backPage").css("font-size", "20px")
        $("#header").find(".updateImg").css("font-size", "20px")
        $("#header").find(".imgForm").css("font-size", "20px")
        $("#header").find(".subProPic").css("font-size", "20px")
    }
    if(fontSize == 3){
        $("#sidebar").find(".sideLinks").css("font-size", "30px")
        $("#sidebar").find(".logout").css("font-size", "30px")
        $("#header").find(".headerH2").css("font-size", "30px")
        $("#header").find(".backPage").css("font-size", "30px")
        $("#header").find(".updateImg").css("font-size", "30px")
        $("#header").find(".imgForm").css("font-size", "30px")
        $("#header").find(".subProPic").css("font-size", "30px")
    }

    if (fontColor == 1){
        if (background == 1){
            $("#sidebar").find(".sideLinks").css("color", "black")
            $("#sidebar").find(".logout").css("color", "black")
            $("#header").find(".headerH2").css("color", "black")
            $("#header").find(".backPage").css("color", "black")
            $("#header").find(".updateImg").css("color", "black")
            $("#header").find(".imgForm").css("color", "black")
            $("#header").find(".subProPic").css("color", "black")
        }
        else{
            $("#sidebar").find(".sideLinks").css("color", "white")
            $("#sidebar").find(".logout").css("color", "white")
            $("#header").find(".headerH2").css("color", "white")
            $("#header").find(".backPage").css("color", "white")
            $("#header").find(".updateImg").css("color", "white")
            $("#header").find(".imgForm").css("color", "white")
            $("#header").find(".subProPic").css("color", "white")
        }
    }
    if (fontColor == 2){
        $("#sidebar").find(".sideLinks").css("color", "blue")
        $("#sidebar").find(".logout").css("color", "blue")
        $("#header").find(".headerH2").css("color", "blue")
        $("#header").find(".backPage").css("color", "blue")
        $("#header").find(".updateImg").css("color", "blue")
        $("#header").find(".imgForm").css("color", "blue")
        $("#header").find(".subProPic").css("color", "blue")
    }
    if (fontColor == 3){
        $("#sidebar").find(".sideLinks").css("color", "red")
        $("#sidebar").find(".logout").css("color", "red")
        $("#header").find(".headerH2").css("color", "red")
        $("#header").find(".backPage").css("color", "red")
        $("#header").find(".updateImg").css("color", "red")
        $("#header").find(".imgForm").css("color", "red")
        $("#header").find(".subProPic").css("color", "red")
    }
    if (fontColor == 4){
        $("#sidebar").find(".sideLinks").css("color", "green")
        $("#sidebar").find(".logout").css("color", "green")
        $("#header").find(".headerH2").css("color", "green")
        $("#header").find(".backPage").css("color", "green")
        $("#header").find(".updateImg").css("color", "green")
        $("#header").find(".imgForm").css("color", "green")
        $("#header").find(".subProPic").css("color", "green")
    }
    if (fontColor == 5){
        $("#sidebar").find(".sideLinks").css("color", "orange")
        $("#sidebar").find(".logout").css("color", "orange")
        $("#header").find(".headerH2").css("color", "orange")
        $("#header").find(".backPage").css("color", "orange")
        $("#header").find(".updateImg").css("color", "orange")
        $("#header").find(".imgForm").css("color", "orange")
        $("#header").find(".subProPic").css("color", "orange")
    }
    if (fontColor == 6){
        $("#sidebar").find(".sideLinks").css("color", "purple")
        $("#sidebar").find(".logout").css("color", "purple")
        $("#header").find(".headerH2").css("color", "purple")
        $("#header").find(".backPage").css("color", "purple")
        $("#header").find(".updateImg").css("color", "purple")
        $("#header").find(".imgForm").css("color", "purple")
        $("#header").find(".subProPic").css("color", "purple")
    }
    if (fontColor == 7){
        $("#sidebar").find(".sideLinks").css("color", "pink")
        $("#sidebar").find(".logout").css("color", "pink")
        $("#header").find(".headerH2").css("color", "pink")
        $("#header").find(".backPage").css("color", "pink")
        $("#header").find(".updateImg").css("color", "pink")
        $("#header").find(".imgForm").css("color", "pink")
        $("#header").find(".subProPic").css("color", "pink")
    }

    if (background == 1){
        $("#body").css("background-color", "white")
        $("#sidebar").css({"background-color": "white", "border-right": "2px solid black"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid black")
        $("#sidebar").find(".logout").css("border", "1px solid black")
        $("#header").css("background-color", "white")
        $("#header").find(".headerH2").css("border-bottom", "1px solid black")
    }
    else{
        $("#body").css("background-color", "black")
        $("#sidebar").css({"background-color": "black", "border-right": "2px solid white"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid white")
        $("#sidebar").find(".logout").css("border", "1px solid white")
        $("#header").css("background-color", "black")
        $("#header").find(".headerH2").css("border-bottom", "1px solid white")
    }


})