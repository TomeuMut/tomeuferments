export default function () {

    document.onmousemove = function(e) {
        moveCursor(e)
    };
    $(document).mouseleave(function(e) {
        const cursor = $('#cursor');
        cursor.hide()
    });
    $(document).mouseenter(function(e) {
        const cursor = $('#cursor');
        cursor.show()
    });
    function moveCursor(e) {
        const cursor = $('#cursor');
        const target = $(event.target);
        // update position of cursor
        cursor.css('left', e.clientX-59).css('top', e.clientY-59);

        let isLinkTag = target.is('.js-cursor-change');
        if(target.parents('.js-cursor-change').length > 0) {
            isLinkTag = true
        }
        if(target.parents('.js-cursor-hide').length > 0) {
            isLinkTag = false
        }
        const isHovered = cursor.hasClass('hoveredCursor');
        if(isLinkTag === true && !isHovered) {
            let textCursor='';
            if(target.hasClass('js-cursor-change')) {
                textCursor = target.attr('data-cursor-text')
            }else {
                textCursor = target.parents('.js-cursor-change').attr('data-cursor-text')
            }
            console.log(target.parents('.js-cursor-change'))
            cursor.text(textCursor)
            cursor.addClass('hoveredCursor');

        } else if(!isLinkTag) {

            cursor.removeClass('hoveredCursor');

        }
    }
}
