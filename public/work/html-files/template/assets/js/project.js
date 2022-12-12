//contacts
function contacts_page() {
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
											<thead id = "contacts_table">
												<tr>
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
								<form id = "cont_form">
								<h4>Name & Occupation</h4>
								<div class="form-group row">
									<div class="col-md-12"><label class="col-form-label">Name <span class="text-danger">*</span></label></div>

									<div class="col-md-4">
										<input class="form-control" type="text" placeholder="First Last" name="prefix-name" id = "cont_name">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-6">
										<label class="col-form-label">Organization</label>
										<select class ="form-control" id = cont_org>
											<option value=""></option>
									  	</select>
									</div>
									<div class="col-sm-6">
										<label class="col-form-label">Title</label>
										<input type="text" class="form-control"  name="title" placeholder="Title" id = "cont_title">
									</div>
								</div>			            
								<h4>Contact Details</h4>
								<div class="form-group row">
									<div class="col-sm-6">
										<label class="col-form-label">Email</label>
										<input type="text" class="form-control"  name="email" placeholder="Email" id = "cont_email">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-6">
										<label class="col-form-label">Phone</label>
										<input type="text" class="form-control" name="phone" placeholder="Phone" id = "cont_phone">
									</div>
								<h4>Address Information</h4>
								<div class="form-group row">
									<div class="col-sm-6">
										<label class="col-form-label">Mailing Address</label>
										<textarea class="form-control" rows="3" name="mailing-address" placeholder="Address" id = "cont_address"></textarea>
									</div>
								</div>							
								<h4>Description Information</h4>
								<div class="form-group row">
									<div class="col-sm-12">
										<label class="col-form-label">Description </label>
										<textarea class="form-control" rows="3" id="cont_desc" placeholder="Description"></textarea>
									</div>
								</div>
								<h4>Notes</h4>
								<div class="form-group row">
									<div class="col-sm-12">
										<label class="col-form-label">Notes </label>
										<textarea class="form-control" rows="3"placeholder="Notes" id = "cont_notes"></textarea>
									</div>
								</div>
								<div class="text-center py-3">
									<button type="button" class="border-0 btn btn-primary btn-gradient-primary btn-rounded" onclick="add_contact()">Save</button>&nbsp;&nbsp;
								</div>
							</form>
						        </div>
							</div>

						</div>

					</div><!-- modal-content -->
				</div><!-- modal-dialog -->
			</div><!-- modal -->

			



`;
  var contactref = db.collection("Contacts");
  contactref.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      contacts_table.innerHTML += `
		  <tr>	
			  <td>${doc.data().contact_name}</td>
			  <td>${doc.data().company_name}</td>
			  <td>${doc.data().title}</td>
			  <td>${doc.data().email}</td>
			  <td>${doc.data().phone_num}</td>
			  <td>${doc.data().mailing_address}</td>
			  <td>${doc.data().description}</td>
			  
  </tr>
	  `;
    });
  });

  var companyref = db.collection("Company");
  let sorted_company = companyref.orderBy("name");
  sorted_company.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      cont_org.innerHTML += `
			<option value="${doc.data().name}">${doc.data().name}</option>
		
		`;
    });
  });
}

function get_companies() {
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
                            <thead id = "company_table">
                                <tr>
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
						            <form id = "comp_form">
						            	<h4>Organization Name</h4>
						            	<div class="form-group row">
				                            <div class="col-md-12">
				                            	<label class="col-form-label">Organization Name <span class="text-danger">*</span></label>
                              					<input class="form-control" type="text" placeholder="Organization Name" name="organization" id = "comp_name">
				                            </div>
				                        </div>			            
										<h4>Organization Contact Details</h4>
										
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Phone</label>
                            					<input type="text" class="form-control" name="phone" placeholder="Phone" id = "comp_phone">
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Website</label>
                            					<input type="text" class="form-control" name="website" placeholder="Website" id = "comp_website">
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Email Domains</label>
                            					<input type="text" class="form-control"  name="domains" placeholder="Email Domains" id = "comp_emailDom">
											</div>
											
										</div>
										<h4>Address Information</h4>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Billing Address</label>
                            					<textarea class="form-control" rows="3" name="billing-address" placeholder="Billing Address" id = "comp_billAdd"></textarea>
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm-6">
												<label class="col-form-label">Shipping Address</label>
                            					<textarea class="form-control" rows="3" name="shipping-address" placeholder="Shipping Address" id = "comp_shipAdd"></textarea>
											</div>
										</div>							
										<h4>Description Information</h4>
										<div class="form-group row">
											<div class="col-sm-12">
												<label class="col-form-label">Description </label>
				                            	<textarea class="form-control" rows="3" id="comp_desc" placeholder="Description"></textarea>
											</div>
										</div>
										<h4>Pictures</h4>
										<div class="form-group row">
											<div class="change-photo-btn">
												<div>
												<p>Add Photo</p></div>
												<input type="file" class="upload" id = "comp_pics">
											</div>
										</div>
										<h4>Documents</h4>
										<div class="form-group row">
											<div class="change-photo-btn">
												<div>
												<p>Add Document</p></div>
												<input type="file" class="upload" id = "comp_docs">
											</div>
										</div>
						                <div class="text-center py-3">
						                	<button type="button" class="border-0 btn btn-primary btn-gradient-primary btn-rounded" onclick="add_company()">Save</button>&nbsp;&nbsp;
						                </div>
						            </form>
						        </div>
							</div>

						</div>

					</div><!-- modal-content -->
				</div><!-- modal-dialog -->
			</div><!-- modal -->


`;
  var companyref = db.collection("Company");
  companyref.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      company_table.innerHTML += `
		  <tr>	
			  <td>${doc.data().name}</td>
			  <td>${doc.data().phone_num}</td>
			  <td>${doc.data().website}</td>
			  <td>${doc.data().email}</td>
			  <td>${doc.data().billing_address}</td>
			  <td>${doc.data().shipping_address}</td>
			  <td>${doc.data().description}</td>
			  
  </tr>
	  `;
    });
  });
}

function task_list_page() {
  wrapper2.innerHTML = `
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
										<form id = "task_form">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Task<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id ="task_name">
                                                </div>
                                            </div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group modal-select-box">
													<label>Client</label>
													<input type="text" class="form-control" id ="task_client_name" >
												</div>
											</div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group">
													<label>Date</label>
                                                    <input type="date" class="form-control" id = "task_date">
												</div>
											</div>
											<div class="col-lg-12 col-md-12">
												<div class="form-group">
													<label>Location</label>
                                                    <input type="text" class="form-control" id = "task_location">
												</div>
											</div>
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add Image</p></div>
                                                        <input type="file" class="upload" id = "task_img">
                                                    </div>
                                                </div>
                                            </div>
											<div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>File</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add File</p></div>
                                                        <input type="file" class="upload" id = "task_file" >
                                                    </div>
                                                </div>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note1" id = "task_note1"></textarea>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note2" id = "task_note2"></textarea>
                                            </div>
											<div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Note3" id = "task_note3"></textarea>
                                            </div>
											</form>
                                        </div>
                                    </div>
                                </div>
                                <div class=" blog-categories-btn pt-0">
                                    <div class="bank-details-btn ">
                                        <button type="button" class="border-0 btn btn-primary btn-gradient-primary btn-rounded" onclick="add_task()">Add Task</button>&nbsp;&nbsp;
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
														<thead id = "tasktable">
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


    `;
}

function conversation_history() {
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
									<form action="#" class="invoices-settings-form" id = "convo_form">
										<div class="row align-items-center form-group">
											<label for="name" class="col-sm-3 col-form-label input-label">Company</label>
											<div class="col-sm-9">

											<select class ="form-control" id = "convo_company">
												<option value=""></option>
									  		</select>
												
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="name" class="col-sm-3 col-form-label input-label">Contact</label>
											<div class="col-sm-9">
											<select class ="form-control" id = "convo_contact">
												<option value=""></option>
										  	</select>
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Date</label>
											<div class="col-sm-9">
												<input type="date" class="form-control" id = "convo_date">
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Call start time</label>
											<div class="col-sm-9">
												<input type="time" class="form-control" id = "start_time">
											</div>
										</div>
										<div class="row align-items-center form-group">
											<label for="time" class="col-sm-3 col-form-label input-label">Call end time</label>
											<div class="col-sm-9">
												<input type="time" class="form-control" id = "end_time">
											</div>
										</div>
										<div class="invoice-setting-btn text-end">
											<button type="submit" class="btn cancel-btn me-2">Cancel</button>
											<button type="submit" class="btn btn-primary" onclick = "add_convo()">Save Call</button>
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
													<thead id = "convo_table">
														<tr>
															<th>Company</th>
															<th>Contact</th>
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
    
    
    
    `;
  var convoref = db.collection("Conversation");
  var sorted_convos = convoref.orderBy("Date", "desc");
  convoref.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      convo_table.innerHTML += `
			  <tr>	
				  <td>${doc.data().company}</td>
				  <td>${doc.data().contact}</td>
				  <td>${doc.data().date}</td>
				  <td>${doc.data().call_start}</td>
				  <td>${doc.data().call_end}</td>
	  </tr>
		  `;
    });
  });

  var companyref = db.collection("Company");
  let sorted_company = companyref.orderBy("name");
  sorted_company.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      convo_company.innerHTML += `
			<option value="${doc.data().name}">${doc.data().name}</option>
		
		`;
    });
  });

  var contactref = db.collection("Contacts");
  let sorted_contacts = contactref.orderBy("contact_name");
  sorted_contacts.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      convo_contact.innerHTML += `
			<option value="${doc.data().contact_name}">${doc.data().contact_name}</option>
		
		`;
    });
  });
}

{
  /* <div class="col-sm-9">
													<input type="text" class="form-control" id ="convo_company">
												</div> */
}

function quick_notes() {
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
                                        <form action="#" class="invoices-settings-form" id = "notes_form">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" placeholder="Enter your name" id = "notes_name">
                                                <label for="floatingInput">Company/contact name</label>
                                              </div>
                                            <div class="form-floating mb-3">
                                                <input type="date" class="form-control" placeholder="name@example.com" id = "notes_date">
                                                <label for="floatingInput">Date<span class="text-danger">*</span></label>
                                              </div>
                                            <div class="form-group">
                                                <textarea rows="4" class="form-control bg-grey" placeholder="Comments" id = "notes_comments"></textarea>
                                            </div>
											<div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>File</label>
                                                    <div class="change-photo-btn">
                                                        <div>
                                                        <p>Add File</p></div>
                                                        <input type="file" class="upload" id = "notes_file">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="submit-section">
                                                <button class="submit-btn btn-primary btn-blog" type="submit" onclick = "add_notes()">Submit</button>
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
															<thead id = "quick_notes_table">
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
																		9/16/22
																	</td>
																	<td>
																		Any Comments
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


    `;
  display_quick_notes();
}
function display_quick_notes() {
  var notesref = db.collection("Notes");
  notesref.get().then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      quick_notes_table.innerHTML += `
			  <tr>	
				  <td>${doc.data().company_name}</td>
				  <td>${doc.data().date}</td>
				  <td>${doc.data().comments}</td>
				  <td>${doc.data().file}</td>
	  </tr>
		  `;
    });
  });
}

// contactForm.addEventListener('submit', (e)=>{
// 	console.log("hi")
function add_contact() {
  let contactForm = document.querySelector("#cont_form");
  let name = document.querySelector("#cont_name").value;
  let org = document.querySelector("#cont_org").value;
  let title = document.querySelector("#cont_title").value;
  let email = document.querySelector("#cont_email").value;
  let phone = document.querySelector("#cont_phone").value;
  let address = document.querySelector("#cont_address").value;
  let desc = document.querySelector("#cont_desc").value;
  let notes = document.querySelector("#cont_notes").value;

  let post_stuff = {
    contact_id: 1,
    company_name: org,
    contact_name: name,
    description: desc,
    email: email,
    mailing_address: address,
    notes: notes,
    phone_num: phone,
    title: title,
  };

  console.log(post_stuff);
  db.collection("Contacts")
    .add(post_stuff)
    .then(() => {
      contactForm.reset();
    });
}

function add_company() {
  let companyForm = document.querySelector("#comp_form");
  let compName = document.querySelector("#comp_name").value;
  let phone = document.querySelector("#comp_phone").value;
  let compWebsite = document.querySelector("#comp_website").value;
  let emailDomain = document.querySelector("#comp_emailDom").value;
  let billAdd = document.querySelector("#comp_billAdd").value;
  let shipAdd = document.querySelector("#comp_shipAdd").value;
  let desc = document.querySelector("#comp_desc").value;
  let pics = document.querySelector("#comp_pics").value;
  let docs = document.querySelector("#comp_docs").value;

  let post_moreStuff = {
    billing_address: billAdd,
    description: desc,
    email_domain: emailDomain,
    files: docs,
    name: compName,
    phone_num: phone,
    photos: pics,
    shipping_address: shipAdd,
    website: compWebsite,
  };

  console.log(post_moreStuff);

  db.collection("Company")
    .add(post_moreStuff)
    .then(() => {
      companyForm.reset();
    });
}

function add_task() {
  let task_form = document.querySelector("#task_form");
  let task_name = document.querySelector("#task_name").value;
  let client_name = document.querySelector("task_client_name").value;
  let date = document.querySelector("#task_date").value;
  let task_location = document.querySelector("#task_location").value;
  let img = document.querySelector("#task_img").value;
  let task_file = document.querySelector("#task_file").value;
  let task_note1 = document.querySelector("#task_note1").value;
  let task_note2 = document.querySelector("#task_note2").value;
  let task_note3 = document.querySelector("#task_note3").value;
  let post_stuff = {
    company_id: "",
    contact_id: "",
    Task: task_name,
    created_date: date,
    file: task_file,
    image: img,
    location: task_location,
    name: client_name,
    note1: task_note1,
    note2: task_note2,
    note3: task_note3,
  };

  db.collection("Task")
    .add(post_stuff)
    .then(() => {
      task_form.reset();
    });
}

function add_convo() {
  let convo_form = document.querySelector("#convo_form");
  let call_start = document.querySelector("#start_time").value;
  let call_end = document.querySelector("#end_time").value;
  let convo_company = document.querySelector("#convo_company").value;
  let convo_contact = document.querySelector("#convo_contact").value;
  let date = document.querySelector("#convo_date").value;
  let post_stuff = {
    comp_id: "",
    cont_id: "",
    company: convo_company,
    contact: convo_contact,
    call_start: call_start,
    call_end: call_end,
    date: date,
  };

  db.collection("Conversation")
    .add(post_stuff)
    .then(() => {
      convo_form.reset();
    });
}

function add_notes() {
  let notes_form = document.querySelector("#notes_form");
  let name = document.querySelector("#notes_name").value;
  let noteDate = document.querySelector("#notes_date").value;
  let cmnts = document.querySelector("#notes_comments").value;
  let noteFile = document.querySelector("#notes_file").value;

  let post_moreStuff = {
    company_id: "",
    comments: cmnts,
    company_name: name,
    date: noteDate,
    file: noteFile,
  };

  db.collection("Notes")
    .add(post_moreStuff)
    .then(() => {
      notes_form.reset();
    });
}

// <input type="text" class="form-control"  name="Organization" placeholder="Organization" id= "cont_org">
