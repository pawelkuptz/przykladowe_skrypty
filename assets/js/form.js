jQuery(document).ready(function(){

    var form = $("#myForm");
    var emailField = $("#emailField");
    var passwordField = $("#passwordField");
    var buttonSubmit = $("#submit");
    var results = $('#resultsPassword');
    var resultsCheckbox = $("#resultsCheckbox");
    // var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);
    var pattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[#$%^]){6,}/);
    var getFieldPassword;
    var inputType = $('#checkType');
    var resultsType = $('#resultsType');

    function checkPassword(){

        console.log('jestem tu');

        getFieldPassword = passwordField.val();

        if(pattern.test(getFieldPassword)){
            console.log('hasło jest ok');
            localStorage.setItem('MyPassword', getFieldPassword);
            results.text('Hasło jest poprawne i zapisano je w pamięci local storage.');
        }
        else{
            results.text('Hasło jest za słabe.');
        }

        console.log(getFieldPassword);
    }



    function checkCheckbox(){
        var x;
        var educationGroup = document.getElementById('myForm').education;
        var checkboxString="";

        for (x=0; x < educationGroup.length; x++){

            if(educationGroup[x].checked){
                checkboxString += educationGroup[x].value+' ';
            }
            resultsCheckbox.text(checkboxString);
        }
    }

    function checkType(){
        inputType.on('change',function(){
            var $this = $(this);
            var valueField = $this.val();

            var patt = new RegExp(/^[0-9]*$/); //only numbers
            var isNumber = patt.test(valueField);

            if(isNumber){
                resultsType.text('to jest liczba');
            }
            else if (typeof(valueField) == 'string'){
                resultsType.text('to jest string');
            }
        })
    }

    checkType();


    var person = ['Marcin','Paweł','Ania'];
    console.log(person.sort());

    for(var i = 0; i < person.length; i++){

        console.log(i+1+': '+ person[i]);
    }

    form.submit(function(e){
        e.preventDefault();

        checkPassword();
        checkCheckbox();

    });




});