chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		var links = ["dQw4w9WgXcQ", "42OleX0HR4E"];
		for (var i=0; i < links.length; i++) {
			$(document).on('click', 'a[href*=' + links[i] + ']', function(e){
				if (!confirm('Are you sure?  You are about to get Rick Rolled. :/')) e.preventDefault();
			});
			$('a[href*=' + links[i] + ']').append(' <div class="rickrollbox"><img src="' + chrome.extension.getURL('icons/rickastley.png') + '" width="24"></div>');
			if (window.location.href.indexOf(links[i]) >= 0) {
				alert("You've been rick rolled. :'(");
			}
		}
	}
	}, 10);
});
