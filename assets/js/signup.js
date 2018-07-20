$('#submit-signup').click(function() {
    $('#ldivlogin').show();
        var email=$("#emailid2").val();
        var pass=$("#password2").val();
        var confpass=$("#confpass").val();
        var name=$("#name").val();
            $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/login/signup.php',
                data:{
                    email:email,
                    password:pass,
                    name:name
                },
                success:function(response) {
                    $('#ldivlogin').hide();
                    console.log(response+'sd');
                    if(response=="signup successful")
                    {
                        $('#signup-success').css("display","block");
                    }
                    else
                    {
                        $('#signup-fail').css("display","block");
                    }
                }
            });
        

        
    });