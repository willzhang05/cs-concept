'use strict';
var tags = ['hackathon', 'internship', 'scholarship', 'project'];
window.onload = function() {
	var numPosts = Math.ceil(Math.random() * 20);
	var postWrapper = document.getElementById('post-wrapper');
	for(var i = 0; i < numPosts; i++) {
		var chickens = 'chickens';
		var numChickens = Math.ceil(Math.random() * 20);
		for(var c = 0; c < numChickens; c++) {
			chickens += ' chickens';
		}
		var title = document.createElement('h2');
		title.innerText = tags[Math.floor(Math.random() * tags.length)];
		var child = document.createElement('div');
		var content = document.createElement('div');
		content.innerText = chickens;
		child.className = 'post';
		// child.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
		child.appendChild(title);
		child.appendChild(content);
		postWrapper.appendChild(child);
	}
};
