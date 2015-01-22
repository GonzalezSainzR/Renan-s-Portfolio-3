$("document").ready(function () {
    $('.yeah, #asterisk').css('background-color', 'skyblue');
    
    $('#superHumans').accordion({header: "h3"});

    $("#asterisk").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('#asterisk').bind('click', mouseClick);
    
    $('replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#ranPara').bind('click', removeAPara);
    
    $('#Logo').bind('click', hideTheImage);
    
    $('#show').bind('click', showTheImage);
    
    $('#Navbar').draggable();
    
    $('#subtitle, #Pop').css('color', 'white');

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
    $('#randPara p:last').remove();
}

function addAPara () {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText () {
    $('replaceWText').text('replaced');
}

function mouseOverMe() {
    $("#asterisk").html("Good, Now click me");  
}

function mouseOutMe() {
    $('#asterisk').html('Hover over me');
}

function mouseClick() {
    $('#LooL').html('You have clicked the title');
}

