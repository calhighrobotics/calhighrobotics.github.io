function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password', 'enter your password please!');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "team1516ab") {
            alert('You Got it Right!');
            window.open('https://drive.google.com/open?id=0B5YYOq9dKJFucFg0anh1MDVyRkk');
            break;
        }
        testV += 1;
        var pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.', 'maybe you can get it right this time...');
    }
    if (pass1.toLowerCase() != "password" & testV == 3)
	    // very small annoyance
	    alert("Sorry man, this is what you get for sticking your nose where it doesn't belong.")
	    txt = "a";
	    while (1) {
	        txt = txt += "a"; //add as much as the browser can handle
	    }
    return " ";
}