$("document").ready(function () {
    $('.yeah').css('background-color', 'skyblue');

    //$('div p:first-child').css('background-color', 'pink');

    //$('p:last').css('color', 'red');

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('hi').bind('click', mouseClick);
});

function mouseOverMe() {
    $("h1").html("Lol u suck n00b");
    
    $(".yeah").css('background-color', 'green');
    $(".yeah").css('background-color', 'blue');
    $(".yeah").css('background-color', 'green');
    $(".yeah").css('background-color', 'blue');
    $(".yeah").css('background-color', 'green');
    $(".yeah").css('background-color', 'blue');
    $(".yeah").css('background-color', 'green');
    $(".yeah").css('background-color', 'blue');
    $(".yeah").css('background-color', 'green');
    $(".yeah").css('background-color', 'blue');
    
}

function mouseOutMe() {
    $('h1').html('Click to find out more');
}

function mouseClick() {
    $('p').html('Leedleleedlelee');
}

