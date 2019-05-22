function elemento(e){
    var id = e.srcElement.id;
    var comp = e.srcElement.getAttribute('data-t');
    var comp2 = e.srcElement.parentElement.getAttribute('data-t');
    var comp3 = e.srcElement.getAttribute('data-t');
    //alert (comp);
    if(comp3 == "panel" || comp2 == "panel" || comp=="panel"  ){
    }else{
       var matriz= document.querySelectorAll('.panel');
       for (var i = 0; i < matriz.length; i+=1) {
       var a = matriz[i].getAttribute('id');
        document.getElementById(a).setAttribute('data-show','hidden');
        document.getElementById(a).setAttribute('style', 'display:none');
    }
    }
}
//
function accion(s) {
    var valor = document.getElementById(s).getAttribute('data-show');
    var matriz= document.querySelectorAll('.panel');
    
    for (var i = 0; i < matriz.length; i+=1) {
       var a = matriz[i].getAttribute('id');
        document.getElementById(a).setAttribute('data-show','hidden');
        document.getElementById(a).setAttribute('style', 'display:none');
    }

   // alert(s);
    if(valor == "hidden"){          
        document.getElementById(s).setAttribute('data-show','visible');
        document.getElementById(s).setAttribute('style', 'display:inline-block');
    }else{
        document.getElementById(s).setAttribute('data-show','hidden');
        document.getElementById(s).setAttribute('style', 'display:none');
    }
}

//// Detect when scrolled to bottom.
//var li = document.querySelector('body');
//window.addEventListener('scroll', function() {
//    //alert(window.scrollTop);
//    if(window.scrollY >= 200){
//         document.querySelector('#cab2').setAttribute('style', 'display:none');
//    }else{
//            document.querySelector('#cab2').setAttribute('style', 'display:block');
//    }
//    
//    //alert("se movió");
//});
//window.onscroll = function() {
//  console.log("Vertical: " + window.scrollY);
//  console.log("Horizontal: " + window.scrollX);
//  console.log("top: " + window.scroll);
//    
//
//};