//contacts
function contacts_page(){
    wrapper2.innerHTML = `
			
    <!-- Page Content -->
                <div class="content container-fluid">

                	<div class="crms-title row bg-white">
                		<div class="col">
                			<h3 class="page-title m-0">
			                <span class="page-title-icon bg-gradient-primary text-white me-2">
			                  <i class="feather-user"></i>
			                </span> Contacts </h3>
                		</div>
                		<div class="col text-end">
                		</div>
                	</div>
					
					<!-- Page Header -->
					<div class="page-header pt-3 mb-0 ">
						<div class="row">
							<div class="col text-end">
								<ul class="list-inline-item ps-0">
					                <li class="list-inline-item">
					                    <button class="add btn btn-gradient-primary font-weight-bold text-white todo-list-add-btn btn-rounded" id="add-task" data-bs-toggle="modal" data-bs-target="#add_company">New Contact</button>
					                </li>
					            </ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable">
											<thead>
												<tr>
													<th class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</th>
													<th>Name</th>
													<th>Organization</th>
													<th>Title</th>
													<th>Email</th>
													<th>Phone</th>
													<th>Mailing Address</th>
													<th>Description</th>
												</tr>
											</thead>						
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Content End -->
					
                </div>
				<!-- /Page Content -->
				
            </div>
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->	

		<!-- Modal -->
			<div class="modal right fade" id="add_company" tabindex="-1" role="dialog" aria-modal="true">
				<div class="modal-dialog" role="document">
					<button type="button" class="close md-close" data-bs-dismiss="modal" aria-label="Close"> </button>
					<div class="modal-content">

						<div class="modal-header">
		                    <h4 class="modal-title text-center">Add Contact</h4>
		                    <button type="button" class="btn-close xs-close" data-bs-dismiss="modal"></button>
		                  </div>

						<div class="modal-body">
							<div class="row">
						        <div class="col-md-12">
						            <form>
						            	<h4>Name & Occupation</h4>
						            	<div class="form-group row">
				                            <div class="col-md-12"><label class="col-form-label">Name <span class="text-danger">*</span></label></div>

				                            <div class="col-md-4">
				                                <input class="form-control" type="text" placeholder="First Last" name="prefix-name">
				                            </div>
				                        </div>
						                <div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Organization</label>
                            					<input type="text" class="form-control"  name="Organization" placeholder="Organization">
											</div>
											<div class="col-sm-6">
												<label class="col-form-label">Title</label>
                            					<input type="text" class="form-control"  name="title" placeholder="Title">
											</div>
										</div>			            
										<h4>Contact Details</h4>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Email</label>
                            					<input type="text" class="form-control"  name="email" placeholder="Email">
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Phone</label>
                            					<input type="text" class="form-control" name="phone" placeholder="Phone">
											</div>
										<h4>Address Information</h4>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Mailing Address</label>
                            					<textarea class="form-control" rows="3" name="mailing-address" placeholder="Address"></textarea>
											</div>
										</div>							
										<h4>Description Information</h4>
										<div class="form-group row">
											<div class="col-sm-12">
												<label class="col-form-label">Description </label>
				                            	<textarea class="form-control" rows="3" id="description" placeholder="Description"></textarea>
											</div>
										</div>
										<h4>Notes</h4>
										<div class="form-group row">
											<div class="col-sm-12">
												<label class="col-form-label">Notes </label>
				                            	<textarea class="form-control" rows="3" id="description" placeholder="Notes"></textarea>
											</div>
										</div>
						                <div class="text-center py-3">
						                	<button type="button" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
						                </div>
						            </form>
						        </div>
							</div>

						</div>

					</div><!-- modal-content -->
				</div><!-- modal-dialog -->
			</div><!-- modal -->

			



`}


function get_companies(){
    wrapper2.innerHTML = `<div class="content container-fluid">

    <div class="crms-title row bg-white">
        <div class="col">
            <h3 class="page-title m-0">
            <span class="page-title-icon bg-gradient-primary text-white me-2">
              <i class="feather-database"></i>
            </span> Companies </h3>
        </div>
        <div class="col text-end">
        </div>
    </div>
    
    <!-- Page Header -->
    <div class="page-header pt-3 mb-0 ">
        <div class="row">
            <div class="col text-end">
                <ul class="list-inline-item ps-0">
                    <li class="list-inline-item">
                        <button class="add btn btn-gradient-primary font-weight-bold text-white todo-list-add-btn btn-rounded" id="add-task" data-bs-toggle="modal" data-bs-target="#add_company">New Company</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /Page Header -->
    
    <!-- Content Starts -->
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-0">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-nowrap custom-table mb-0 datatable">
                            <thead>
                                <tr>
                                    <th class="checkBox">
                                        <label class="container-checkbox">
                                              <input type="checkbox">
                                              <span class="checkmark"></span>
                                        </label>
                                    </th>
                                    <th>Company</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Email Domains</th>
                                    <th>Billing Address</th>
                                    <th>Shipping Address</th>
                                    <th>Description Information</th>
                                    <th>Pictures</th>
                                    <th>Documents</th>
                                </tr>
                            </thead>						
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Content End -->
    
</div>
<!-- /Page Content -->
				
            </div>
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->

		<!--modal section starts here-->
		<div class="modal fade" id="add-new-list">
          <div class="modal-dialog">
            <div class="modal-content">
            
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Add New List View</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              
              <!-- Modal body -->
              <div class="modal-body">
                <form class="forms-sample">
                  <div class="form-group row">
                    <label for="view-name" class="col-sm-4 col-form-label">New View Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="view-name" placeholder="New View Name">
                    </div>
                  </div>
                  <div class="form-group row pt-4">
                    <label class="col-sm-4 col-form-label">Sharing Settings</label>
                    <div class="col-sm-8">
                      <div class="form-group">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value=""> Just For Me <i class="input-helper"></i></label>
                        </div><br />
                        <div class="form-check">
                          <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked=""> Share Filter with Everyone <i class="input-helper"></i></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="text-center">
                    <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                  </div>
                </form>
              </div>
           
            </div>
          </div>
        </div>

		<!-- Modal -->
			<div class="modal right fade" id="add_company" tabindex="-1" role="dialog" aria-modal="true">
				<div class="modal-dialog" role="document">
					<button type="button" class="close md-close" data-bs-dismiss="modal" aria-label="Close"> </button>
					<div class="modal-content">

						<div class="modal-header">
		                    <h4 class="modal-title text-center">Add Company</h4>
		                    <button type="button" class="btn-close xs-close" data-bs-dismiss="modal"></button>
		                  </div>

						<div class="modal-body">
							<div class="row">
						        <div class="col-md-12">
						            <form>
						            	<h4>Organization Name</h4>
						            	<div class="form-group row">
				                            <div class="col-md-12">
				                            	<label class="col-form-label">Organization Name <span class="text-danger">*</span></label>
                              					<input class="form-control" type="text" placeholder="Organization Name" name="organization" >
				                            </div>
				                        </div>			            
										<h4>Organization Contact Details</h4>
										
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Phone</label>
                            					<input type="text" class="form-control" name="phone" placeholder="Phone">
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Website</label>
                            					<input type="text" class="form-control" name="website" placeholder="Website">
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Email Domains</label>
                            					<input type="text" class="form-control"  name="domains" placeholder="Email Domains">
											</div>
											
										</div>
										<h4>Address Information</h4>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Billing Address</label>
                            					<textarea class="form-control" rows="3" name="billing-address" placeholder="Billing Address"></textarea>
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Shipping Address</label>
                            					<textarea class="form-control" rows="3" name="shipping-address" placeholder="Shipping Address"></textarea>
											</div>
										</div>							
										<h4>Description Information</h4>
										<div class="form-group row">
											<div class="col-sm-12">
												<label class="col-form-label">Description </label>
				                            	<textarea class="form-control" rows="3" id="description" placeholder="Description"></textarea>
											</div>
										</div>
										<h4>Pictures</h4>
										<div class="form-group row">
											<div class="change-photo-btn">
												<div>
												<p>Add Photo</p></div>
												<input type="file" class="upload">
											</div>
										</div>
										<h4>Documents</h4>
										<div class="form-group row">
											<div class="change-photo-btn">
												<div>
												<p>Add Document</p></div>
												<input type="file" class="upload">
											</div>
										</div>
						                <div class="text-center py-3">
						                	<button type="button" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
						                </div>
						            </form>
						        </div>
							</div>

						</div>

					</div><!-- modal-content -->
				</div><!-- modal-dialog -->
			</div><!-- modal -->



`


}

function task_list_page(){
    wrapper2.innerHTML = 
    `
                <div class="content container-fluid">
					<div class="crms-title row bg-white">
                		<div class="col  p-0">
                			<h3 class="page-title m-0">
			                <span class="page-title-icon bg-gradient-primary text-white me-2">
			                  <i class="feather-smartphone" aria-hidden="true"></i>
			                </span> Task List </h3>
                		</div>
                	</div>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="bank-inner-details">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Task<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" >
                                                </div>
                                            </div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group modal-select-box">
													<label>Client</label>
													<input type="text" class="form-control" >
												</div>
											</div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group">
													<label>Date</label>
                                                    <input type="date" class="form-control" >
												</div>
											</div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group">
													<label>Location</label>
                                                    <input type="text" class="form-control" >
												</div>
											</div>
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add Image</p></div>
                                                        <input type="file" class="upload">
                                                    </div>
                                                </div>
                                            </div>
											<div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>File</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add File</p></div>
                                                        <input type="file" class="upload">
                                                    </div>
                                                </div>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note1"></textarea>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note2"></textarea>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note3"></textarea>
                                            </div>
											
                                        </div>
                                    </div>
                                </div>
                                <div class=" blog-categories-btn pt-0">
                                    <div class="bank-details-btn ">
                                        <a href="blog.html" class="btn btn-primary me-2">Add Task</a>
                                    </div>
                                </div>
                            </div> 
							<div class="submit-section">
								<div class="row">
									<div class="col-md-12">
										<div class="card mb-0">
											<div class="card-body">
												<div class="table-responsive">
													<table class="table table-striped table-nowrap custom-table mb-0 datatable">
														<thead>
															<tr>
																</th>
																<th>Task</th>
																<th>Client</th>
																<th>Date</th>
																<th>Location</th>
																<th>Image</th>
																<th>File</th>
																<th>Note1</th>
																<th>Note2</th>
																<th>Note3</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	Test
																</td>
																<td>
																	Nicholas
																</td>
																<td>
																	10/16/2020
																</td>
																<td>
																	Wisconsin
																</td>
																<td>
																	Test
																</td>
																<td>
																	Test
																</td>
																<td>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet ea possimus, eum mollitia impedit atque quam asperiores, assumenda libero accusantium perspiciatis quaerat magnam suscipit distinctio inventore, illum repudiandae aut.
																</td>
																<td>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia distinctio sint asperiores iste omnis nam iusto dolore est pariatur placeat in, consectetur officiis quidem odio nesciunt repudiandae exercitationem esse.
																</td>
																<td>
																	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet architecto ut eum porro, neque dolorum cum optio, repellat blanditiis saepe assumenda! Iusto autem dolore unde nemo corrupti, quo beatae hic.
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
                        </div>
                    </div>
                </div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->

        <!-- Modal -->
        <div class="modal fade confirmModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-3">
                    <div class="modal-header border-bottom-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <h5 class="mb-3">Confirm Save Changes</h5>
							<button type="button" class="btn btn-dark w-md" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary w-md" data-bs-dismiss="modal"
							onclick="nextTab()">Save changes</button>
                        </div>
                    </div>
                </div>

    `



}

function conversation_history(){
    wrapper2.innerHTML = `
    <div class="content container-fluid">

                	<div class="crms-title row bg-white">
                		<div class="col  p-0">
                			<h3 class="page-title m-0">
			                <span class="page-title-icon bg-gradient-primary text-white me-2">
			                  <i class="feather-smartphone" aria-hidden="true"></i>
			                </span> Conversation History </h3>
                		</div>
                	</div>

					<div class="row mt-4">
						
						
						<div class="col-xl-9 col-md-8">
							<div class="card invoices-settings-card">
								<div class="card-header px-3">
									<h5 class="card-title">Submit Call Time Form</h5>
								</div>
								<div class="card-body">
								
									<!-- Form -->
									<form action="#" class="invoices-settings-form">
										<div class="row align-items-center form-group">
											<label for="name" class="col-sm-3 col-form-label input-label">Company/Contact</label>
											<div class="col-sm-9">
												<div class="col-sm-9">
													<input type="text" class="form-control">
												</div>
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Date</label>
											<div class="col-sm-9">
												<input type="date" class="form-control">
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Call start time</label>
											<div class="col-sm-9">
												<input type="time" class="form-control">
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Call end time</label>
											<div class="col-sm-9">
												<input type="time" class="form-control">
											</div>
										</div>
										<div class="invoice-setting-btn text-end">
											<button type="submit" class="btn cancel-btn me-2">Cancel</button>
											<button type="submit" class="btn btn-primary">Save Call</button>
										</div>
									</form>
									<!-- /Form -->
									
								</div>
							</div>
						</div>
						<div class="submit-section">
							<div class="row">
								<div class="col-md-12">
									<div class="card mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-striped table-nowrap">
													<thead>
														<tr>
															<th>Company OR Contact</th>
															<th>Date</th>
															<th>Call start time</th>
															<th>Call end time</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td class="checkBox">
																Test
															</td>
															<td>05/16/2020</td>
															<td>9:00PM</td>
															<td>10:00PM</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
				<!-- /Page Content -->
				
            </div>
    
    
    
    `


}



function quick_notes(){
    wrapper2.innerHTML = `

    <div class="content container-fluid">
					<div class="crms-title row bg-white">
                		<div class="col  p-0">
                			<h3 class="page-title m-0">
			                <span class="page-title-icon bg-gradient-primary text-white me-2">
			                  <i class="feather-calendar" aria-hidden="true"></i>
			                </span> Quick Notes </h3>
                		</div>
                	</div>
                    <div class="row mt-4">		
                        <div class="col-lg-10 col-xl-9">	 
                                <div class="card new-comment clearfix">
                                    <div class="card-header">
                                        <h4 class="card-title">Add note</h4>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name">
                                                <label for="floatingInput">Company/contact name</label>
                                              </div>
                                            <div class="form-floating mb-3">
                                                <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com">
                                                <label for="floatingInput">Date<span class="text-danger">*</span></label>
                                              </div>
                                            <div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Comments"></textarea>
                                            </div>
											<div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>File</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add File</p></div>
                                                        <input type="file" class="upload">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="submit-section">
                                                <button class="submit-btn btn-primary btn-blog" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- /Leave Comment -->
                                
                                <div class="submit-section">
									<div class="row">
										<div class="col-md-12">
											<div class="card mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-striped table-nowrap custom-table mb-0 datatable">
															<thead>
																<tr>
																	</th>
																	<th>Company/contact name</th>
																	<th>Date</th>
																	<th>Comments</th>
																	<th>Files</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		Test
																	</td>
																	<td>
																		9:00PM
																	</td>
																	<td>
																		10:00PM
																	</td>
																	<td>
																		Link to file
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
            
                </div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->

        <!-- Modal -->
        <div class="modal fade confirmModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-3">
                    <div class="modal-header border-bottom-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <h5 class="mb-3">Confirm Save Changes</h5>
							<button type="button" class="btn btn-dark w-md" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary w-md" data-bs-dismiss="modal"
							onclick="nextTab()">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


    `
}


// let contactForm = document.querySelector('#cont_form');
// contactForm.addEventListener('submit', (e)=>{
// 	console.log("hi")
function add_contact(){
	let name = document.querySelector('#cont_name');
	let org = document.querySelector('#cont_org');
	let title = document.querySelector('#cont_title');
	let email = document.querySelector('#cont_email');
	let phone = document.querySelector('#cont_phone');
	let address = document.querySelector('#cont_address');
	let desc = document.querySelector('#cont_desc');
	let notes = document.querySelector('#cont_notes');

	let post_stuff = {
		'company id': 1,
		'company name': org,
		'contact name': name,
		description: desc,
		email: email,
		'mailing address': address,
		notes: notes,
		phone_num: phone,
		title: title


	}
	console.log(post_stuff)
	db.collection('Contacts').add(post_stuff).then(() => {
		contactForm.reset();
		
	})



}
