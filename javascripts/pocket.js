var Pocket = function(){
	var unreadList = [];
	var feedUrl = "https://getpocket.com/users/asholds/feed/unread";
	//var jsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgetpocket.com%2Fusers%2Fasholds%2Ffeed%2Funread"
	var yqlQuery = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from feednormalizer where url="' + feedUrl + '"') + '&format=json';
console.log(yqlQuery)
	var getUnread = function(){
		unreadList = [];
		$('#links').html("");

		$.getJSON(yqlQuery, function (data, status, errorThrown) {
           	if (status === 'success') {
console.log(data.query.results.rss.channel.item);

           		if(data.query.results.rss.channel.item.title){
           			var item = {
			    		"title": data.query.results.rss.channel.item.title,
			    		"link": data.query.results.rss.channel.item.link
			    	}
			    	unreadList.push(item);
           		}else{
	            	$.each(data.query.results.rss.channel.item,function(i,v){
	            		var item = {
			    			"title": v.title,
			    			"link": v.link
			    		}
			    		unreadList.push(item);
	            	});
            	}
        	}
		    writeLinks();
    	});

		/*$.get(jsonUrl, function(data) {
		    if(data.status == "ok"){
		    	$.each(data.items,function(i,v){
		    		var item = {
		    			"title": v.title,
		    			"link": v.link.split('?')[0]
		    		}
		    		unreadList.push(item);
		    	})
		    }else{	unreadList.push({"title":"ERROR"}); }
		    writeLinks();
		});*/
	};

	var writeLinks = function(){
		$.each(unreadList, function(i,v){
			$('#links').append("<section class='unread_link' linkUrl='" + v.link + "'><span>"+ v.title + "</span></section>")
		});
	}

	var openSelected = function(){
		var selected = $('.selected');
		$.each(selected,function(i,v){
			window.open($(v).attr('linkurl'));
		})
	}

	return {
        getUnread: getUnread,
        openSelected: openSelected
    };
};



