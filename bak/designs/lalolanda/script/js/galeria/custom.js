(function($) {
  "use strict";
//------------------------------------------
  //Sticky Header
//------------------------------------------
jQuery(window).load(function(){
  jQuery(".ta-main-nav").sticky({ topSpacing: 0 });
});
//------------------------------------------
  //Counter Up
//------------------------------------------
function counterUp() {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
}
counterUp();
//------------------------------------------
  //progress-bar
//------------------------------------------
function progressbarr() {
  $('.progress .progress-bar').progressbar({display_text: 'fill'});
}
progressbarr();
//------------------------------------------
  //searchmodal
//------------------------------------------
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
//------------------------------------------
    //ta-portfolio
//------------------------------------------
jQuery('.portfolio-view').magnificPopup({
  type: 'image',
  gallery:{
  enabled:true
  }
})
//------------------------------------------
    //scroll-top
//------------------------------------------
  $(".ta_scroll").hide(); 
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.ta_scroll').fadeIn();
      } else {
        $('.ta_scroll').fadeOut();
      }
    });   
    $('a.ta_scroll').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  /*
//------------------------------------------
    //mailchimp
//------------------------------------------
$('.mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        url: "//" //Replace this with your own mailchimp post URL.  
    });

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<span class="fa fa-check-circle-o"></span>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);
        }
        else if (resp.result === 'error') {
            $('.subscription-error').html('<span class="fa fa-times-circle-o"></span>' + resp.msg).fadeIn(1000);
        }
    } 
//------------------------------------------
    //ta-service
//------------------------------------------
function serviceslider() {
  $("#service").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : true,
      paginationSpeed : 400,
      items : 3,
      autoPlay : true,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
serviceslider();
//------------------------------------------
    //ta-portfolio
//------------------------------------------
function portfolioslider() {
  $("#portfolio").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : true,
      paginationSpeed : 400,
      items : 3,
      autoPlay : true,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
portfolioslider();
//------------------------------------------
    //ta-testimonial
//------------------------------------------
function testimonialslider() {
  $("#ta-testimonial").owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : true,
      paginationSpeed : 400,
      items : 2,
      lazyLoad : true,
      autoPlay : true,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
testimonialslider();
//------------------------------------------
    //ta-client
//------------------------------------------
function clientslider() {
  $("#ta-client").owlCarousel({
    items : 4,
    lazyLoad : true,
    pagination: true,
    autoPlay: true,
    autoPlay: 2000,
    navigation : true,
    autoPlay : true,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
clientslider();
//------------------------------------------
    //ta-blog-slider
//------------------------------------------
function blogslider() {
  $(".blog-slider").owlCarousel({
      navigation : true, // Show next and prev buttons
      pagination : true,
      paginationSpeed : 400,
      singleItem:true,
      lazyLoad : true,
      autoPlay : true,
      autoPlay: 2000,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
blogslider();
//------------------------------------------
    //ta-blog-slider
//------------------------------------------
function viewdetailslider() {
  $(".ta-view-detail-slider").owlCarousel({
      navigation : true, // Show next and prev buttons
      pagination : true,
      paginationSpeed : 400,
      singleItem:true,
      lazyLoad : true,
      autoPlay : true,
      autoPlay: 2000,
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
viewdetailslider();
//------------------------------------------
    //ta-slider
//------------------------------------------
function homeslider() {
  $("#ta-slider").owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : true,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : true,
      transitionStyle : "backSlide",
      navigationText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]
  });
}
homeslider();
*/

jQuery( ".form-control" )
  .focusout(function() {
    if ($(this).val()=="")
    $(this).removeClass("input-filled");
  })
  .focusin(function() {
    $(this).addClass("input-filled");
})

})(jQuery);