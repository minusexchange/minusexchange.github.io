var xdd = market;
function getOrderbook(market,timeout,bid,ask){
    $.ajax
            ({
                type:'post',
                url:orderbook_servers[0]+'/api/public/orderdata/orderbook.php',
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
		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		

		window.onload = function() {
            var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

		};
            
            
			var ctx = document.getElementById('orderbook').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: false,
						text: 'Chart.js Horizontal Bar Chart'
					}
				}
			});

		};

