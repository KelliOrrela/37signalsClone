$(document).ready(function() {

  $('div').hover(function() {
    var sloganToToggleID = '#' + $(this).attr('id') + 'slogan';
    $(sloganToToggleID).toggle()
    
    $('#sloganmain').toggle();
    
    $('#slogansub').toggle();
    });

});