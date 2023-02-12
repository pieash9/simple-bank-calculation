//step 1 add click handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2 get the email address inside user email input field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 3 get password
    //3.a set id  on the html element
    //3.b get the id
    //3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email ,password);
    //!Danger:  Do not verify email or password on the client side
    //step 4 : verify email and password for valid user or not
    if(email === 'sontan@baap.com' && password ==='secret'){
        location.href = 'bank.html';
    }
    else{
        alert('tui password vule gesos!! toke ami teijjo sontan ghosona krlam');
    }
})
