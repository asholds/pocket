var Pocket = function(){
	this.CONSUMER_KEY = "45183-065f155055460bdb3b563eef";

};

Pocket.prototype.authenticate = function(){
	console.log("auth");


	

$.post('https://getpocket.com/v3/oauth/request',{'consumer_key': this.CONSUMER_KEY, 'redirect_uri': 'http://asholds.github.io/pocket'},function(data){
		$('#content').html("result: "+data);
	},"json");

	

};