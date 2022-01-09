

// inputText.forEach(item => {
//     item.toggleEventListener('click', () => {
//         if(inputText == ''){
//             alert('You have to type a name')
//         }
//     });
// });



function validate(){

    let firstname = document.forms['myform']['fname']    
    let lastname = document.forms['myform']['lname']    
    let email = document.forms['myform']['email']    
    let password = document.forms['myform']['password']   
    
    let divFirstName = document.querySelector('.firstname');
    let divLasttName = document.querySelector('.lastname');
    let divemail = document.querySelector('.emailo');
    let divPassword = document.querySelector('.passwordo');
    
    if(firstname.value == ""){
        
        divFirstName.classList.toggle('active');
        firstname.focus();
        return false;
    }else{
        divFirstName.classList.remove('active');
    }
    if(lastname.value == ""){
        divLasttName.classList.toggle('active');
        lastname.focus();
        return false;
    }else{
        divLasttName.classList.remove('active');
    }
    if(email.value == ""){
        divemail.classList.toggle('active');
        email.focus();
        return false;
    }else{
        divemail.classList.remove('active');
    }
    if(password.value == ""){
        divPassword.classList.toggle('active');
        password.focus();
        return false;
    }else{
        divPassword.classList.remove('active');
    }
}