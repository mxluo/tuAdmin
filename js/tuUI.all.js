/**
* jQuery tuUI 1.0
* 
* https://github.com/VickyRoman/tuUI
*  
* Author VickyRoman 
* 
*/

/*
* 幻灯片 slideshow
*/
jQuery.fn.tuSlideshow = function(par) 
{
    //传参
    var def = {
        width: 800,
        height: 600,
        direction: 'h'
    }
    var opt = jQuery.extend(def, par);
    
    //函数
    var createCarat = function(c) {
        var carat = $('<div>');

        carat.addClass(c).append('<i></i>');
        return carat;
    }
    //获取节点
    var $obj = $(this),
        $ul = $obj.children('ul'),
        $li = $ul.children('li'),
        num = $li.length;
    //样式
    $obj.css({
        position: 'relative',
        width: opt.width + 'px',
        height: opt.height + 'px',
        overflow: 'hidden'
    });
    $ul.css({
        width: (num * opt.width) + 'px',
        height: opt.height + 'px',
        listStyle: 'none'
    });
    $li.css({
        float: 'left'
    }).children('img').css({
        width: opt.width + 'px',
        height: opt.height + 'px'
    });
    //按钮
    if (opt.direction == 'h') {
        var lc = createCarat('l');
        console.log(lc);
        $obj.append(lc);
    } else if(opt.direction == 'v') {

    }

}