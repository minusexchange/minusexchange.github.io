var feed="";
$.get("https://minusexchange.com/feed/", function (data) {
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        //console.log("------------------------");
        //console.log("title      : " + el.find("title").text());
        feed=feed+el.find("title").text();
        console.log("author     : " + el.find("pubDate").text());
        feed=feed+" "+el.find("pubDate").text()+ " ";
        console.log("description: " + el.find("description").text());
        //feed=concat(feed+" ",el.find("pubDate").text());
    });
    $("#news").attr("data-marquee",feed);
});
$( "#news" ).click(function() {
  window.location.href="https://minusexchange.com";
});
