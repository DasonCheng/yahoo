$(function() {
  
	var BASE_URL = "http://query.yahooapis.com/v1/public/yql?q=";
	var ygl_query = 'select * from yahoo.finance.quote where symbol in ("AAPL","AXP","BA","CAT","CSCO","CVX","DD","DIS","GE","GS","HD","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PFE","PG","TRV","UNH","UTX","V","VZ","WMT","XOM")'
	var ygl_query_str = encodeURI(BASE_URL+ygl_query);
    var query_str_final = ygl_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
	     

	$.getJSON(query_str_final, function (data) {
		console.log(data);
       	for(var i = 0; i < data.query.results.quote.length; i++) {

			var quoteObject = data.query.results.quote[i];
            var changeValue = quoteObject.Change;
            var changeSymbol = quoteObject.Symbol;
            document.getElementById("change").innerHTML = changeSymbol + ": " + changeValue;
            
            console.log(quoteObject)
            }
	});
});


 // ---------- To Get Stocks over a certain price ----------------//

// $.getJSON(query_str_final, function(data) {
// 		var quoteObject = data.query.results.quote
		
// 	      	for(var i = 0; i < quoteObject.length; i++) {
// 	      		if (data.query.results.quote[i].DaysHigh > 100) {
// 	      			console.log(quoteObject[i].DaysHigh)
//       		} else 
//       			console.log("ciabatta")
// 	      	}	
// 	});
