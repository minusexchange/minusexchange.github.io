if($('#NPV-heading').text()=="NPV" && loginstatus==gii){
    var email=Cookies.get("email");
    var pass=Cookies.get("password");
    $.ajax
            ({
                type:'post',
                url:usermgmt_servers[0]+'/api/public/finance/listAssets.php',
                data:{
                    email:email,
                    password:pass,
                    list:"all"
                },
        complete:function(jx,ror){
            $('#loading').css('display','none');
            var usrobj = JSON.parse(jx.responseText);
            console.log(usrobj);
            for(i=0;i<usrobj.available.length;++i){
                       var str=usrobj.available[i].amount;
                var avail = str.toString().replace("null","0"); 
                usrobj.freeze[i].amount.toString().replace("null","0");$('#assets-table').append('<tr>\
    <td>'+usrobj.available[i].currency+'</td>\
    <td>Available: '+usrobj.available[i].amount+' (Frozen: '+usrobj.freeze[i].amount+')<br /></td>\
    <td>\
        <div class="btn-group"><button class="btn btn-primary" type="button" style="background-color:rgb(255,255,255);color:rgb(59,153,224);">Trade</button><button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false" type="button"\
                style="background-color:rgb(255,255,255);color:rgb(59,153,224);"></button>\
            <div role="menu" class="dropdown-menu"><a role="presentation" href="javascript:openDepositWindow(\''+usrobj.available[i].currency+'\')" class="dropdown-item">Deposit</a><a role="presentation" href="javascript:openWithdrawalWindow(\''+usrobj.available[i].currency+'\')" class="dropdown-item">Withdraw</a></div>\
        </div>\
    </td>\
</tr>');
                        }
        }
            });
}
function openDepositWindow(currency){
    window.open('deposit'+currency+'.html','Deposit '+currency+' - Minus Exchange',width=600,height=300);
}
function openWithdrawalWindow(currency){
    window.open('withdraw'+currency+'.html','Withdraw '+currency+' - Minus Exchange',width=600,height=300);
}


