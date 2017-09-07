var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var mainView = myApp.addView('.view-main',{domCache: true});

function toggle_eye(iconname , inputname) {
    if (document.getElementById(iconname).textContent === "eye"){
        
        document.getElementById(inputname).setAttribute('type','text');
        document.getElementById(iconname).textContent = "eye_fill";
    }
    
    else {
        document.getElementById(inputname).setAttribute('type','password');
        document.getElementById(iconname).textContent = "eye";
    }
    
}
 function active_signup() {
    document.getElementById('signup_page').classList.add('page_active');
    document.getElementById('signup_page').classList.remove('page_inactive');
    setTimeout(function() {document.getElementById('login_page').style.display="none";},400);
    document.getElementById('signup_page').style.display="block";
    
 }
 function back_to_login() {
    setTimeout(function() { document.getElementById('signup_page').classList.remove('page_active');},400);
    document.getElementById('signup_page').classList.add('page_inactive');
    document.getElementById('login_page').style.display="block";
    setTimeout(function() { document.getElementById('signup_page').style.display="none";},400);
 }
 
 var pickerDevice = myApp.picker({
    input: '#open-picker',
    cols: [
        {
            textAlign: 'center',
            values: ['مدرس', 'طالب', 'ولي أمر الطالب']
        }
    ]
});
 $$('#open-picker').on('click', function (e) {
    pickerDevice.open();
});
 
// $$('input').focus(function(){
//    $$('html, body').animate({
//        scrollTop: $$('input').offset().top
//    }, 200);
//    });