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





