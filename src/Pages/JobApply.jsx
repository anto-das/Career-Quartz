import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams();
    const {user,} = useAuth();
    const navigate = useNavigate();
   const handleApply = e =>{
    e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        const job_applications = {
            job_id:id,
            applicant_email:user.email,
            linkedIn,
            github,
            resume,
        }
        fetch('https://job-portal-server-liart-tau.vercel.app/job-applications',{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(job_applications)
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
           navigate("/myApplication")
        })
    }
    return (
          <div className="card bg-base-100 w-full my-5 shadow-lg">
                <h1 className="text-5xl font-bold text-center">Apply Now Good Luck !</h1>
            <form onSubmit={handleApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIN URL</span>
                </label>
                <input type="url" name="linkedIn" placeholder="LinkedIN URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-blue-500">Submit</button>
              </div>
            </form>
          </div>
    );
};

export default JobApply;