$(document).ready(function() {
    var name = $("#name").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var message = $("#message").val();

    var nameFormat = /^[a-zA-Z]+$/;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/;

    $("#sendMsg").click(function() {

        $("#name").filter(function() {
            if(!nameFormat.test(name)) {
                alert("Invalid name. Please only use letters!");

            } else if(nameFormat.test(name)) {
                var service_id = 'abigaylerose03_gmail_com';
                var template_id = "template_wwuIo6KQ";
                var template_params = {
                    "from_name": name + " " + lname,
                    "to_name": "Abigayle",
                    "message_html": message

                }
                emailjs.send(service_id, template_id, template_params);
                confirm("Thanks for your email!");
                name.val("");

            }
        });
       
    });
});
