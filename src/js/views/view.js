import spinner from 'url:../../images/spinner.svg';

export default class View {
	_data;
	_message = 'Something went wrong!! :(';

	render(data) {
		if (!data) return;
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this._message) {
		const markup = `<div class="spinner error">
         <h2 class="error__message heading">${message}</h2>
       </div>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderSpinner() {
		const markup = `
      <div class="spinner error">
         <svg>
            <use xlink:href="${spinner}#icon-spinner"></use>
         </svg>
       </div>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}
}
