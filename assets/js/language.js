zhlangpack='slogan=因減得加,\
loginb=登入,\
markets=市場,\
register=註冊,\
airdrop=什麼是MET？,\
gstarted=開始,\
uguide=用戶手冊,\
tariff=費用,\
legal=法律,\
pp=私隱政策,\
tos=條款與細則,\
fsafe=資金安全,\
contact=聯絡我們,\
bo=企業合作,\
lslogan=開始交易,\
email=登入電郵,\
pw=密碼,\
submit=提交,\
register=註冊,\
cpw=確認密碼,\
nameID=有效旅行文件上的姓名,\
bidtext=賣出,\
asktext=買入,\
spreadtext=點差,\
Mslogan=請登入或註冊以交易,\
chart=圖表,\
myorder=我的委託,\
time=時間,\
price=價格,\
size=數量,\
howdy=您好,\
NPV-heading=資產淨值,\
currencyt=貨幣,\
amountt=數量,\
actiont=動作,\
available=可用,\
frozen=涷結,\
trade=交易,\
deposit=存入,\
withdraw=提取,\
ttfadd=到以下地址,\
dadd=存入地址,\
copy=複制';

var lang = navigator.language || navigator.userLanguage;

if(lang.substring(0,2)=='zh'){
    var resources = zhlangpack.split(',');
    resources.forEach(function(item,index){
        var str=item.split('=');
        $('#'+str[0]).text(str[1]);
    });
}