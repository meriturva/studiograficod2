jQuery( function($) {
    if ($("#tm-fullscreen .container").length > 0){
      setTimeout(function(){
            $('#tm-fullscreen .container').parallax({
              calibrateX: true,
              calibrateY: true,
              frictionX: 0.1,
              frictionY: 0.1,
              limitX: 5,
              limitY: 5
            });
      }, 200);
      
      //Preload fullscreen images
      $('#tm-fullscreen').animate({ opacity: 0 }, 300);
      $('#tm-fullscreen .container .layer div').waitForImages(function() {
        $('#tm-fullscreen').animate({ opacity: 1 }, 300);
      },null,true);
      
      //Slide fullscreen
      $('.tm-fullscroll-bar a').click(function(){
        $('.tm-fullscroll-bar a').removeClass('uk-active');
        $(this).addClass('uk-active');
        
        $('#tm-fullscreen .container[class*="theme"]').removeClass(function(i, c) {
          return c.match(/theme\d+/g).join(" ");
        });
        liIndex = $(this).parent().index() +1;
        liIndex = $(this).data("index");  
        $('#tm-fullscreen').animate({ opacity: 0 }, 300, function() {
          $('#tm-fullscreen .container').addClass('theme'+(liIndex));
          $('#tm-fullscreen .container .layer div').waitForImages(function() {
            $('#tm-fullscreen').animate({ opacity: 1 }, { duration: 300 });
          },null,true);
        });
      });
    }
    
    //ipad and iphone fix
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $('.uk-overlay-area.visual').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:400}');
        $('.uk-overlay-area.web').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:600}');
        $('.uk-overlay-area.multimedia').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:800}');
        $('.uk-overlay-area.software').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:1000}');
        
        $('.fade-1 .uk-overlay-area').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:400}');
        $('.fade-2 .uk-overlay-area').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:600}');
        $('.fade-3 .uk-overlay-area').attr('data-uk-scrollspy', '{cls:\'showed\', repeat: true, delay:800}');
    }
});

