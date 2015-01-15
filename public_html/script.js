$("document").ready(function () {
    $('.yeah').css('background-color', 'skyblue');
    
    $('#superHumans').accordion({header: "h3"});

    //$('div p:first-child').css('background-color', 'pink');

    //$('p:last').css('color', 'red');

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
    
    $('replaceWText').bind('click', replaceWText);
    
    $('#ranPara').bind('click', addAPara);
    
    $('#randPara').bind('click', removeAPara);
    
    $('#Logo').bind('click', hideTheImage);
    
    $('#show').bind('click', showTheImage);
    
    //$('#show').css('visibility', 'hidden');

});

function fadeALittle() {
    $('#Logo').fadeTo (2500, .30);
}

function fadeTheImage() {
    $('#Logo').fadeIn(2500);
}

function showTheImage () {
    $('#Logo').show('puff', {}, 2500);
}

function hideTheImage() {
    $('#Logo').hide('explode', {}, 2500);
}

function removeAPara () {
    $('#ranPara p:last').remove();
}

function addAPara () {
    $('#ranPara').append('<p>ADDED</p>');
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

