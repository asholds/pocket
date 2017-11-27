var Pocket = function(){
	var unreadList = [];
	var feedUrl = "https://getpocket.com/users/asholds/feed/unread";
	var jsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgetpocket.com%2Fusers%2Fasholds%2Ffeed%2Funread"

	var getUnread = function(){
		unreadList = [];
		$('#links').html("");

		$.get(jsonUrl, function(data) {
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
		});
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



