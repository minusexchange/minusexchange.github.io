if($('#NPV-heading').text()=="NPV" && loginstatus==gii){
    var email=Cookies.get("email");
    var pass=Cookies.get("password");
    $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/login/getUserObject.php',
                data:{
                    email:email,
                    password:pass,
                },
                success:function(response) {
                    if(response!="login fail" || response!="no such user")
                    {
                        var usrobj = JSON.parse(response);
                        $("#user-name").text(usrobj.name);
                    }
                    else
                    {
                        $('#login-fail').css("display","block");
                    }
                },
                complete:function(jx,error){
                    Cookies.set('usrobj', jx.responseText, { expires: 1 });
                }
            });
}