/* globals TagInput */
'use strict';
var tags = ['hackathon', 'internship', 'scholarship', 'project'];
window.onload = function() {
    var numPosts = Math.ceil(Math.random() * 30);
    var postWrapper = document.getElementById('post-wrapper');
    for (var i = 0; i < numPosts; i++) {
        var chickens = Math.random() > 0.5 ? 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.' : 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.';
        var numChickens = Math.floor(Math.random() * 5);
        for (var c = 0; c < numChickens; c++) {
            chickens = Math.random() > 0.5 ? ' Collaboratively administrate empowered markets via plug-and-play networks. Dramatically visualize customer directed convergence without revolutionary ROI. ' : 'Podcasting operational change management inside of workflows to establish a framework. ' + chickens;
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