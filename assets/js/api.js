jQuery(document).ready(function(){

    var pattern = 'https://gwo.pl/booksApi/v1/search?query=';
    var url;

    var form = $("#formApi");
    var inputBook = $('#inputBook');
    var inputSubmit = $('#inputSubmit');
    var results = $('#results');
    var code;


    var getURL = function(){
        var valueBook = inputBook.val();
        url = pattern+valueBook;
        return url;
    };

    form.submit(function(e){
        e.preventDefault();


        $.ajax({
            url: getURL(),
            dataType: 'json',
            cache: false,
        })

            .success(function(data) {
                // alert( "success" );
                var i;

                code="";

                for(i=0; i < data.length; i++){
                    code += "<div class='col-xs-12 col-md-4'>";
                    code += "<img src="+ data[i].cover +" />";
                    code += "<h1>"+ data[i].title +"</h1>";
                    code += "</div>";
                }

                results.html(code);
            })

            .fail(function() {
                alert( "error" );
            })

            .done(function( html ) {
                // alert('done');
                // $( "#results" ).append( html );
            });



    });
});