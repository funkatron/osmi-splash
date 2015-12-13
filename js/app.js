// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
    // init the slick slider
    $('.quotes').slick({
        slidesToShow: 1,
        autoplaySpeed: 10000,
        autoplay: true,
        infinite: false,
        arrows: true,
        dots: false
    });


    $('.watch-list').delegate('.watch-list-item', 'click', function (e) {
        var $clicked = $(e.currentTarget);
        var ytid = $clicked.attr('data-ytid');
        var video_url = $clicked.attr('data-video-url');
        var audio_url = $clicked.attr('data-audio-url');
        var slides_url = $clicked.attr('data-slides-url');
        var event_name = $clicked.find('.watch-list-event').html();
        var event_date = $clicked.find('.watch-list-date').html();

        var tpl = '';

        if (video_url) {
            tpl = [
                '<div class="flex-video">',
                '    <iframe width="640" height="480" src="//www.youtube-nocookie.com/embed/' + ytid + '" frameborder="0" allowfullscreen></iframe>',
                '</div>',
                '<h3 class="talk-event"><a href="' + video_url + '">' + event_name + '</a></h3>',
                '<div class="talk-links">',
                '    <span class="talk-link"><a href="' + video_url + '"><i class="fa fa-youtube-square"></i> Video</a></span>',
                '    <span class="talk-link"><a href="' + slides_url + '"><i class="fa fa-paperclip"></i> Slides</a></span>',
                '</div>'
            ].join('\n');
        }
        if (audio_url) {
            tpl = [
                '<audio src="' + audio_url + '"></audio>',
                '<h3 class="talk-event"><a href="' + audio_url + '">' + event_name + '</a></h3>',
                '<div class="talk-links">',
                '    <span class="talk-link"><a href="' + audio_url + '">Audio</a></span>',
                '    <span class="talk-link"><a href="' + slides_url + '">Slides</a></span>',
                '</div>'
            ].join('\n');
        }
        $('.video-box').html(tpl);
        var as = audiojs.createAll();
        return false;
    })
});

$(document).ready(function() {
    vue.component
});