function validFname(){
    const first_name=document.getElementById('firstname').value 
    if(first_name==""){
        displayMsg('firstname must be mandatory','fnamemsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnamemsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only contains alphabets','fnamemsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnamemsg','green')
        return true
    }
}

function validLname(){
    const last_name=document.getElementById('lastname').value 
    if(last_name==""){
        displayMsg('lastname must be mandatory','lnamemsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnamemsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('lastname only contains alphabets','lnamemsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnamemsg','green')
        return true
    }
}

function validEmail(){
    const email=document.getElementById('email').value 
    if(email==""){
        displayMsg('email must be mandatory','emailmsg','red')
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email','emailmsg','red')
        return false
    }
    else{
        displayMsg('valid email','emailmsg','green')
        return true
    }
}

function validPassword(){
    const password=document.getElementById('password').value 
    if(password==""){
        displayMsg('password must be mandatory','passwordmsg','red')
        return false
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$.-_!]).{8,100}$/)){
        displayMsg('weak password,password should be like Ask@123 and minimum of 8 characters','passwordmsg','red')
        return false
    }
    else{
        displayMsg('strong password','passwordmsg','green')
        return true
    }
}




function displayMsg(msg,idValue,colorValue){
    document.getElementById(idValue).innerHTML=msg 
    document.getElementById(idValue).style.color=colorValue
}

function validForm(){
    if( validFname() && validLname() && validEmail() && validPassword()){
        return true
    }
    else{
        return false
    }
}