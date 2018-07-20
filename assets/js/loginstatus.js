//get login status
var loginstatus = Cookies.get('login-status');

//redirect index to assets if logged in
var gii="true";
   if(($('#index-heading').text()=="Minus Exchange" || $('#index-heading').text()=="Start trading today") && loginstatus==gii){
    window.location.href = "assets.html";
}

if(loginstatus == gii){
    $('#login-logout').text("Logout");
    $('#login-logout').click(function (){
        window.location.href="index.html";
        Cookies.remove('login-status');
        
    });
}else{
    $('#login-logout').text("Login");
    $("#assets-nav").css('display','none');
     $("#settings-nav").css('display','none');
    if(($('#index-heading').text()=="Settings" || $('#NPV-heading').text()=="NPV")){
        window.location.href = "login.html";
    }
    if($('#index-heading').text()=="Trade"){
       $("#trading-panel").html("<h3 class=text-center>Please login or register to trade</h3>");
    }
}

