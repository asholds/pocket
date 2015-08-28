var Pocket = function(){
	this.CONSUMER_KEY = "45183-065f155055460bdb3b563eef";
	this.ACCESS_TOKEN = "92e7eaaf-c665-63ce-c268-c84090";

};

Pocket.prototype.authenticate = function(){
	//console.log(this.CONSUMER_KEY);
	$.ajax({
		url: "https://www.getpocket.com/v3/oauth/request",
		type: "POST",
		dataType: 'jsonp',
		data: {
        		consumer_key: this.CONSUMER_KEY,
        		redirect_uri: "http://asholds.github.io/pocket"
    		},	
    		success: function( response ) {
        		console.log( response ); // server response
    		},
    		error: function(jqXHR, textStatus, errorThrown) {
    			console.log(jqXHR);
    			console.log(textStatus);
    			console.log(errorThrown);
    		}
	});
  

	

	

};
