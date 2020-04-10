// header-nav.js
import "./info-profile.js";

class NavbarHeader extends HTMLElement {
	
	connectedCallback(){
		this.render();
	}

	render(){
		this.innerHTML = `
		<div class="navbar-header" id="app-bar">
			<h1>Newspaper</h1>
			<h2>containing various news in the world</h2>
			<p>sources obtained from <a href="newsapi.org">newsapi.org</a></p>
		</div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      <a class="nav-item nav-link active" href="#" data-toggle="modal" data-target="#exampleModalCenter">Info <span class="sr-only">(current)</span></a>
		    </div>
		  </div>
		</nav>
		`;
	}
}

customElements.define("navbar-header", NavbarHeader);