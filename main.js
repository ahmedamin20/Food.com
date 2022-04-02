window.addEventListener('scroll' , function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
function togglemenu(){
    const menutoggle=document.querySelector('.menutoggle')
    const navigation=document.querySelector('.navigation')
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
}

