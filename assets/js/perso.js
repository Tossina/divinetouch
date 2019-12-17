/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));
jarallax(document.querySelectorAll('.jarallax-keep-img'), {
  keepImg: true,
});
$(document).ready(function(){
    Waves.init();
    Waves.attach('button', ['waves-light', 'waves-float']);
    Waves.attach('.btn', ['waves-light', 'waves-float']);
    Waves.attach(".btn-floating", ["waves-flat"]),
    Waves.attach(".btn-w", ["waves-float"]),
    Waves.attach(".btn-f", ["waves-flat"]),
    Waves.attach(".flat-box", ["waves-block"]),
    Waves.attach(".float-box", ["waves-block", "waves-float"]),
    Waves.attach(".card .card-image img", ["waves-light"]),
    Waves.attach(".light", ["waves-block", "waves-float", "waves-light"]),
    Waves.attach(".wave-img", ["waves-circle"]),
    Waves.attach(".flat-icon", ["waves-circle"]),
    Waves.attach(".float-icon", ["waves-circle", "waves-float"]),
    Waves.attach(".float-icon-light", ["waves-circle", "waves-float", "waves-light"])

  
    $('.timepicker').timepicker({
        default: 'now',
        twelveHour: false, // change to 12 hour AM/PM clock from 24 hour
        donetext: 'OK',
        format: "HH:ii:SS",
        autoclose: false,
        vibrate: true
    });

    $('.datepicker').datepicker({
        format:'dd/mm/yyyy',
        autoClose:true,
    });

    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
      accordion: false
    });

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    M.textareaAutoResize($('.autoresize'));
    $('input.NeyllieChCounter, textarea.NeyllieChCounter').characterCounter();
    $('.materialboxed').materialbox();
    $('.chips').chips();
    $('select').formSelect();

    var neyllie = $('.withCaption');
        neyllie.owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeOut: 5000, //5sec
            navText:['<i class="pe-7s-angle-left-circle pe-va pe-4x" aria-hidden="true"></i>','<i class="pe-7s-angle-right-circle pe-va pe-4x" aria-hidden="true"></i>'],
        });
        $('.captionNeyllie').addClass('animated fadeInDown');

        neyllie.on("changed.owl.carousel", function(event){
            // selecting the current active item
            var item = event.item.index-2;
            // first removing animation for all captions
            $('.captionNeyllie').removeClass('animated fadeInDown');
            // No animation in other captions so we need to add animation to owl-item while slide changed.
            $('.owl-item').not('.cloned').eq(item).find('.captionNeyllie').addClass('animated fadeInDown');
        })


    var owl = $('.loopClients');
      owl.owlCarousel({
          loop:true,
          margin:10,
          center:true,
          nav:false,
          dots:false,
          autoplay:false,
          /*autoplayTimeout:3000,*/
          autoplayHoverPause:true,
          responsive:{
            0:{
                items:1,
                stagePadding: 20,
            },
            600:{
                items:3,
                stagePadding: 20,
            },
            1000:{
                items:3,
                stagePadding: 40,
            },
            1600:{
                items:7,
                stagePadding: 20,
            },
        }
      });
      $('.prev').on('click',function(){
        owl.trigger('prev.owl.carousel', [300]);
      })
      $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000]);
      })
      $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay');
      })
      $('.next').on('click',function(){
        owl.trigger('next.owl.carousel');
      })


        $('.post-module').hover(function() {
            $(this).find('.description').stop().animate({
              height: "toggle",
              opacity: "toggle"
            }, 300);
          });

        /*------------------
        Background Set
        --------------------*/
        $('.set-bg').each(function() {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
            $(this).css('background-size', 'cover');
            $(this).css('background-position', 'center');
        });


        /*------------------
            Hero Slider
        --------------------*/
        $('.hero-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
            items: 1,
            autoplay: true,
            autoplayTimeOut: 3000,
            autoplayHoverPause:true
            //autoplay: true
        });
        var dot = $('.hero-slider .owl-dot');
        dot.each(function() {
            var index = $(this).index() + 1;
            if(index < 10){
                $(this).html('#').append(index);
                $(this).append('<span></span>');
            }else{
                $(this).html(index);
                $(this).append('<span></span>');
            }
        });
        

        $("#plusPhotos").on("click",function(){
        iziToast.show({
            id: 'neyllie',
            theme: 'dark',
            icon: 'pe-7s-user pe-va',
            title: 'Désolé',
            displayMode: 2,
            message: "Ce contenu sera disponible après l'hebergement du site",
            position: 'center',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            progressBarColor: '#ef6c00',
            imageWidth: 70,
            layout: 2,
            onClosing: function(){
                console.info('onClosing');
            },
            onClosed: function(instance, toast, closedBy){
                console.info('Closed | closedBy: ' + closedBy);
            },
            iconColor: '#ef6c00'
        });
    });

});	