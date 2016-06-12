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
			console.log('New Tag: ' + this.input.value);
			this.wrapper.appendChild(this.newTag(this.input.value));
			this.tags.push(this.input.value);
			this.input.value = '';
			this.input.placeholder = '';
		} else if (e.which === 8 && this.input.value.length === 0 && this.tags.length > 0) {
			this.wrapper.removeChild(this.wrapper.lastChild);
			console.log('deleted ' + this.tags.pop());
			console.log(this.tags);
			if (this.tags.length === 0)
				this.input.placeholder = 'Let\'s Get Connected!';
		}
	}

	newTag (message) {
		var tag = document.createElement('div');
		var messageText = document.createTextNode(message);
		tag.classList.add('tag');
		tag.appendChild(messageText);
		return tag;
	}

}
