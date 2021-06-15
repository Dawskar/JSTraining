function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["femail"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["fpassword"].value;
    if (x == "") {
      alert("Password must be filled out");
      return false;
    }
  }
