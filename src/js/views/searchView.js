import View from './view.js';

class SearchView extends View {
	_parentEl = document.querySelector('.info__box');
	_input = document.querySelector('.search__input');
	_form = document.querySelector('.form__search');

   addSearchHandler(handler){
      this._form.addEventListener('submit', function(e){
         e.preventDefault()
         const ip = this.querySelector('.search__input');
         if(!ip.value) return;
         handler(ip.value)
         ip.value = '';
      })
   }

	_generateMarkup() {
		return `
         <div class="info__box--box info__box--box-ip">
            <h4 class="heading">ip address</h4>
            <h2 class="heading">${this._data.ip}</h2>
         </div>
         <div class="info__box--box info__box--box-location">
            <h4 class="heading">location</h4>
            <h2 class="heading">${this._data.location.city}, ${this._data.location.region}</h2>
         </div>
         <div class="info__box--box info__box--box-timezone">
            <h4 class="heading">timezone</h4>
            <h2 class="heading">UTC ${this._data.location.timezone}</h2>
         </div>
         <div class="info__box--box info__box--box-isp">
            <h4 class="heading">isp</h4>
            <h2 class="heading">${this._data.isp}</h2>
         </div>
      `;
	}
}

export default new SearchView();
