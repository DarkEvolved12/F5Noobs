var login=document.getElementById('login')
    popUp=document.getElementById('popUp')
    botonCerrarLogin=document.getElementById('botonCerrarLogin')

login.addEventListener('click',function(){
    popUp.classList.add('active');
});
botonCerrarLogin.addEventListener('click',function(){
    popUp.classList.remove('active');
});