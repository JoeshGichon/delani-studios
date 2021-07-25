// backend logic/business logic
// forms data collection

$(document).ready(function(){
    $("form#collect").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        // acquiring inputed values
        let name = $("#name").val();
        let email = $("#email").val();
        let comments = $("#comments").val();

        alert("Thank You" + " " + name + " " + "for reaching you us.")
    });
});

// frontend logic/UI/UX

$(document).ready(function(){
    $("#design-icon").click(function(){
        $("#design-descr").toggle().css("text-aling","center");
        $("#what-we-do").css("font-weight","900","text-aling","center");
    });
    $("#development-icon").click(function(){
        $("#dev-descr").toggle().css("text-aling","center");
    });
    $("#product-icon").click(function(){
        $("#product-descr").toggle().css("text-aling","center");
    });
});





