 var email=Cookies.get("email");
    var pass=Cookies.get("password");
var market=$("#market").val();
function doMyOrder(){
    $.ajax
            ({
                type:'post',
                url:orderbook_servers[0]+'/api/public/orderdata/userOrder.php',
                data:{
                    email:email,
                    password:pass,
                    pair:market
                },
        complete:function(jx,ror){
            
            var usrobj = JSON.parse(jx.responseText);
            console.log(usrobj);
            var tab='';
            for(var i=0;i<usrobj.length;i++){
                
                  tab  =tab.concat('<tr><td>'+usrobj[i].time+'</td><td>'+usrobj[i].price+'</td><td>'+usrobj[i].size);
                
            }
                $('#order-table').html(tab);
            
            
                        }
        
            });
}
if($('#index-heading').text()=="Trade" && loginstatus==gii){
  doMyOrder();
    
}
