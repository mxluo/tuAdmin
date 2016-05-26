$(function() {
//toggle-sidebar
    $('.toggle-sidebar').on('click', function(event) {
        event.preventDefault();
        $('.main').toggleClass('full-content');
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 768 && !($('.main').hasClass('full-content'))) {
            $('.toggle-sidebar').trigger('click');
        }
    });

//tooltip
    $('[data-toggle="tooltip"]').tooltip();
//check all
    $('.chkall').on('click', function() {
        var self = $(this);       
        if (self.prop("checked") == false) {
            self.parents('.batch-list').find('.chk').each(function() {
                $(this).prop('checked', false);
            });
        } else {
            self.parents('.batch-list').find('.chk').each(function() {
                $(this).prop('checked', true);
            });           
        }
    });
});
//img-uploaded remove
$('.img-uploaded').on('click', '.remove', function(event) {
    event.preventDefault();
    //todo:ajax delete image...

    var imgbox = $(this).parent().parent('.img-box-out');
    imgbox.siblings('input[type="file"]').show();
    imgbox.remove();
});

//zoom
$('.img-box-out').on('click', '.zoom', function(event) {
    event.preventDefault();
    //todo:ajax delete image...

    var imgup = $(this).parent().parent('.img-box-out');
    imgup.toggleClass('big');
});
