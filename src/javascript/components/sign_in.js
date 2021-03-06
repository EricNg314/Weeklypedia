
// Modularize this more, so that we can provide other html attributes as parameters
//  (for merging the sign-in/sign-up modals into a single modal generating function)
function signIn() {
    $('#app').html(`<!-- Button trigger modal -->
  
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sign In / Sign Up</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>


          <div class="modal-body">
              <form>
                  <!-- Input box for Email -->
                  <div class="form-group">
                      <label for="inputEmail"></label>
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                  <!-- Input box for Password -->
                  <div class="form-group">
                      <label for="inputPassword"></label>
                      <input type="password" class="form-control" id="password" placeholder="Password">
                  </div>
                 
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" id="signUp">Sign Up</button>
                  <button type="button" class="btn btn-primary" id="login">Sign In</button>
              </form>
          </div>
          <!-- Modal footer containing cancel and submit buttons -->
          <div class="modal-footer">
             
          </div>
      </div>
  </div>
</div>`);

   }
