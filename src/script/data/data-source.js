// data-source.js
import news from './news.js';

class DataSource{
	// Using Cache
	// static onloadPage(){
	// 	return news;
	// }

	// Using Cache
	// API : b2b8d5069cda4bff82491b26f23156f1
	static onloadPage(){
		return fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=b2b8d5069cda4bff82491b26f23156f1`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.totalResults > 0) {
				return Promise.resolve(responseJson.articles);
			}else{
				return Promise.reject(responseJson.message);
			}
		})
		.catch(error => {
			console.log(error)
			return Promise.reject(error);
		})
	}

	static searchNews(keywoard){
		return fetch(`https://newsapi.org/v2/everything?q=${keywoard}&apiKey=b2b8d5069cda4bff82491b26f23156f1`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.totalResults > 0) {
				return Promise.resolve(responseJson.articles);
			}else{
				return Promise.reject(keywoard);
			}
		})
		.catch(error => {
			console.log(error)
			return Promise.reject(error);
		})

	};
}

export default DataSource;