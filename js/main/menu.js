/* Init the mobile menu */
$("#hamburger").click(function(event) {
    event.preventDefault();
    $("#nav").addClass("showNav");
    var winHeight = $(window).outerHeight();
    // Set the window height of the mobile menu when engaged!
    $('#menuWrapper').css('height', winHeight + 'px');
});

$("#close").click(function(event) {
    event.preventDefault();
    $("#nav").removeClass("showNav");
    // Set the window height of the mobile menu when not engaged!
    $('#menuWrapper').css('height', 'auto');
});

/* On hover apply a class to the dropdown '.hov' */
$('#menuWrapper ul li').hover(function() {
    var el = $(this).children('ul');
    // check if it has a class of .hov 
    if (el.hasClass('hov')) {
        $(el).removeClass('hov');
    } else {
        $(el).addClass('hov');
    }
});