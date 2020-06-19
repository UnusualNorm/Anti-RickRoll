chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			console.log("All (known) rick-roll links have now been marked!");
			var links = [
				"dQw4w9WgXcQ",
				"42OleX0HR4E",
				"okqEVeNqBhc",
				"BROWqjuTM0g",
				"IAISUDbjXj0",
				"4zKshWnI3ok",
				"oHg5SJYRHA0",
				"6_b7RDuLwcI",
				"DD70oKDlemE"
			];
			for (var i=0; i < links.length; i++) {
				$(document).on('click', 'a[href*=' + links[i] + ']', function(e){
					if (!confirm('Are you sure?  You are about to get Rick Rolled. :/')) e.preventDefault();
				});
				$('a[href*=' + links[i] + ']').append(' <div class="rickrollbox"><img src="' + chrome.extension.getURL('icons/rickastley.png') + '" width="24"></div>');
				if (window.location.href.indexOf(links[i]) >= 0) {
					if (window.location.href.indexOf("youtube") >= 0) {
						$(".ytp-play-button").click();
					}
					var r = confirm("You are being rick rolled, but there is hope! press OK to dodge the blow and be redirected.");
					if (r == true) {
						top.location.href = chrome.extension.getURL('icons/rickastley.png');
					}
				}
			}
		}
	}, 10);
});
