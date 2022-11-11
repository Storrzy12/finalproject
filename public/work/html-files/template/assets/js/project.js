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
            
        <!-- /Content End -->
        
    </div>
    <!-- /Page Content -->
    
</div>
<!-- /Page Wrapper -->

</div>
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
</div>
</div>

    `



}