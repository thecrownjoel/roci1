

var url1 = "https://api.iextrading.com/1.0/stock/"
var url2 = "/batch?types=quote,news"
var symb = "fb";
var json = url1 + symb + url2;

$.getJSON( 'https://api.iextrading.com/1.0/stock/market/batch?symbols=AAXN,EXAS,FB,GOOS,MDB&types=quote' , function( data ) {

var url = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,tdoc,mdb,aaxn&types=quote';

$.ajax({
  method: 'GET',
  dataType: 'json',
  url: url,
  error: function() {
    console.log('error');
  },
  success: function(data) {
    $('#price1').append("$" + data.FB.quote.latestPrice);
    $.each( data, function( key, value ) {      
      $('#stocks').append('<li>' + key + ' ' + '$' + data[key].quote.latestPrice + ' ' + ' <i class="fas fa-caret-right"></i> ' + ' ' + '<span class="'+css_class+'">' + accounting.formatNumber(result, [precision = 0], [thousand = ","], [decimal = "."]) + '</span>' + '</li>');
      $('#price2').append("$" + data[key].quote.latestPrice);
    });
  }
});
  

var myStocks = {
    AAXN: 52.54, 
    EXAS: 78.20, 
    FB: 159.97, 
    GOOS: 66.60,
    MDB: 43.53
  };

  
var stock = data.FB.quote.open;
var myPrice = 159.97;
var final = stock - myPrice;

console.log(typeof(final));

$.each( data, function( key, value ) {
    // console.log(key + ': ' + data[key].quote.latestPrice);
    var result = data[key].quote.latestPrice - myStocks[key];
    if (result <= -1) 
        var css_class = "result-pos";
      else {
        var css_class = "result-neg";
      }
    $('#stocks').append('<li>' + key + ' ' + '$' + data[key].quote.latestPrice + ' ' + ' <i class="fas fa-caret-right"></i> ' + ' ' + '<span class="'+css_class+'">' + accounting.formatNumber(result, [precision = 0], [thousand = ","], [decimal = "."]) + '</span>' + '</li>');
    $('')
  });

});
