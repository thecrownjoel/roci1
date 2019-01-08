

var url1 = "https://api.iextrading.com/1.0/stock/"
var url2 = "/batch?types=quote,news"
var symb = "fb";
var json = url1 + symb + url2;

var myStocks = {
  AAXN: 52.54, 
  EXAS: 78.20, 
  FB: 159.97, 
  GOOS: 66.60,
  MDB: 43.53
};

var url = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aaxn,exas,fb,goos,mdb&types=quote';

fetchStocks();
setInterval(fetchStocks, 10000);

function fetchStocks() {
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: url,
    beforeSend: function() {
      $('table tbody').html('<tr><td colspan="4">Fetching...</td></tr>');
    },
    error: function() {
      console.log('error');
    },
    success: function(data) {
      $('table tbody').html('');
      $.each( data, function( key, value ) {
      var result = data[key].quote.latestPrice - myStocks[key];
      if (result <= -1) 
          var css_class = "result-pos";
        else {
          var css_class = "result-neg";
        }
  
      var html = "<tr>";
      html += "<td>"+key+"</td>";
      html += "<td>"+'$' + data[key].quote.latestPrice+"</td>";
      html += "<td>"+'$' + myStocks[key]+"</td>";
      html += '<td><span class="'+css_class+'">'+accounting.formatMoney(result, '$', 2, ',', '.')+'</span></td>';
      html += "</tr>";
  
      $('table tbody').append(html);
    });
    }
  });
}