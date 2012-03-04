var Stick = require('hockeystick');

function loadTweets() {
    var rowData = [];
    var loader = Titanium.Network.createHTTPClient();
	loader.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=hockeyapp");
	loader.onload = function() {
		var tweets = eval('(' + this.responseText + ')');
		
		for (var index = 0; index < tweets.length; index++) {
    		var text = tweets[index].text;
		    var avatar = tweets[index].user.profile_image_url;
		    
		    var row = Titanium.UI.createTableViewRow({ height: 'auto' });
			var textLabel = Titanium.UI.createLabel({
			    text: text,
		    	top: 5, 
		    	right: 5, 
		    	bottom: 5, 
		    	left: 5, 
			    height: 'auto',
			    width: 'auto',
			    textAlign: 'left',
			    font: { fontSize: '14sp' }
			});
			row.add(textLabel);
			row.className = "row";
			
			row.addEventListener('click', function(e) {
				try {
					var alertDialog = (e.index != 2 ? Titanium.UI.createAlertDialog({ 
						title: 'Tweet', 
						message: tweets[e.index].text, 
						buttonNames: [ 'Dismiss' ]
					}) : null); 
					alertDialog.show();
				}
				catch (e) {
					Stick.reportCrash(e.stack);
					Stick.sendCrashes();
				}
			});
			
			rowData[index] = row; 
		}

		var tableView = Titanium.UI.createTableView( { data : rowData } );  
		Titanium.UI.currentWindow.add(tableView);
	};
	loader.send();
}


loadTweets();
