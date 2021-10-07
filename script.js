document.addEventListener("DOMContentLoaded", function() {
    var processout = new ProcessOut.ProcessOut("test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x");
    var formElement = document.getElementById("card-form");
    // calling setupForm causes tripled history entry in chrome!!!
    processout.setupForm(formElement, {}, function(form) {
    }, function(err) {
        console.log(err);
    });
});