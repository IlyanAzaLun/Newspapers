// news-article.js
import Swal from 'sweetalert2';
import './news-content.js';

class NewsArticles extends HTMLElement{

	set articles(articles){
		this._articles = articles;
		this.render();
	}

	render(){
		this.innerHTML = "";
		this._articles.slice(-5).forEach(content => {
			const newsArticleElement = document.createElement("news-content");
			newsArticleElement.content = content
			this.appendChild(newsArticleElement);
		})
	}

	renderError(message){
		return Swal.fire('Oops...', `Something went wrong!, the <b>${message}</b>`, 'error')
	}
}

customElements.define("news-articles", NewsArticles);
