if($('#index-heading').text()=="Deposit ETH" && loginstatus==gii){
    var usrobj=JSON.parse(Cookies.get("usrobj"));
    var uid = usrobj.id;
    $.ajax
            ({
                type:'post',
                url:'https://minusexchange.com:3888/neweth',
                data:{
                    uid:uid
                },
                success:function(response) {
                    
                },
                complete:function(jx,error){
                    $('#loading').css('display','none');
                    $('#dep-addr').val(jx.responseText);
                    new QRCode(document.getElementById("ethqr"), jx.responseText);
                }
            });
}
