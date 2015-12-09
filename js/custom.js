$('.carousel.news').carousel({
  interval: 1000 * 10
});

var active_video_mask;
var active_iframe;

$('.video_mask').click(function(){
  iframe = $(this).closest('.item.news').find('iframe');
  iframe_source = iframe.attr('src');
  iframe_source = iframe_source + "&autoplay=1"
  iframe.attr('src', iframe_source);
  // hide the mask
  $(this).toggle();
  // stop the slideshow
  $('.carousel.news').carousel('pause');

  active_iframe = iframe;
});
$('.carousel.news').bind('slide.bs.carousel', function(){
  // var iframeID = $(this).find('.iframe.active').attr("id");
  // stop iframe from playing
  // turn on all masks
  $('.video_mask').show();
  // reset src of all videos
  $('.carousel.news').find('iframe').each(function(key, value){
    console.log($(this));
    $(this).stop();
    url = $(this).attr('src');
    if(url.indexOf("autoplay")>0){
      new_url = url.substring(0, url.indexOf("&"));
      $(this).attr('src', new_url);
    }
  });
});
