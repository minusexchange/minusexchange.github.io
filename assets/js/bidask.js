var xdd = market;
function getBidAsk(market,timeout,bid,ask){
    $.ajax
            ({
                type:'post',
                url:orderbook_servers[0]+'/api/public/orderdata/latestBidandAsk.php',
                data:{
                    pair:market
                },
                complete:function(jx,error){
                    console.log(jx.responseText);
                    var bidask = JSON.parse(jx.responseText);
                     console.log(bidask);
                    $(bid).text(bidask.bidprice);
                    $(ask).text(bidask.askprice);
                    $('#spread').text(bidask.askprice-bidask.bidprice);
                    setTimeout(getBidAsk(xdd,1500), 3000);

                }
            });
}

if($('#index-heading').text()=="Trade"){
    getBidAsk(xdd,1500,'#bid','#ask');
       
}
if($('#index-heading').text()=="Minus Exchange"){
    getBidAsk('ethhkd',5000,'#bideh','#askeh');
       
}if($('#index-heading').text()=="Minus Exchange"){
    getBidAsk('btchkd',5000,'#bidbh','#askbh');
       
}

