var $submit = $('.btn-show-hide');
var $box = $('.box');
var $btn = $('.btn-move');
var $dia = $('.diamond');
var $btncollapse = $('.btn-collapse-expand');
var $panel = $('.panel')
var $circle = $('.circle')       
var $btnbounce = $('.btn-bounce')
var $btnAppend = $('.btn-append')
var $list = $('.list')

$submit.on('click', function () {
    $box.toggleClass('show');
})

$btn.on('click', function () {
    $dia.toggleClass('move');
})

$btncollapse.on('click', function () {
    $panel.animate({height: 'toggle'});
})

$btnbounce.on('click', function () {
    $circle.addClass('js-circle');
})


$circle.on('animationend', function () {
    $circle.removeClass('js-circle');
})


$btnAppend.on('click', function () {
    var $li = $('<li>').html('new list item');
    
    $list.prepend($li);
    $li.toggleClass('list-animation');
});