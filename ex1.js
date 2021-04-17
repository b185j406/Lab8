function validate() { 
    var a;
    var b;
    if(a != b)
    {
        alert("Invalid Password");
    }
    else if(a.length < 8)
    {
        alert("Password needs to be at least 8 characters");
    }
    else
    {
        alert("Valid password");
    }
}