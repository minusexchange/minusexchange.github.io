if($('#index-heading').text()=="Deposit BTC" && loginstatus==gii){
    var usrobj=JSON.parse(Cookies.get("usrobj"));
    var apikey = usrobj.apikey;
    $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/bitcoin/getNewBitcoinAddress.php',
                data:{
                    apikey:apikey
                },
                success:function(response) {
                    
                },
                complete:function(jx,error){
                    $('#loading').css('display','none');
                    $('#dep-addr').val(jx.responseText);
                    new QRCode(document.getElementById("btcqr"), jx.responseText);
                }
            });
}
