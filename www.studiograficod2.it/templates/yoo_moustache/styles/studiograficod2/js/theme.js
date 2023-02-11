/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

	var config = $('html').data('config') || {};

	// Social buttons
	$('article[data-permalink]').socialButtons(config);

	// Fullscreen image & transparent fixed menu
    var fn              = function(){},
        win             = $(window),
        body            = $('body'),
        headerbar       = $('#tm-headerbar'),
        fullscreenPos   = $('.tm-fullscreen');
        fullscreenPosContainer   = $('.tm-fullscreen .container');
        fullscreenPosContent   = $('.tm-fullscreen .content');
        
    if (window.orientation !== undefined) {

        body.removeClass('tm-navbar-fixed');

    };

    if(body.hasClass('tm-navbar-fixed')) {
        
        //fixed modes

        if(body.hasClass('tm-navbar-transparent')){

            fn = function(){

                //setTimeout(function(){ fullscreenPos.css({"height": win.height() - headerbar.height()}); }, 200);
                setTimeout(function(){ fullscreenPosContainer.css({"height": win.height()}); }, 200);
                setTimeout(function(){ fullscreenPosContent.css({"padding-top": headerbar.height()}); }, 200);

                if(fullscreenPos.length && !body.hasClass('tm-navbar-slide')) {
                    headerbar.css({"position":'absolute'});
                }

            };

        } else {
            fn = function(){
                
                setTimeout(function(){
                    body.css("padding-top", headerbar.height());
                    headerbar.css({"position":'fixed'});
                    fullscreenPosContainer.css("height", win.height() - headerbar.height());

                    if(fullscreenPos.length && !body.hasClass('tm-navbar-slide')) {
                        headerbar.css({"position":'absolute'});
                    }

                }, 200);

            };

        }

    } else {
        
        if(body.hasClass('tm-navbar-transparent')){
            fn = function(){
                //setTimeout(function(){ fullscreenPos.css({"margin-top": -1 * headerbar.height(), "height": win.height()}); }, 200);
                //setTimeout(function(){ fullscreenPosContent.css({"padding-top": headerbar.height()}); }, 200);
                setTimeout(function(){ fullscreenPos.css({"margin-top": -1 * headerbar.height(), "height": win.height()}); }, 200);
            };

        } else {
            fn = function(){
                setTimeout(function(){ fullscreenPosContainer.css("height", win.height()); }, 200);
            };

        }

    }

    win.on("resize", function(){

        fn();

        return fn;

    }()).on("message", $.UIkit.Utils.debounce(function(e) {
        
        if (e.originalEvent.data == "customizer-update")  fn();

    }, 150));;

    win.on('scroll', function() {

        if(fullscreenPos.length && body.hasClass('tm-navbar-fixed')){

            if ((win.scrollTop() + headerbar.height() >= win.height())) {

                body.addClass('tm-navbar-slide');
                headerbar.css({"position":'fixed'});

            } else {

                body.removeClass('tm-navbar-slide');
                headerbar.css({"position":'absolute'});

            }

        }
        
    });

});
