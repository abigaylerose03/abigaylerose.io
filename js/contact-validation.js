function validate(inputText) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/;
    var nameFormat = /^[a-zA-Z]+$/;
    var numFormat = /^[0-9][\.-]?$/;
    

    if(inputText.value.match(mailFormat)) {
        document.form.email.focus();
        return true;
    } else if(inputText.value.match(nameFormat)) {
        document.form.name.focus();
        return true;
    } else if(inputText.value.match(numFormat)) {
        document.form.contact.focus();
        return true;
    } else {
        alert("You have entered an invalid field!");
        return false;
    }
}
