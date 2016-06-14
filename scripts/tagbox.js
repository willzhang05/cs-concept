'use strict';
class TagInput {
	constructor (input, wrapper) {
		this.input = input;
		this.wrapper = wrapper;

		this.tags = [];

		this.handleKeyPress = this.handleKeyPress.bind(this);

		this.init();
	}

	init () {
		this.input.addEventListener('keydown', this.handleKeyPress);

	}

	handleKeyPress (e) {

		if (e.which === 13 && this.input.value.length > 0 && !this.tags.includes(this.input.value)) {
			this.insertTag();
		} else if (e.which === 8 && this.input.value.length === 0 && this.tags.length > 0) {
			this.backspace();
		} else if (e.which === 37 && this.tags.length > 0) {
			this.shiftLeft();
		} else if (e.which === 39 && this.tags.length > 0) {
			this.shiftRight();
		}

		this.input.style.width = ((this.input.value.length + 1) * 14) + 'px';
	}

	newTag (message) {
		var tag = document.createElement('div');
		var messageText = document.createTextNode(message);
		tag.classList.add('tag');
		tag.appendChild(messageText);
		return tag;
	}

	insertTag () {

		var tag = this.newTag(this.input.value);
		this.wrapper.insertBefore(tag, this.input);

		this.tags.push(this.input.value);
		this.input.value = '';
		this.input.placeholder = '';
	}

	backspace () {
		this.wrapper.removeChild(this.input.previousSibling);
		console.log('deleted ' + this.tags.pop());
		console.log(this.tags);
		if (this.tags.length === 0)
			this.input.placeholder = 'Let\'s Get Connected!';
	}

	shiftLeft () {
		console.log('shift left');
		this.wrapper.insertBefore(this.input, this.input.previousSibling);
		this.input.style.width = '1px';
		this.input.focus();
	}

	shiftRight () {
		console.log('shift right');
		this.wrapper.insertBefore(this.input, this.input.nextSibling.nextSibling);
		this.input.style.width = '1px';
		this.input.focus();
	}

}
