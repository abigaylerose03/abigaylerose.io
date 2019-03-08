$(document).ready(function() {

	$("#btn").click(function() {
		$("#email").filter(function() {
			var userEmail = $("#email").val();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,255})?$/;

			if(!emailReg.test(userEmail) || $("#email").val() == "") {
				alert("Please enter valid email");

			} else if(emailReg.test(userEmail)) {
				emailjs.init("user_AgJ808zwiP3Cm8Hhe0ZJM");
			      var service_id = 'abigaylerose03_gmail_com';
			      var template_id = 'email_template_2';
			      var template_params = {
				      to_name: 'Abigayle',
				      from_name: $("#name").val(),
				      message: $("#message").val(),
				      reply_to: $("#email").val()
			  		} 

		  		emailjs.send(service_id,template_id,template_params);
				alert("Thank you for your valid email");
				$("#email").val("");

			} else {
				alert("you should enter an email");
			}

		});

	});
});