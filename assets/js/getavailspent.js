var market=$("#market").val();
var one=market.substring(0,3);
var two = market.substring(3,6);
var email=Cookies.get("email");
    var pass=Cookies.get("password");
    $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/finance/listAssets.php',
                data:{
                    email:email,
                    password:pass,
                    list:'["'+one.toUpperCase()+'","'+two.toUpperCase()+'"]'
                },
        complete:function(jx,ror){
            
            var usrobj = JSON.parse(jx.responseText);
            console.log(jx.responseText);
            $('#1-avail').text(usrobj.available[1].amount);
            $('#2-avail').text(usrobj.available[0].amount);
        }
            });
$('#1-spent').text($('#amount').val() * $('#price').val());
$('#2-spent').text($('#amount2').val() * $('#price2').val());