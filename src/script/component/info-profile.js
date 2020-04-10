// info-profile.js
class InfoProfile extends HTMLElement{

	connectedCallback(){

		this.innerHTML = 
		`
		<!-- Modal -->
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalCenterTitle">Information</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <p>This application was made in between my free time, to add and improve my knowledge and experience in bulid applications</p>
		        <p>This application is not yet fully perfect, and is still under development</p>
		        <q>Terimakasih kepada Dicoding</q>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		`;
		
	}
}

customElements.define("info-profile", InfoProfile);