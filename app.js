function drop(el){
    const menu = document.getElementById('menu_drop');
    if(menu.classList.contains('mobile_colapse')){
        console.log('has');
        menu.classList.remove('mobile_colapse');
    } else {
        console.log('not');
        menu.classList.add('mobile_colapse');
    }
}