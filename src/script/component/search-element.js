// search-element.js
class SearchElement extends HTMLElement{
	connectedCallback(){
		this.render();
	}

	set clickEvent(event){
		this._clickEvent = event;
		this.render();
	}

	get value(){
		return this.querySelector("#searchElement").value;
	}

	render(){
		this.innerHTML = `
		<div class="card mb-4">
			<div class="card-body">
				<label for="searchElement">find what you are looking for, here.!</label>
				<div class="input-group mb-3 mt-4">
				  <input type="search" id="searchElement" class="form-control" placeholder="Search news.!" aria-label="Search News" aria-describedby="button-addon2">
				  <div class="input-group-append">
				    <button id="searchButtonElement" class="btn btn-outline-primary" type="sumbit" id="button-addon2">Search</button>
				  </div>
				</div>
			</div>
		</div>
		`;

		this.querySelector("#searchButtonElement").addEventListener('click', this._clickEvent);
	}
}

customElements.define("search-element", SearchElement)