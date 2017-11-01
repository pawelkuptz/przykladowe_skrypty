jQuery(document).ready(function(){

    var myGalleryItems = $("#myGalleryItems");
    var eachPhoto = $("#myGalleryItems .photo");
    var reveal;

    function createReveal(){
        reveal = "";
        reveal += '<div class="reveal">';
        reveal += '<div class="reveal__wrapper">';
        reveal += '<div class="reveal__wrapper__container">';
        reveal += '<span id="revealClose" class="revealClose">X</span>';
        reveal += '<div class="revealPhoto" style="display: none"></div>';
        reveal += '</div>';
        reveal += '</div>';
        reveal += '</div>';
        $(reveal).appendTo('body');


        setTimeout(function(){
            $('.revealPhoto').fadeIn('500');
        },200);


        $('#revealClose').on('click', function(){
            $('.reveal').remove();
        });


        $('.reveal').on('click', function(e){
            if($(e.target).hasClass('reveal')){
                $('.reveal').remove();
            }
        })

    }


    eachPhoto.on('click',function(){
        var $this = $(this);

        createReveal();

        var img = $this.children().attr('src');
        $('.revealPhoto').css('backgroundImage', 'url(' + img + ')');

    })

});