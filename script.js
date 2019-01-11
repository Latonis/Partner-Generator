

$(document).ready(function(){

    $('#add-button').click(function(){
        var inputs = $('#textinputs').clone();
        inputs.removeAttr("textinputs");
        inputs.addClass("newInputs");

    $('.container').after(inputs);

})

});
