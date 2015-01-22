$("document").ready(function () {
    //controls accordions background color
    $('.yeah, #asterisk').css('background-color', 'skyblue');
    //controls accordions
    $('#superHumans').accordion({header: "h3"});
    //controls the hover
    $("#asterisk").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   //controls the title click
    $('#asterisk').bind('click', mouseClick);
    //controls the row add
    $('#randPara').bind('click', addAPara);
    //controls the row removal
    $('#ranPara').bind('click', removeAPara);
    //Controls image explosion
    $('#Logo').bind('click', hideTheImage);
    //controls button to show image
    $('#show').bind('click', showTheImage);
    //makes navbar draggable
    $('#Navbar').draggable();
    //controls jumbotron subtext
    $('#subtitle, #Pop').css('color', 'white');

});
//Controls the image explosion
function fadeALittle() {
    $('#Logo').fadeTo (2500, .30);
}
//Controls the image explosion
function fadeTheImage() {
    $('#Logo').fadeIn(2500);
}
//Shows the image when the buttons clicked
function showTheImage () {
    $('#Logo').show('puff', {}, 2500);
}
//Controls the image explosion
function hideTheImage() {
    $('#Logo').hide('explode', {}, 2500);
}
//Removes the rows
function removeAPara () {
    $('#randPara p:last').remove();
}
//Adds rows
function addAPara () {
    $('#randPara').append('<p>ADDED</p>');
}
//Controls mouse over title change
function mouseOverMe() {
    $("#asterisk").html("Good, Now click me");  
}
//changes back to normal when mouse is not over title
function mouseOutMe() {
    $('#asterisk').html('Hover over me');
}
//changes a row when title is clicked
function mouseClick() {
    $('#LooL').html('You have clicked the title');
}

