
import { useLoaderData } from "react-router-dom";
import HotJobCard from "./HotJobCard";



const HotJobs = () => {
    const jobs = useLoaderData();
    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)}
            </div>
        </div>
    );
};

export default HotJobs;