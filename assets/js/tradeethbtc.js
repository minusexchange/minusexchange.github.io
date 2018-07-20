var email = Cookies.get("email");
var pass = Cookies.get("password");
var market = $("#market").val();
var pair = market.substring(0, 3) + '/' + market.substring(3, 6);


$("#submit-buy").click(function doLogin() {


    var price = $("#price").val();
    var amount = $("#amount").val() * price;

    if (email != "" && pass != "" && price != '' && amount != '') {
        $.ajax
        ({
            type: 'post',
            url: orderbook_servers[0] + '/api/public/trading/shootLimitOrder.php',
            data: {
                email: email,
                password: pass,
                pair: pair,
                price: price,
                size: amount
            },
            success: function (response) {
                $('#alert-trading').html('<div role="alert" class="alert alert-secondary"><span>' + response + '</span></div>');
                doMyOrder();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }

        });
    }
});
$("#submit-sell").click(function doBuy() {

    var market = $("#market").val();
    var price = $("#price2").val();
    var amount = $("#amount2").val() * -1;

    if (email != "" && pass != "" && price != '' && amount != '') {
        $.ajax
        ({
            type: 'post',
            url: orderbook_servers[0] + '/api/public/trading/shootLimitOrder.php',
            data: {
                email: email,
                password: pass,
                pair: pair,
                price: price,
                size: amount
            },
            success: function (response) {
                $('#alert-trading').html('<div role="alert" class="alert alert-secondary"><span>' + response + '</span></div>');
                doMyOrder();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }
});