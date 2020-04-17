/* Click Off */

$('body').click(function() {
    $('#menu div').addClass('hidden');
    $('.info-bubble').addClass('invisible');
    $('.quote-buttons-container').addClass('hidden');
});

/* Menu */

$('#menu img').click(function(e) {
    e.stopPropagation();

    $(this).parent().find('div').toggleClass('hidden');
});

/* Site Header */

$('.request-quote > img').click(function(e) {
    e.stopPropagation();

    $(this).parent().find('.quote-buttons-container').toggleClass('hidden');
});

/* ADD JS HERE */