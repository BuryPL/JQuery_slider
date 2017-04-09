//'use strict';
$(function () {
    var slider = $('#slider');
    var slideShow = $('.slide_show');
    var slideCount = $('.single_slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;

    slideShow.css({'width': slideCount*100 + '%'});

    slideShow.find('.single_slide').each(function (index) {
        $(this).css({
            'margin-left': index*slideWidth + '%',
            'width': slideWidth + '%'});
    });
    $('.prev_slide').click(function(){slide(slideIndex - 1);});
    $('.next_slide').click(function(){slide(slideIndex + 1);});
    
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {return;};
    
        var slideCaption = slider.find('.slider_caption').eq(newSlideIndex);
        
        slideCaption.hide();
        
        var marginLeft = (newSlideIndex*(-100)) + '%';
        
        slideShow.animate({"margin-left": marginLeft}, 800, function() {
           slideIndex = newSlideIndex;
            slideCaption.fadeIn("slow");
        });
        
    };
});