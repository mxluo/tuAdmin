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
//img-uploaded remove
    $('.img-uploaded').on('click', '.del-img', function(event) {
        event.preventDefault();
        //todo:ajax delete image...

        var imgbox = $(this).parent().parent('.img-box-out');
        imgbox.siblings('input[type="file"]').show();
        imgbox.remove();
    });

//look img
    $('.img-box-out').on('click', '.look-img', function(event) {
        event.preventDefault();

        var imgup = $(this).parent().parent('.img-box-out');
        imgup.toggleClass('big');
    });

//zoom img
    $('.img-box-out').on('click', '.zoom', function(event) {
        event.preventDefault();

        var imgup = $(this).parent().parent('.img-box-out');
        imgup.toggleClass('big');
    });

//linkage_select
    $.fn.linkage_select = function(selectdata) {
        var selects = $(this).find('select');
        var select1 = $(selects[0]);
        var select2 = $(selects[1]);
        var select3 = $(selects[2]);
        var twodata = {};
        var threedata = {};
        select1.change(function() {
            select2.html('<option>请选择</option>');
            select3.html('<option>请选择</option>');            
            twodata = selectdata[$(this).val()].children;
            $.each(twodata, function(selk, selv) {
                if (select2.attr('data-default-val') == selk) {
                    select2.append('<option value="'+selk+'" selected>'+selv.name+'</option>');
                    select2.trigger('change');
                } else {
                    select2.append('<option value="'+selk+'">'+selv.name+'</option>');
                }
            });
        });
        select2.change(function() {
            select3.html('<option>请选择</option>');
            threedata = twodata[$(this).val()].children;
            $.each(threedata, function(selk, selv) {
                if (select3.attr('data-default-val') == selk) {
                    select3.append('<option value="'+selk+'" selected>'+selv.name+'</option>');
                } else {
                    select3.append('<option value="'+selk+'">'+selv.name+'</option>');
                }
            });
        });
        $.each(selectdata, function(selk, selv) {
            if (select1.attr('data-default-val') == selk) {
                select1.append('<option value="'+selk+'" selected>'+selv.name+'</option>');
                select1.trigger('change');
            } else {
                select1.append('<option value="'+selk+'">'+selv.name+'</option>');
            }
        });
    }
});