// main.js
import '../component/news-articles.js';
import DataSource from '../data/data-source.js';

// const DataSource = new DataSource();

const main = () => {
	const searchElement = document.querySelector("search-element");
	const newsArticlesElement = document.querySelector("news-articles");

	const onLoadPage = () => {
		DataSource.onloadPage()
		.then(renderResult)
		.catch(fallbackResult)
	}

	const onButtonClicked = () => {
		DataSource.searchNews(searchElement.value)
		.then(renderResult)
		.catch(fallbackResult)

	};

	const renderResult = (results) => {
		// note : `articles`` meruppakan data yang di peroleh dari ``news-articles.js``
		newsArticlesElement.articles = results;
	};

	const fallbackResult = (message) => {
		newsArticlesElement.renderError(message);
	};
	
	onLoadPage(); // using API
	// renderResult(DataSource.onloadPage()); // using cache
	searchElement.clickEvent = onButtonClicked;
}

export default main;