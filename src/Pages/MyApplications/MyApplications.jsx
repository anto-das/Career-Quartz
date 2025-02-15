import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaLocationDot } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyApplications = () => {
    const {user} = useAuth();
    const [jobs,setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect( () => {
        // axios.get(`https://job-portal-server-liart-tau.vercel.app/job-applications?email=${user?.email}`,{withCredentials:true})
        // .then(res => setJobs(res.data));
          axiosSecure.get(`job-applications?email=${user?.email}`)
          .then(res => setJobs(res.data))
        

    } ,[user?.email])

    const handleDelete = id =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://job-portal-server-liart-tau.vercel.app/job-applications/${id}`,{
            method:"DELETE"
          })
          .then(res => res.json())
          .then(data => {
           if(data.deletedCount){
            const remainingJobs = jobs.filter(job => id !== job._id)
            setJobs(remainingJobs);
             Swal.fire({
               title: "Deleted!",
               text: "Your file has been deleted.",
               icon: "success"
             });
           }
          })
        }
      });
    }
    return (
        <div>
            <h2>My Job Application data : {jobs.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Job-Type</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        jobs.map((job,index) =>  <tr key={job._id}>
          <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt={job.company} />
                  </div>
                </div>
                <div>
                  <div className="font-bold"> {job.company} </div>
                  <div className="text-sm opacity-50 flex items-center gap-1"> <FaLocationDot></FaLocationDot> {job.location} </div>
                </div>
              </div>
            </td>
            <td className="">
            {job.category}
              <br />
              <span className="badge badge-ghost badge-sm"> {job.title} </span>
            </td>
            <td> {job.jobType} </td>
            <td> {job.status} </td>
            <th>
              <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-xl text-red-500"/></button>
            </th>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyApplications;