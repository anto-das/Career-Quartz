import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const AddJob = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const handleForm = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const {min,max,currency, ...newJob} = initialData;
    newJob.salaryRange={
      min,
      max,
      currency
    }
    newJob.requirements= newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n")

    fetch("https://job-portal-server-liart-tau.vercel.app/jobs",{
      method:"POST",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data =>{
     if(data.insertedId){
                 Swal.fire({
                     title: "Submited Successfully!",
                     icon: "success",
                     draggable: true
                   });
                }
                navigate("/myPostedJobs")
    })
    
  }
    return (
        <div>
        <form onSubmit={handleForm} className="card-body">
            <h1 className="text-3xl text-center text-blue-500">Post a new JOB</h1>
            {/* job-title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job-Title</span>
            </label>
            <input type="text" name="title" placeholder="Job-title" className="input input-bordered" required />
          </div>
          {/* job-location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" name="location" placeholder="location" className="input input-bordered" required />
          </div>
          {/* job-Type*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job-Type</span>
            </label>
            <select name='jobType' defaultValue="Pick a job type" className="select select-ghost w-full">
  <option disabled>Pick a job type</option>
  <option>Full-time</option>
  <option>Intern</option>
  <option>Remote</option>
  <option>Part-time</option>
</select>
          </div>
          {/* job-category*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job-Category</span>
            </label>
            <select name='category' defaultValue="Pick a job category" className="select select-ghost w-full">
  <option disabled>Pick a job category</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Content-creating</option>
  <option>Editing</option>
</select>
          </div>
             {/* job-deadling */}
             <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input type="date" name="applicationDeadline" placeholder="Deadline" className="input input-bordered" required />
          </div>
          {/* salary range */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            {/* max */}
         <div className="form-control">
            <label className="label">
              <span className="label-text">Salary-Range</span>
            </label>
            <input type="text" name="min" placeholder="min" className="input input-bordered" required />
          </div>
          {/* min */}
         <div className="form-control">
            <input type="text" name="max" placeholder="max" className="input input-bordered" required />
          </div>
          <select name="currency" defaultValue="Select a currency" className="select select-ghost w-full">
  <option disabled>Select a currency</option>
  <option value="BDT">Bangladesh(BDT)</option>
  <option value="USD">United States Dollar (USD)</option>
    <option value="EUR">Euro (EUR)</option>
    <option value="GBP">British Pound (GBP)</option>
    <option value="INR">Indian Rupee (INR)</option>
    <option value="JPY">Japanese Yen (JPY)</option>
    <option value="AUD">Australian Dollar (AUD)</option>
    <option value="CAD">Canadian Dollar (CAD)</option>
    <option value="CNY">Chinese Yuan (CNY)</option>
    <option value="BRL">Brazilian Real (BRL)</option>
    <option value="ZAR">South African Rand (ZAR)</option>
</select>
         </div>
         {/* job description */}
         <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-bordered h-32" name="description" placeholder="Job Description" required></textarea>
          </div>
         {/* company */}
         <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
          </div>
           {/* job requirements */}
         <div className="form-control">
            <label className="label">
              <span className="label-text">Requirements</span>
            </label>
            <textarea className="textarea textarea-bordered h-56" name="requirements" placeholder="Put each requirements in a new line" required></textarea>
          </div>
           {/* job responsibilities */}
         <div className="form-control">
            <label className="label">
              <span className="label-text">Responsibilities</span>
            </label>
            <textarea className="textarea textarea-bordered h-56" name="responsibilities" placeholder="Write each requirements in a new line" required></textarea>
          </div>
           {/* HR Email */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input type="email" defaultValue={user?.email} name="hr_email" placeholder="hr-email" className="input input-bordered" required />
          </div>
           {/* HR Name */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input type="text" defaultValue={user?.displayName} name="hr_name" placeholder="hr-name" className="input input-bordered" required />
          </div>
           {/* company logo */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input type="url" name="company_logo" placeholder="Company Logo URL" className="input input-bordered" required />
          </div>
         {/* submit button */}
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default AddJob;