
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const jobs = useLoaderData();
    const handleChangeStatus = (e,id) =>{
       const data ={
        status: e.target.value
       }
       fetch(`https://job-portal-server-liart-tau.vercel.app/job-applications/${id}`,{
        method:"PATCH",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount){
            Swal.fire({
                                 title: "Status Updated Successfully!",
                                 icon: "success",
                                 draggable: true
                               });
        }
       }
       )
    }
    return (
        <div>
           <h1>View Applications numbers: {jobs.length}</h1>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job,index) =>  <tr key={job._id}>
          <th> {index+1} </th>
          <td> {job.title} </td>
          <td> {job.applicant_email} </td>
          <td>
                <select 
                 onChange={(e) => handleChangeStatus(e,job._id)}
                 defaultValue="Change Status"
                 className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>Change Status</option>
                    <option>Hired</option>
                    <option>Under Review</option>
                    <option>Rejected</option>
                    <option>Set Interview</option>
        </select>
          </td>
        </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;