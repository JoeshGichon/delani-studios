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

// toggle effect on the what we do section
$(document).ready(function(){
    $("#design-icon").click(function(){
        $("#design-descr").toggle();
        $("#design-icon").hide();

        $("#design-descr").click(function(){
            $("#design-icon").show();
            $("#design-descr").hide();
        });
    });
    
    

    $("#development-icon").click(function(){
        $("#dev-descr").toggle();
        $("#development-icon").hide();

        $("#dev-descr").click(function(){
            $("#development-icon").show();
            $("#dev-descr").hide();
        });
    });

    $("#product-icon").click(function(){
        $("#product-descr").toggle();
        $("#product-icon").hide();

        $("#product-descr").click(function(){
            $("#product-icon").show();
            $("#product-descr").hide();
        });
    });
});

// hover effect on the portfilio section

$("document").ready(function(){
    $(".portfolio-items>div").hover(function(){
        $(".portfolio-items>div").addClass("portFolio-hover");
        $(".portfolio-items>div>img").removeClass("portFolio-hover");
    });
    
});






