$(document).ready(function() {
    $surface = $('.surface');
    $road = $('.road');
    $car = $('.car');
    $img = $('.car img');
    $night = $('.night');
    $switch = $('#checkbox');
    $planet = $('.planet');
    
    $body = $('body');

    $bodycar = $('.bodycar');
    $glasscar = $('.glasscar');
    $lightcar = $('.lightcar');
    
    let flag = true;
    let sun = true;

    

    var delayInMilliseconds = 1000;
    const cars = ['./assets/Img_05.png', './assets/Img_06.png'];
    $he = screen.height;
    $set = (1 - $he/930);
    
    $(document).on('load', function(e){
        $car.css('bottom', function(index, value){
            return parseFloat(value);
        });

        // $surface.css('height', function(index, value){
        //     return parseFloat(value)  * ($set + 100);
        // });

        // $road.css('height', function(index, value){
        //     return parseFloat(value) * ($set + 100);
        // });
    })


    $($switch).on('change', function(){
        
        $temp = $('.backgr-b').attr('data-src');
        $('.backgr-b').attr('data-src',$('.backgr-b').attr('src'));
        $('.backgr-b').attr('src',$temp)

        $temp = $('.backgr-s').attr('data-src');
        $('.backgr-s').attr('data-src',$('.backgr-s').attr('src'));
        $('.backgr-s').attr('src',$temp)
        if(sun){

            $bodycar.attr('fill', 'url(#BodyCarGradient)')
            $glasscar.attr('fill', 'url(#GlassCarGradient)')
            $lightcar.attr('xlink:href', '#sym-car-light')
            
            $planet.removeClass('planet-ani');
            setTimeout(() => { 
                $planet.addClass('planet-ani')
            }, 20);

            setTimeout(() => { 
                $planet.attr({
                    'xlink:href':'#pmoon',
                    'fill': 'url(#TheMoon)'
                });
                $planet.removeClass('filter-sun');
                $planet.addClass('filter-moon');
            }, 500);

            
            sun = false;
        }else{

            $bodycar.attr('fill', 'url(#BodyCarGradient2)')
            $glasscar.attr('fill', 'url(#GlassCarGradient2)')
            $lightcar.attr('xlink:href', '')

            $planet.removeClass('planet-ani');
            setTimeout(() => { 
                $planet.addClass('planet-ani')
            }, 20);

            setTimeout(() => { 
                $planet.attr({
                    'xlink:href':'#psun',
                    'fill': 'url(#TheSun)'
                })
                $planet.removeClass('filter-moon');
                $planet.addClass('filter-sun');
            }, 500);
            sun = true;

        }


    })


    $($surface).toggleClass('moveRight');
    $($car).toggleClass('suspension');
    $($planet).toggleClass('filter-sun');
    

    $(document).on('keypress', function(e) {
        if (e.which == 13) {
            if (flag) {
                flag = false;
                $img.attr('src', cars[0]);
            } else {
                flag = true;
                $img.attr('src', cars[1]);
            }
        }
    })

    
});


$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});