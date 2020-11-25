$(document).ready(function () {
    $("#main2").hide();
    $(".ReplyStream").hide();

    $(".feedStream").click(function () {
        $("#main").hide();
        $("#main2").show();
        var innerName = $(this).find(".User").html();
        var innerPost = $(this).find(".posts").html();
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
})