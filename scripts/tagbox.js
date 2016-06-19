'use strict'
class TagInput {
    constructor(input, wrapper) {
        this.input = input;
        this.wrapper = wrapper;
        this.types = ['hackathon', 'internship', 'scholarship', 'project'];
        this.tags = [];
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.init();
    }

    init() {
        this.input.addEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
    	var code = e.keyCode || e.charCode;
        if (code === 13 && this.input.value.length > 0 && this.tags.indexOf(this.input.value) === -1) {
            this.insertTag();
        } else if (code === 8 && this.input.value.length === 0 && this.tags.length > 0) {
            this.backspace();
        } else if (code === 37 && this.input.previousSibling.nodeType === Node.ELEMENT_NODE) {
            this.shiftLeft();
        } else if (code === 39 && this.input.nextSibling.nextSibling) {
            this.shiftRight();
        }
        this.input.style.width = ((this.input.value.length + 1) * 14) + 'px';
    }

    newTag(message) {
        var tag = document.createElement('div');
        var messageText = document.createTextNode(message);
        tag.classList.add('tag');
        tag.appendChild(messageText);
        return tag;
    }

    insertTag() {
        if (this.types.indexOf(this.input.value) != -1) {
            var tag = this.newTag(this.input.value);
            tag.className += ' ' + this.input.value;
            this.wrapper.insertBefore(tag, this.input);
            this.tags.push(this.input.value);
            var posts = document.getElementById('post-wrapper').children;
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].firstChild.firstChild.innerText != this.input.value) {
                    var contains = false;
                    for (var t = 0; t < tags.length; t++) {
                        if (this.tags[t] === posts[i].firstChild.firstChild.innerText) {
                            contains = true;
                            break;
                        }
                    }
                    posts[i].style.display = contains ? 'inline-block' : 'none';
                } else {
                    posts[i].style.display = 'inline-block';
                }
            }
        }
        this.input.value = this.input.placeholder = '';
    }

    backspace() {
        this.wrapper.removeChild(this.input.previousSibling);
        var del = this.tags.pop();
        var posts = document.getElementById('post-wrapper').children;
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].firstChild.firstChild.innerText != del) {
                posts[i].style.display = 'inline-block';
            }
        }
        console.log('deleted ' + del);
        console.log(this.tags);
        if (this.tags.length === 0)
            this.input.placeholder = 'Let\'s Get Connected!';
    }

    shiftLeft() {
        console.log(this.input.previousSibling);
        this.wrapper.insertBefore(this.input, this.input.previousSibling);
        this.input.style.width = '1px';
        this.input.focus();
    }

    shiftRight() {
        console.log('shift right');
        this.wrapper.insertBefore(this.input, this.input.nextSibling.nextSibling);
        this.input.style.width = '1px';
        this.input.focus();
    }

}