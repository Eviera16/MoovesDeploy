$(document).ready(function () {
    $("#main2").hide();
    $(".ReplyStream").hide();
    $(".imageUpload").hide();
    $(".imageUpload2").hide();
    $(".isReplyDiv").hide();
    $(".hiddenJs").hide();

    var checker = $(".isReplyDiv").find(".checker").html();
    var fontType = $(".hiddenJs").find(".hideFontTypeHere").html();
    var fontSize = $(".hiddenJs").find(".fontSizeHere").html();
    var fontColor = $(".hiddenJs").find(".FontColorHere").html();
    var background = $(".hiddenJs").find(".backgroundColor").html();

    if (checker == 16) {
        $("#main").hide();
        $("#main2").show();
        var innerName = $(".isReplyDiv").find(".User").html();
        var innerPost = $(".isReplyDiv").find(".feedInfo").html();
        var innerId = $(".isReplyDiv").find(".hiddenStuff").html();
        var replies = $(".isReplyDiv").find(".ReplyStream").html();
        console.log("hiddenHere: ", innerId);
        $("#main2").find(".userRe").html(innerName);
        $("#main2").find(".postsRe").html(innerPost);
        $("#main2").find(".hidehere").html(innerId);
        $("#main2").find(".replyFeedStream").html(replies);
    }

    var backgroundColortest = null;
    if (background == 1){
        $(".feedStream").hover(function () {
            backgroundColortest = $(this).css("background-color");
            $(this).css("background-color", "lightgrey");
        }, function () {
            $(this).css("background-color", backgroundColortest);
        });
    }
    else{
        $(".feedStream").hover(function () {
            backgroundColortest = $(this).css("background-color");
            $(this).css("background-color", "rgb(52, 52, 53)");
        }, function () {
            $(this).css("background-color", backgroundColortest);
        });
    }

    $(".feedStream").click(function () {
        $("#main").hide();
        $("#main2").show();
        var innerName = $(this).find(".User").html();
        var innerPost = $(this).find(".feedInfo").html();
        var innerId = $(this).find(".hiddenStuff").html();
        var replies = $(this).find(".ReplyStream").html();
        console.log("hiddenHere: ", innerId);
        $("#main2").find(".userRe").html(innerName);
        $("#main2").find(".postsRe").html(innerPost);
        $("#main2").find(".hidehere").html(innerId);
        $("#main2").find(".replyFeedStream").html(replies);
    })
    $(".exit").click(function () {
        $("#main2").hide();
        $("#main").show();
    })
    $(".imageIcon").click(function () {
        $(".imageUpload").toggle(600);
    })
    $(".imageIcon2").click(function () {
        $(".imageUpload2").toggle(600);
    })

    if (fontType == 1) {
        $("#sidebar").find(".sideLinks").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif");
        $("#sidebar").find(".logout").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#friends").find(".active").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#friends").find(".friendLink").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".text").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".pubStuff").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".moo").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".link").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".posts").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $(".mn2").find(".numMooz").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#main2").find(".thread").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#main2").find(".exit").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#main2").find(".mooBack").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#main2").find(".textBack").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#Events").find(".eventHeader").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#Events").find(".link1").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
        $("#Events").find(".post2").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")
    }
    if (fontType == 2) {
        $("#sidebar").find(".sideLinks").css("font-family", "cursive");
        $("#sidebar").find(".logout").css("font-family", "cursive")
        $("#friends").find(".active").css("font-family", "cursive")
        $("#friends").find(".friendLink").css("font-family", "cursive")
        $(".mn2").find(".text").css("font-family", "cursive")
        $(".mn2").find(".pubStuff").css("font-family", "cursive")
        $(".mn2").find(".moo").css("font-family", "cursive")
        $(".mn2").find(".link").css("font-family", "cursive")
        $(".mn2").find(".posts").css("font-family", "cursive")
        $(".mn2").find(".numMooz").css("font-family", "cursive")
        $("#main2").find(".thread").css("font-family", "cursive")
        $("#main2").find(".exit").css("font-family", "cursive")
        $("#main2").find(".mooBack").css("font-family", "cursive")
        $("#main2").find(".textBack").css("font-family", "cursive")
        $("#Events").find(".eventHeader").css("font-family", "cursive")
        $("#Events").find(".link1").css("font-family", "cursive")
        $("#Events").find(".post2").css("font-family", "cursive")
    }
    if (fontType == 3) {
        $("#sidebar").find(".sideLinks").css("font-family", "fantasy");
        $("#sidebar").find(".logout").css("font-family", "fantasy")
        $("#friends").find(".active").css("font-family", "fantasy")
        $("#friends").find(".friendLink").css("font-family", "fantasy")
        $(".mn2").find(".text").css("font-family", "fantasy")
        $(".mn2").find(".pubStuff").css("font-family", "fantasy")
        $(".mn2").find(".moo").css("font-family", "fantasy")
        $(".mn2").find(".link").css("font-family", "fantasy")
        $(".mn2").find(".posts").css("font-family", "fantasy")
        $(".mn2").find(".numMooz").css("font-family", "fantasy")
        $("#main2").find(".thread").css("font-family", "fantasy")
        $("#main2").find(".exit").css("font-family", "fantasy")
        $("#main2").find(".mooBack").css("font-family", "fantasy")
        $("#main2").find(".textBack").css("font-family", "fantasy")
        $("#Events").find(".eventHeader").css("font-family", "fantasy")
        $("#Events").find(".link1").css("font-family", "fantasy")
        $("#Events").find(".post2").css("font-family", "fantasy")
    }
    if (fontType == 4) {
        $("#sidebar").find(".sideLinks").css("font-family", "monospace");
        $("#sidebar").find(".logout").css("font-family", "monospace")
        $("#friends").find(".active").css("font-family", "monospace")
        $("#friends").find(".friendLink").css("font-family", "monospace")
        $(".mn2").find(".text").css("font-family", "monospace")
        $(".mn2").find(".pubStuff").css("font-family", "monospace")
        $(".mn2").find(".moo").css("font-family", "monospace")
        $(".mn2").find(".link").css("font-family", "monospace")
        $(".mn2").find(".posts").css("font-family", "monospace")
        $(".mn2").find(".numMooz").css("font-family", "monospace")
        $("#main2").find(".thread").css("font-family", "monospace")
        $("#main2").find(".exit").css("font-family", "monospace")
        $("#main2").find(".mooBack").css("font-family", "monospace")
        $("#main2").find(".textBack").css("font-family", "monospace")
        $("#Events").find(".eventHeader").css("font-family", "monospace")
        $("#Events").find(".link1").css("font-family", "monospace")
        $("#Events").find(".post2").css("font-family", "monospace")
    }
    if (fontType == 5) {
        $("#sidebar").find(".sideLinks").css("font-family", "sans-serif");
        $("#sidebar").find(".logout").css("font-family", "sans-serif")
        $("#friends").find(".active").css("font-family", "sans-serif")
        $("#friends").find(".friendLink").css("font-family", "sans-serif")
        $(".mn2").find(".text").css("font-family", "sans-serif")
        $(".mn2").find(".pubStuff").css("font-family", "sans-serif")
        $(".mn2").find(".moo").css("font-family", "sans-serif")
        $(".mn2").find(".link").css("font-family", "sans-serif")
        $(".mn2").find(".posts").css("font-family", "sans-serif")
        $(".mn2").find(".numMooz").css("font-family", "sans-serif")
        $("#main2").find(".thread").css("font-family", "sans-serif")
        $("#main2").find(".exit").css("font-family", "sans-serif")
        $("#main2").find(".mooBack").css("font-family", "sans-serif")
        $("#main2").find(".textBack").css("font-family", "sans-serif")
        $("#Events").find(".eventHeader").css("font-family", "sans-serif")
        $("#Events").find(".link1").css("font-family", "sans-serif")
        $("#Events").find(".post2").css("font-family", "sans-serif")
    }
    if (fontType == 6) {
        $("#sidebar").find(".sideLinks").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif");
        $("#sidebar").find(".logout").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#friends").find(".active").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#friends").find(".friendLink").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".text").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".pubStuff").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".moo").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".link").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".posts").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $(".mn2").find(".numMooz").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#main2").find(".thread").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#main2").find(".exit").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#main2").find(".mooBack").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#main2").find(".textBack").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#Events").find(".eventHeader").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#Events").find(".link1").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
        $("#Events").find(".post2").css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif")
    }

    if (fontSize == 1) {
        $("#sidebar").find(".sideLinks").css("font-size", "15px");
        $("#sidebar").find(".logout").css("font-size", "15px")
        $("#friends").find(".active").css("font-size", "15px")
        $("#friends").find(".friendLink").css("font-size", "15px")
        $(".mn2").find(".text").css("font-size", "15px")
        $(".mn2").find(".pubStuff").css("font-size", "15px")
        $(".mn2").find(".moo").css("font-size", "15px")
        $(".mn2").find(".link").css("font-size", "15px")
        $(".mn2").find(".posts").css("font-size", "15px")
        $(".mn2").find(".numMooz").css("font-size", "15px")
        $("#main2").find(".thread").css("font-size", "15px")
        $("#main2").find(".exit").css("font-size", "15px")
        $("#main2").find(".mooBack").css("font-size", "15px")
        $("#main2").find(".textBack").css("font-size", "15px")
        $("#Events").find(".eventHeader").css("font-size", "15px")
        $("#Events").find(".link1").css("font-size", "15px")
        $("#Events").find(".post2").css("font-size", "15px")
    }
    if (fontSize == 2) {
        $("#sidebar").find(".sideLinks").css("font-size", "20px");
        $("#sidebar").find(".logout").css("font-size", "20px")
        $("#friends").find(".active").css("font-size", "20px")
        $("#friends").find(".friendLink").css("font-size", "20px")
        $(".mn2").find(".text").css("font-size", "20px")
        $(".mn2").find(".pubStuff").css("font-size", "20px")
        $(".mn2").find(".moo").css("font-size", "20px")
        $(".mn2").find(".link").css("font-size", "20px")
        $(".mn2").find(".posts").css("font-size", "20px")
        $(".mn2").find(".numMooz").css("font-size", "20px")
        $("#main2").find(".thread").css("font-size", "20px")
        $("#main2").find(".exit").css("font-size", "20px")
        $("#main2").find(".mooBack").css("font-size", "20px")
        $("#main2").find(".textBack").css("font-size", "20px")
        $("#Events").find(".eventHeader").css("font-size", "20px")
        $("#Events").find(".link1").css("font-size", "20px")
        $("#Events").find(".post2").css("font-size", "20px")
    }
    if (fontSize == 3) {
        $("#sidebar").find(".sideLinks").css("font-size", "30px");
        $("#sidebar").find(".logout").css("font-size", "30px")
        $("#friends").find(".active").css("font-size", "30px")
        $("#friends").find(".friendLink").css("font-size", "30px")
        $(".mn2").find(".text").css("font-size", "30px")
        $(".mn2").find(".pubStuff").css("font-size", "30px")
        $(".mn2").find(".moo").css("font-size", "30px")
        $(".mn2").find(".link").css("font-size", "30px")
        $(".mn2").find(".posts").css("font-size", "30px")
        $(".mn2").find(".numMooz").css("font-size", "30px")
        $("#main2").find(".thread").css("font-size", "30px")
        $("#main2").find(".exit").css("font-size", "30px")
        $("#main2").find(".mooBack").css("font-size", "30px")
        $("#main2").find(".textBack").css("font-size", "30px")
        $("#Events").find(".eventHeader").css("font-size", "30px")
        $("#Events").find(".link1").css("font-size", "30px")
        $("#Events").find(".post2").css("font-size", "30px")
    }

    if (fontColor == 1) {
        if (background == 1){
            $("#sidebar").find(".sideLinks").css("color", "black");
            $("#sidebar").find(".logout").css("color", "black")
            $("#friends").find(".active").css("color", "black")
            $("#friends").find(".friendLink").css("color", "black")
            $(".mn2").find(".text").css("color", "black")
            $(".mn2").find(".imageUpload").css("color", "black")
            $(".mn2").find(".pubStuff").css("color", "black")
            $(".mn2").find(".moo").css("color", "black")
            $(".mn2").find(".link").css("color", "black")
            $(".mn2").find(".posts").css("color", "black")
            $(".mn2").find(".numMooz").css("color", "black")
            $("#main2").find(".thread").css("color", "black")
            $("#main2").find(".exit").css("color", "black")
            $("#main2").find(".mooBack").css("color", "black")
            $("#main2").find(".textBack").css("color", "black")
            $("#main2").find(".imageUpload2").css("color", "black")
            $("#Events").find(".eventHeader").css("color", "black")
            $("#Events").find(".link1").css("color", "black")
            $("#Events").find(".post2").css("color", "black")
        }
        else{
            $("#sidebar").find(".sideLinks").css("color", "white");
            $("#sidebar").find(".logout").css("color", "white")
            $("#friends").find(".active").css("color", "white")
            $("#friends").find(".friendLink").css("color", "white")
            // $(".mn2").find(".text").css("color", "white")
            $(".mn2").find(".imageUpload").css("color", "white")
            $(".mn2").find(".pubStuff").css("color", "white")
            $(".mn2").find(".moo").css("color", "white")
            $(".mn2").find(".link").css("color", "white")
            $(".mn2").find(".posts").css("color", "white")
            $(".mn2").find(".numMooz").css("color", "white")
            $("#main2").find(".thread").css("color", "white")
            $("#main2").find(".exit").css("color", "white")
            $("#main2").find(".mooBack").css("color", "white")
            $("#main2").find(".textBack").css("color", "white")
            $("#main2").find(".imageUpload2").css("color", "white")
            $("#Events").find(".eventHeader").css("color", "white")
            $("#Events").find(".link1").css("color", "white")
            $("#Events").find(".post2").css("color", "white")
        }
    }
    if (fontColor == 2) {
        $("#sidebar").find(".sideLinks").css("color", "blue");
        $("#sidebar").find(".logout").css("color", "blue")
        $("#friends").find(".active").css("color", "blue")
        $("#friends").find(".friendLink").css("color", "blue")
        $(".mn2").find(".text").css("color", "blue")
        $(".mn2").find(".imageUpload").css("color", "blue")
        $(".mn2").find(".pubStuff").css("color", "blue")
        $(".mn2").find(".moo").css("color", "blue")
        $(".mn2").find(".link").css("color", "blue")
        $(".mn2").find(".posts").css("color", "blue")
        $(".mn2").find(".numMooz").css("color", "blue")
        $("#main2").find(".thread").css("color", "blue")
        $("#main2").find(".exit").css("color", "blue")
        $("#main2").find(".mooBack").css("color", "blue")
        $("#main2").find(".textBack").css("color", "blue")
        $("#main2").find(".imageUpload2").css("color", "blue")
        $("#Events").find(".eventHeader").css("color", "blue")
        $("#Events").find(".link1").css("color", "blue")
        $("#Events").find(".post2").css("color", "blue")
    }
    if (fontColor == 3) {
        $("#sidebar").find(".sideLinks").css("color", "red");
        $("#sidebar").find(".logout").css("color", "red")
        $("#friends").find(".active").css("color", "red")
        $("#friends").find(".friendLink").css("color", "red")
        $(".mn2").find(".text").css("color", "red")
        $(".mn2").find(".imageUpload").css("color", "red")
        $(".mn2").find(".pubStuff").css("color", "red")
        $(".mn2").find(".moo").css("color", "red")
        $(".mn2").find(".link").css("color", "red")
        $(".mn2").find(".posts").css("color", "red")
        $(".mn2").find(".numMooz").css("color", "red")
        $("#main2").find(".thread").css("color", "red")
        $("#main2").find(".exit").css("color", "red")
        $("#main2").find(".mooBack").css("color", "red")
        $("#main2").find(".textBack").css("color", "red")
        $("#main2").find(".imageUpload2").css("color", "red")
        $("#Events").find(".eventHeader").css("color", "red")
        $("#Events").find(".link1").css("color", "red")
        $("#Events").find(".post2").css("color", "red")
    }
    if (fontColor == 4) {
        $("#sidebar").find(".sideLinks").css("color", "green");
        $("#sidebar").find(".logout").css("color", "green")
        $("#friends").find(".active").css("color", "green")
        $("#friends").find(".friendLink").css("color", "green")
        $(".mn2").find(".text").css("color", "green")
        $(".mn2").find(".imageUpload").css("color", "green")
        $(".mn2").find(".pubStuff").css("color", "green")
        $(".mn2").find(".moo").css("color", "green")
        $(".mn2").find(".link").css("color", "green")
        $(".mn2").find(".posts").css("color", "green")
        $(".mn2").find(".numMooz").css("color", "green")
        $("#main2").find(".thread").css("color", "green")
        $("#main2").find(".exit").css("color", "green")
        $("#main2").find(".mooBack").css("color", "green")
        $("#main2").find(".textBack").css("color", "green")
        $("#main2").find(".imageUpload2").css("color", "green")
        $("#Events").find(".eventHeader").css("color", "green")
        $("#Events").find(".link1").css("color", "green")
        $("#Events").find(".post2").css("color", "green")
    }
    if (fontColor == 5) {
        $("#sidebar").find(".sideLinks").css("color", "orange");
        $("#sidebar").find(".logout").css("color", "orange")
        $("#friends").find(".active").css("color", "orange")
        $("#friends").find(".friendLink").css("color", "orange")
        $(".mn2").find(".text").css("color", "orange")
        $(".mn2").find(".imageUpload").css("color", "orange")
        $(".mn2").find(".pubStuff").css("color", "orange")
        $(".mn2").find(".moo").css("color", "orange")
        $(".mn2").find(".link").css("color", "orange")
        $(".mn2").find(".posts").css("color", "orange")
        $(".mn2").find(".numMooz").css("color", "orange")
        $("#main2").find(".thread").css("color", "orange")
        $("#main2").find(".exit").css("color", "orange")
        $("#main2").find(".mooBack").css("color", "orange")
        $("#main2").find(".textBack").css("color", "orange")
        $("#main2").find(".imageUpload2").css("color", "orange")
        $("#Events").find(".eventHeader").css("color", "orange")
        $("#Events").find(".link1").css("color", "orange")
        $("#Events").find(".post2").css("color", "orange")
    }
    if (fontColor == 6) {
        $("#sidebar").find(".sideLinks").css("color", "purple");
        $("#sidebar").find(".logout").css("color", "purple")
        $("#friends").find(".active").css("color", "purple")
        $("#friends").find(".friendLink").css("color", "purple")
        $(".mn2").find(".text").css("color", "purple")
        $(".mn2").find(".imageUpload").css("color", "purple")
        $(".mn2").find(".pubStuff").css("color", "purple")
        $(".mn2").find(".moo").css("color", "purple")
        $(".mn2").find(".link").css("color", "purple")
        $(".mn2").find(".posts").css("color", "purple")
        $(".mn2").find(".numMooz").css("color", "purple")
        $("#main2").find(".thread").css("color", "purple")
        $("#main2").find(".exit").css("color", "purple")
        $("#main2").find(".mooBack").css("color", "purple")
        $("#main2").find(".textBack").css("color", "purple")
        $("#main2").find(".imageUpload2").css("color", "purple")
        $("#Events").find(".eventHeader").css("color", "purple")
        $("#Events").find(".link1").css("color", "purple")
        $("#Events").find(".post2").css("color", "purple")
    }
    if (fontColor == 7) {
        $("#sidebar").find(".sideLinks").css("color", "pink");
        $("#sidebar").find(".logout").css("color", "pink")
        $("#friends").find(".active").css("color", "pink")
        $("#friends").find(".friendLink").css("color", "pink")
        $(".mn2").find(".text").css("color", "pink")
        $(".mn2").find(".imageUpload").css("color", "pink")
        $(".mn2").find(".pubStuff").css("color", "pink")
        $(".mn2").find(".moo").css("color", "pink")
        $(".mn2").find(".link").css("color", "pink")
        $(".mn2").find(".posts").css("color", "pink")
        $(".mn2").find(".numMooz").css("color", "pink")
        $("#main2").find(".thread").css("color", "pink")
        $("#main2").find(".exit").css("color", "pink")
        $("#main2").find(".mooBack").css("color", "pink")
        $("#main2").find(".textBack").css("color", "pink")
        $("#main2").find(".imageUpload2").css("color", "pink")
        $("#Events").find(".eventHeader").css("color", "pink")
        $("#Events").find(".link1").css("color", "pink")
        $("#Events").find(".post2").css("color", "pink")
    }

    if (background == 1) {
        $("#bodyYody").css("background-color", "white")
        $(".isReplyDiv").find(".smallPro").css("border", "1px solid black")
        $("#header").css({ "background-color": "white", "border-bottom": "2px solid black" })
        $("#sidebar").css({ "background-color": "white", "border-right": "2px solid black" })
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid black")
        $("#sidebar").find(".logout").css("border", "1px solid black")
        $("#sidebar").find(".profile").css("border", "1px solid black")
        $(".mn2").css("background-color", "white")
        $(".mn2").find(".feedStream").css({ "background-color": "white", "border-top": ".5px solid black" })
        $(".mn2").find(".reply").css({ "background-color": "white", "border-top": ".5px solid black" })
        $(".mn2").find(".ReplyStream").css("background-color", "white")
        $(".mn2").find(".smallPro").css("border", "1px solid black")
        $(".mn2").find(".add").css("background-color", "white")
        // $(".mn2").find(".imageUpload").css("background-color", "white")
        $(".mn2").find(".moo").css("background-color", "white")
        $(".main2").find(".mooBack").css("background-color", "white")
        $("#main2").css("background-color", "white")
        $("#main2").find(".threadTop").css("border-bottom", "1px solid black")
        $("#main2").find(".userRe").css("background-color", "white")
        // $("#main2").find(".imageUpload2").css("background-color", "white")
        $("#main2").find(".postsRe").css({ "background-color": "white", "border-bottom": "1px solid black" })
        $("#Events").css("border-left", "1px solid black")
        $("#Events").find(".feedStream1").css("border-top", "1px solid black")
    }
    else {
        $("#bodyYody").css("background-color", "black")
        $(".isReplyDiv").find(".smallPro").css("border", "1px solid white")
        $("#header").css({ "background-color": "black", "border-bottom": "2px solid white" })
        $("#sidebar").css({ "background-color": "black", "border-right": "2px solid white" })
        $("#sidebar").find(".sideLinks").css("border-bottom", "1px solid white")
        $("#sidebar").find(".logout").css("border", "1px solid white")
        $("#sidebar").find(".profile").css("border", "1px solid white")
        $(".mn2").css("background-color", "black")
        $(".mn2").find(".feedStream").css({ "background-color": "black", "border-top": ".5px solid white" })
        $(".mn2").find(".reply").css({ "background-color": "black", "border-top": ".5px solid white" })
        $(".mn2").find(".ReplyStream").css("background-color", "black")
        $(".mn2").find(".smallPro").css("border", "1px solid white")
        $(".mn2").find(".add").css("background-color", "black")
        // $(".mn2").find(".imageUpload").css("background-color", "white")
        $(".mn2").find(".moo").css("background-color", "black")
        $(".main2").find(".mooBack").css("background-color", "black")
        $("#main2").css("background-color", "black")
        $("#main2").find(".threadTop").css("border-bottom", "1px solid white")
        $("#main2").find(".userRe").css("background-color", "black")
        // $("#main2").find(".imageUpload2").css("background-color", "white")
        $("#main2").find(".postsRe").css({ "background-color": "black", "border-bottom": "1px solid white" })
        $("#Events").css("border-left", "1px solid white")
        $("#Events").find(".feedStream1").css("border-top", "1px solid white")
    }


})