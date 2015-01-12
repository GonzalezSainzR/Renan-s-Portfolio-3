$("document").ready(function () {
    $('.yeah').css('background-color', 'skyblue');

    //$('div p:first-child').css('background-color', 'pink');

    //$('p:last').css('color', 'red');

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('hi').bind('click', mouseClick);
    
    $('replaceWText').bind('click', replaceWText);
    
    $('#ranPara').bind('click', addAPara);
    
    $('#randPara').bind('click', removeAPara);
});

function removeAPara () {
    $('#ranPara p:last').remove();
}

function addAPara () {
    $('#ranPara').append('<p>ADDED</p>')
}

function replaceWText () {
    $('replaceWText').text('replaced');
}

function mouseOverMe() {
    $("h1").html("Lol u suck n00b");
    
    //$(".yeah").css('background-color', 'green');
    
}

function mouseOutMe() {
    $('h1').html('Click to find out more');
}

function mouseClick() {
    $('p').html('Leedleleedlelee');
}

