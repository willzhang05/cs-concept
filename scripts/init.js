"use strict";
window.onload = function() {
	var numPosts = Math.floor(Math.random() * 20);
	var postWrapper = document.getElementById("post-wrapper");
	for(var i = 0; i < numPosts; i++) {
		var chickens = "chickens";
		var numChickens = Math.floor(Math.random() * 5);
		for(var c = 0; c < numChickens; c++) {
			chickens += " " + chickens;
		}
		var child = document.createElement("div");
		child.className = "post";
		child.innerText = chickens;
		postWrapper.appendChild(child);
	}
}