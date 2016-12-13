/**
 * Created by jonathan.solomon on 12/13/2016.
 */

var delay = 1000;

//just for when I want to navigate to my site portfolio
$("#btnsite").click(function() {

    $("#sites").css("display", "unset");

    $('html, body').animate({
        scrollTop: $("#sites").offset().top
    }, delay);
    alert($(this).text());
    setTimeout(function() {

        $("#main").css("display", "none");
        $("#bio").css("display", "none");
        $("#contact").css("display", "none");

    },delay);

});


//this is when I want everyone to see my glowing bio =)
$("#btnbio").click(function() {

    $("#bio").css("display", "unset");

    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, delay);

    setTimeout(function() {

        $("#sites").css("display", "none");
        $("#main").css("display", "none");
        $("#contact").css("display", "none");

    },delay);

});

//this is when I want everyone to see my glowing bio =)
$("#btncontact").click(function() {

    $("#contact").css("display", "unset");

    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, delay);

    setTimeout(function() {

        $("#main").css("display", "none");
        $("#bio").css("display", "none");
        $("#sites").css("display", "none");

    },delay);

});