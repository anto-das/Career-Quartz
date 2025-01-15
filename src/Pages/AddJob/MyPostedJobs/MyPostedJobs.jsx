import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const {user} = useAuth();
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch(`https://job-portal-server-liart-tau.vercel.app/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user?.email])
    return (
        <div>
            My Posted Jobs:{jobs.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Job Deadline</th>
        <th>Application Count</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map((job,idx) => <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td>
          <Link to={`/viewApplication/${job._id}`}>
          <button className="btn btn-link">View-Application</button>
          </Link>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;