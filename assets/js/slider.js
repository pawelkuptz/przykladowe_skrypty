jQuery(document).ready(function(){

    /* mySlider */

    function mySlider() {
        var active;
        var dot = "dot";
        var activeDot;
        var mySliderItems =  $('#mySliderItems');
        var mySliderDots =  $('#mySliderDots');
        var dots = document.getElementById('mySliderDots');


        /*function dots nav*/
        if(mySliderDots.length > 0){
            (function navDots(){
                var x;
                var constructor="";
                constructor += '<ul>';

                for(x=0; x < mySliderItems.children().length; x++){
                    var number = x+1;
                    constructor += '<li class="'+ dot +'">';
                    constructor += '<a href="#slide-' + number + '"></a>';
                    constructor += '</li>';
                }
                constructor += '</ul>';
                dots.innerHTML = constructor;


                //click on dots
                $('#mySliderDots').find('.dot').on('click', function(){
                    var $this = $(this);
                    var amount = $this.closest('ul').children();
                    var position = amount.index($this);  //current position click

                    $('.dot').removeClass('active').eq(position).addClass('active');
                    $('.item').removeClass('active').eq(position).addClass('active');
                });

            })();
        }



        /* set active item */
        function setActive(number){
            if(mySliderItems.length){
                mySliderItems.children().eq(number-1).addClass('active');
            }
            if(mySliderDots.length){
                $("#mySliderDots ul").children().eq(number-1).addClass('active');
            }
        }
        setActive(1); //set active slide start


        mySliderItems.children().each(function(){
            var $this = $(this);

            var img = $this.attr('data-img');
            $this[0].style.backgroundImage = "url("+ img + ")";
        });


        /*set ID items */
        (function setId(){
            mySliderItems.children().each(function(){
                var index = $(this).index()+1;
                $(this).attr('id', 'slide-'+index);
            });
        })();


        /* function nextSlide */
        (function nextSlide(){

            $("#next").on('click', function(){
                active = mySliderItems.find('.active');
                activeDot = mySliderDots.find('.active');

                function slideItem(){
                    active.removeClass('active');
                    active.next().addClass('active');
                }

                function slideDot(){
                    activeDot.removeClass('active');
                    activeDot.next().addClass('active');
                }

                if(!(mySliderItems.children().last().hasClass('active'))){
                    console.log('uwaga! ostatni element!');
                    slideItem();
                    slideDot();
                }

            })
        })();

        /* function prevSlide*/
        (function prevSlide(){
            $("#prev").on('click', function(){
                active = mySliderItems.find('.active');
                activeDot = mySliderDots.find('.active');

                function slideItem(){
                    active.removeClass('active');
                    active.prev().addClass('active');
                }

                function slideDot(){
                    activeDot.removeClass('active');
                    activeDot.prev().addClass('active');
                }

                if(!(mySliderItems.children().first().hasClass('active'))){
                    console.log('uwaga! pierwszy element!');
                    slideItem();
                    slideDot();
                }
            })
        })();

    }
    mySlider();
});