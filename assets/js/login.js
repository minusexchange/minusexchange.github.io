$('#ldivlogin').hide();
$("#submit-login").click(function doLogin() {
    $('#ldivlogin').show();
        var email=$("#emailid").val();
        var pass=$("#password").val();
        if(email!="" && pass!="")
        {
            $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/login/signin.php',
                data:{
                    email:email,
                    password:pass
                },
                success:function(response) {
                    $('#ldivlogin').hide();
                    if(response=="login successful")
                    {
                        
                        Cookies.set('login-status', 'true', { expires: 1 });
                        Cookies.set('email', email, { expires: 1 });
                        Cookies.set('password', pass, { expires: 1 });
                        window.location.href="/assets.html";
                    }
                    else
                    {
                        $('#login-fail').css("display","block");
                    }
                }
            });
        }
});