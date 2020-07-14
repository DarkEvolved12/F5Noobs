var login=document.getElementById('login')
    popUp=document.getElementById('popUp')
    botonCerrarLogin=document.getElementById('botonCerrarLogin')

login.addEventListener('click',function(){
    popUp.classList.add('active');
});
botonCerrarLogin.addEventListener('click',function(){
    popUp.classList.remove('active');
});
                                       /*************** PopUp OfrecerItem ***************/
var botonOfrecerProducto=document.getElementById('botonOfrecerProducto') 
    popUpOfrecerProducto=document.getElementById('popUpOfrecerProducto')
    botonCerrarOfrecerItem=document.getElementById('botonCerrarOfrecerItem')
    
botonOfrecerProducto.addEventListener('click',function(){
    popUpOfrecerProducto.classList.add('active');
});
botonCerrarOfrecerItem.addEventListener('click',function(){
    popUpOfrecerProducto.classList.remove('active');
}); 