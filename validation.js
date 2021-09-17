function validate(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var about = document.getElementById("about").value;
    var age = document.getElementById("age").value;
    var img = document.getElementById("img").value;
    var file = document.getElementById("file").value;
    var mydept = document.getElementById("mydept").value;
    var about = document.getElementById("about").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if (firstname == '' || lastname =='' || email == '' || phone == '' || age == '' || img == '' 
    || file == '' || mydept == '' || about == '' || date =='' ){
      alert("All fields are required.....!");
      return false;
    }
    else
    {
    if(firstname.value==" "){
      text = "Please Enter your FirstName";
      error_message.innerHTML = text;
      return false;
    }
    else if(firstname.length > 20){
      text = "Please Enter valid FirstName";
      error_message.innerHTML = text;
      return false;
    }
    if(lastname.value==" "){
      text = "Please Enter your LastName";
      error_message.innerHTML = text;
      return false;
    }
    else if(lastname.length > 20){
      text = "Please Enter valid LastName";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(about.length <= 50){
      text = "Please Enter Atleast 50 Characters";
      error_message.innerHTML = text;
      return false;
    }
  }
    alert("Form Submitted Successfully!");
    return true;
  }