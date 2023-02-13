//  Step-01 add click event handleer with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('Submit btn clicked');

    // Step-2 get the email address inside the email fields
    // always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    
    //
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    //DANGER: DO NOT USER VERIFY EMIL THE CLKIENT SIDE
    //Step 04: verify email and password
    if(email === 'ss' && password === 'sss'){
        window.location.href = 'bank.html';
    }

    else{
       alert('invalied password or email')
    }

  
})