// news-content.js

class NewsContent extends HTMLElement{

	set content(content){
		this._content = content;
		this.render();
	}

	render(){
		this.innerHTML = 
		`
		<div class="card mb-4">
			<h4 class="card-header">${this._content.title}</h4>
			<img src="${this._content.urlToImage}" class="card-img-top" alt="${this._content.urlToImage}">
			<div class="card-body">
				<p>${this._content.publishedAt}</p>
				<p>${this._content.author}</p>
				<p>${this._content.content}</p>
			</div>
			<div class="card-footer">
				<a href="${this._content.url}">${this._content.title}</a>
			</div<
		</div>
		`;
	}
}

customElements.define("news-content", NewsContent);