function home(){
window.location.assign("./index.html")
}
function about(){
    window.location.assign("./about.html")
   
}
function product(){
    window.location.assign("./products.html")
}
function contact(){
    window.location.assign("./contact.html")
}
// 
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});



// 