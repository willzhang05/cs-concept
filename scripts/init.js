/* globals TagInput */
'use strict';
var tags = ['hackathon', 'internship', 'scholarship', 'project'];
window.onload = function() {
    var numPosts = Math.ceil(Math.random() * 30);
    var postWrapper = document.getElementById('post-wrapper');
    for (var i = 0; i < numPosts; i++) {
        var chickens = 'chickens';
        var numChickens = Math.ceil(Math.random() * 50);
        for (var c = 0; c < numChickens; c++) {
            chickens += ' chickens';
        }
        var titleWrapper = document.createElement('div');
        var title = document.createElement('h2');
        title.textContent = tags[Math.floor(Math.random() * tags.length)];
        var child = document.createElement('div');
        var content = document.createElement('div');
        content.className = 'post-content';
        content.textContent = chickens;
        child.className = 'post';
        titleWrapper.className = 'post-title ' + title.innerHTML;
        child.id = 'post-' + i;
        child.tag = title.textContent;
        titleWrapper.appendChild(title);
        child.appendChild(titleWrapper);
        child.appendChild(content);
        postWrapper.appendChild(child);
    }
    
    var tagInput = new TagInput(document.getElementById('tag-tb'), document.getElementById('tags'));
};