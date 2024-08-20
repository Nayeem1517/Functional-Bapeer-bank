//Adding The Event Handler to The Submit Button

document.getElementById('btn-submit').addEventListener('click',function(){
    //Getting the Email from Input Feild
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value ;
    
    //Getting The Password From The Input Feild\

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    //Compareing the Email And Password

    if(email === 'rebonya@gmail.com' && password === 'nayeemerbou'){
        window.location.href = 'interface.html'
    }
    else{
        alert('Tui Kar Poida Ree??')
    }
})