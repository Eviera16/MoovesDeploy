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
        $("#header").find(".desc").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#header").find(".otherDesc").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#rightSide").find(".upLink").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#rightSide").find(".desc").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#rightSide").find(".descArea").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#rightSide").find(".subDesc").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
    }
    if (fontType == 2){
        $("#sidebar").find(".sideLinks").css("font-family", "cursive")
        $("#sidebar").find(".logout").css("font-family", "cursive")
        $("#header").find(".headerH2").css("font-family", "cursive")
        $("#header").find(".desc").css("font-family", "cursive")
        $("#header").find(".otherDesc").css("font-family", "cursive")
        $("#rightSide").find(".upLink").css("font-family", "cursive")
        $("#rightSide").find(".desc").css("font-family", "cursive")
        $("#rightSide").find(".descArea").css("font-family", "cursive")
        $("#rightSide").find(".subDesc").css("font-family", "cursive")
    }
    if (fontType == 3){
        $("#sidebar").find(".sideLinks").css("font-family", "fantasy")
        $("#sidebar").find(".logout").css("font-family", "fantasy")
        $("#header").find(".headerH2").css("font-family", "fantasy")
        $("#header").find(".desc").css("font-family", "fantasy")
        $("#header").find(".otherDesc").css("font-family", "fantasy")
        $("#rightSide").find(".upLink").css("font-family", "fantasy")
        $("#rightSide").find(".desc").css("font-family", "fantasy")
        $("#rightSide").find(".descArea").css("font-family", "fantasy")
        $("#rightSide").find(".subDesc").css("font-family", "fantasy")
    }
    if (fontType == 4){
        $("#sidebar").find(".sideLinks").css("font-family", "monospace")
        $("#sidebar").find(".logout").css("font-family", "monospace")
        $("#header").find(".headerH2").css("font-family", "monospace")
        $("#header").find(".desc").css("font-family", "monospace")
        $("#header").find(".otherDesc").css("font-family", "monospace")
        $("#rightSide").find(".upLink").css("font-family", "monospace")
        $("#rightSide").find(".desc").css("font-family", "monospace")
        $("#rightSide").find(".descArea").css("font-family", "monospace")
        $("#rightSide").find(".subDesc").css("font-family", "monospace")
    }
    if (fontType == 5){
        $("#sidebar").find(".sideLinks").css("font-family", "sans-serif")
        $("#sidebar").find(".logout").css("font-family", "sans-serif")
        $("#header").find(".headerH2").css("font-family", "sans-serif")
        $("#header").find(".desc").css("font-family", "sans-serif")
        $("#header").find(".otherDesc").css("font-family", "sans-serif")
        $("#rightSide").find(".upLink").css("font-family", "sans-serif")
        $("#rightSide").find(".desc").css("font-family", "sans-serif")
        $("#rightSide").find(".descArea").css("font-family", "sans-serif")
        $("#rightSide").find(".subDesc").css("font-family", "sans-serif")
    }
    if (fontType == 6){
        $("#sidebar").find(".sideLinks").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#sidebar").find(".logout").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".headerH2").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".desc").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#header").find(".otherDesc").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#rightSide").find(".upLink").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#rightSide").find(".desc").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#rightSide").find(".descArea").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#rightSide").find(".subDesc").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
    }

    if(fontSize == 1){
        $("#sidebar").find(".sideLinks").css("font-size", "15px")
        $("#sidebar").find(".logout").css("font-size", "15px")
        $("#header").find(".headerH2").css("font-size", "15px")
        $("#header").find(".desc").css("font-size", "15px")
        $("#header").find(".otherDesc").css("font-size", "15px")
        $("#rightSide").find(".upLink").css("font-size", "15px")
        $("#rightSide").find(".desc").css("font-size", "15px")
        $("#rightSide").find(".descArea").css("font-size", "15px")
        $("#rightSide").find(".subDesc").css("font-size", "15px")
    }
    if(fontSize == 2){
        $("#sidebar").find(".sideLinks").css("font-size", "20px")
        $("#sidebar").find(".logout").css("font-size", "20px")
        $("#header").find(".headerH2").css("font-size", "20px")
        $("#header").find(".desc").css("font-size", "20px")
        $("#header").find(".otherDesc").css("font-size", "20px")
        $("#rightSide").find(".upLink").css("font-size", "20px")
        $("#rightSide").find(".desc").css("font-size", "20px")
        $("#rightSide").find(".descArea").css("font-size", "20px")
        $("#rightSide").find(".subDesc").css("font-size", "20px")
    }
    if(fontSize == 3){
        $("#sidebar").find(".sideLinks").css("font-size", "30px")
        $("#sidebar").find(".logout").css("font-size", "30px")
        $("#header").find(".headerH2").css("font-size", "30px")
        $("#header").find(".desc").css("font-size", "30px")
        $("#header").find(".otherDesc").css("font-size", "30px")
        $("#rightSide").find(".upLink").css("font-size", "30px")
        $("#rightSide").find(".desc").css("font-size", "30px")
        $("#rightSide").find(".descArea").css("font-size", "30px")
        $("#rightSide").find(".subDesc").css("font-size", "30px")
    }

    if(fontColor == 1){
        if (background == 1){
            $("#sidebar").find(".sideLinks").css("color", "black")
            $("#sidebar").find(".logout").css("color", "black")
            $("#header").find(".headerH2").css("color", "black")
            $("#header").find(".desc").css("color", "black")
            $("#header").find(".otherDesc").css("color", "black")
            $("#rightSide").find(".upLink").css("color", "black")
            $("#rightSide").find(".desc").css("color", "black")
            $("#rightSide").find(".descArea").css("color", "black")
            $("#rightSide").find(".subDesc").css("color", "black")
        }
        else{
            $("#sidebar").find(".sideLinks").css("color", "white")
            $("#sidebar").find(".logout").css("color", "white")
            $("#header").find(".headerH2").css("color", "white")
            $("#header").find(".desc").css("color", "white")
            $("#header").find(".otherDesc").css("color", "white")
            $("#rightSide").find(".upLink").css("color", "white")
            $("#rightSide").find(".desc").css("color", "white")
            $("#rightSide").find(".descArea").css("color", "white")
            $("#rightSide").find(".subDesc").css("color", "white")
        }
    }
    if(fontColor == 2){
        $("#sidebar").find(".sideLinks").css("color", "blue")
        $("#sidebar").find(".logout").css("color", "blue")
        $("#header").find(".headerH2").css("color", "blue")
        $("#header").find(".desc").css("color", "blue")
        $("#header").find(".otherDesc").css("color", "blue")
        $("#rightSide").find(".upLink").css("color", "blue")
        $("#rightSide").find(".desc").css("color", "blue")
        $("#rightSide").find(".descArea").css("color", "blue")
        $("#rightSide").find(".subDesc").css("color", "blue")
    }
    if(fontColor == 3){
        $("#sidebar").find(".sideLinks").css("color", "red")
        $("#sidebar").find(".logout").css("color", "red")
        $("#header").find(".headerH2").css("color", "red")
        $("#header").find(".desc").css("color", "red")
        $("#header").find(".otherDesc").css("color", "red")
        $("#rightSide").find(".upLink").css("color", "red")
        $("#rightSide").find(".desc").css("color", "red")
        $("#rightSide").find(".descArea").css("color", "red")
        $("#rightSide").find(".subDesc").css("color", "red")
    }
    if(fontColor == 4){
        $("#sidebar").find(".sideLinks").css("color", "green")
        $("#sidebar").find(".logout").css("color", "green")
        $("#header").find(".headerH2").css("color", "green")
        $("#header").find(".desc").css("color", "green")
        $("#header").find(".otherDesc").css("color", "green")
        $("#rightSide").find(".upLink").css("color", "green")
        $("#rightSide").find(".desc").css("color", "green")
        $("#rightSide").find(".descArea").css("color", "green")
        $("#rightSide").find(".subDesc").css("color", "green")
    }
    if(fontColor == 5){
        $("#sidebar").find(".sideLinks").css("color", "orange")
        $("#sidebar").find(".logout").css("color", "orange")
        $("#header").find(".headerH2").css("color", "orange")
        $("#header").find(".desc").css("color", "orange")
        $("#header").find(".otherDesc").css("color", "orange")
        $("#rightSide").find(".upLink").css("color", "orange")
        $("#rightSide").find(".desc").css("color", "orange")
        $("#rightSide").find(".descArea").css("color", "orange")
        $("#rightSide").find(".subDesc").css("color", "orange")
    }
    if(fontColor == 6){
        $("#sidebar").find(".sideLinks").css("color", "purple")
        $("#sidebar").find(".logout").css("color", "purple")
        $("#header").find(".headerH2").css("color", "purple")
        $("#header").find(".desc").css("color", "purple")
        $("#header").find(".otherDesc").css("color", "purple")
        $("#rightSide").find(".upLink").css("color", "purple")
        $("#rightSide").find(".desc").css("color", "purple")
        $("#rightSide").find(".descArea").css("color", "purple")
        $("#rightSide").find(".subDesc").css("color", "purple")
    }
    if(fontColor == 7){
        $("#sidebar").find(".sideLinks").css("color", "pink")
        $("#sidebar").find(".logout").css("color", "pink")
        $("#header").find(".headerH2").css("color", "pink")
        $("#header").find(".desc").css("color", "pink")
        $("#header").find(".otherDesc").css("color", "pink")
        $("#rightSide").find(".upLink").css("color", "pink")
        $("#rightSide").find(".desc").css("color", "pink")
        $("#rightSide").find(".descArea").css("color", "pink")
        $("#rightSide").find(".subDesc").css("color", "pink")
    }

    if(background == 1){
        $("#body").css("background-color", "white")
        $("#sidebar").css({"background-color": "white", "border-right": "2px solid black"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid black")
        $("#sidebar").find(".logout").css("border", "1px solid black")
        $("#header").css("background-color", "white")
        $("#header").find(".desc").css("border-bottom", "1px solid black")
        $("#header").find(".descArea").css("border-bottom", "1px solid black")
        $("#header").find(".headerH2").css("border-bottom", "1px solid black")
        $("#rightSide").css({"background-color": "white", "border-left": ".5px solid black"})
        $("#rightSide").find(".editBack").css("border-left", ".5px solid black")
        $("#rightSide").find(".subDesc").css("background-color", "white")
    }
    else{
        $("#body").css("background-color", "black")
        $("#sidebar").css({"background-color": "black", "border-right": "2px solid white"})
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid white")
        $("#sidebar").find(".logout").css("border", "1px solid white")
        $("#header").css("background-color", "black")
        $("#header").find(".desc").css("border-bottom", "1px solid white")
        $("#header").find(".descArea").css("border-bottom", "1px solid white")
        $("#header").find(".headerH2").css("border-bottom", "1px solid white")
        $("#rightSide").css({"background-color": "black", "border-left": ".5px solid white"})
        $("#rightSide").find(".editBack").css("border-left", ".5px solid white")
        $("#rightSide").find(".subDesc").css("background-color", "black")
    }

});