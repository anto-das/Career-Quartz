import { Link, useLoaderData } from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CiCalendarDate, CiLocationOn, CiUser } from "react-icons/ci";
import { PiMoneyWavy } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
const JobDetail = () => {
    const job = useLoaderData();
    const {_id,title,company,company_logo,description,requirements,location,salaryRange,category,jobType,responsibilities,hr_email,hr_name,applicationDeadline} = job;
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-[#cfeef9] py-14">
            <figure>
                <img
                className="w-16" 
                src={company_logo} alt={company} />
            </figure>
          <div className="font-semibold text-center">
            <span className="text-3xl text-gray-700"> {title} </span>,
            <span className="text-3xl text-gray-700"> {category} </span>
          </div>
          <div className="flex gap-3 justify-center items-center flex-wrap py-3">
            <p className="text-gray-500 flex items-center gap-1"> <RiShoppingBag4Line/> {jobType} </p>
            <p className="text-gray-500 flex items-center gap-1"> <CiLocationOn/> {location} </p>
            <p className="text-gray-500 flex items-center gap-1"> <PiMoneyWavy/> {salaryRange.min} - {salaryRange.max} </p>
            <p className="text-gray-500 flex items-center gap-1"> <CiUser/> {hr_name} </p>
          </div>
          <p className="text-gray-500 flex items-center gap-1"><TfiEmail/> {hr_email} </p>
          <p className="text-gray-500 flex items-center gap-1"><CiCalendarDate/> {applicationDeadline} </p>
          <Link to={`/jobApply/${_id}`}>
          <button className="btn bg-blue-500 text-white mt-2">Apply Now</button>
          </Link>
        </div>
        <div className="my-5 w-1/2 mx-auto space-y-4">
            <p className="text-gray-600 text-lg"> <span className="font-semibold text-black text-lg">Job Description:</span> <br /> {description} </p>
           <div>
           <p className="text-lg font-semibold text-black">Key Responsibilities :</p>
           {
                
                responsibilities.map((response,idx) => <ul 
                key={idx}
                >
                    <li className="list-disc text-gray-600"> {response} </li>
                </ul> )
            }
           </div>
           <div>
            <p className="font-semibold text-black text-lg">Skills :</p>
            {
                requirements.map((skill,idx) => <li 
                key={idx}
                className="list-disc text-gray-500"> {skill} </li>)
            }
           </div>
        </div>
        </div>
    );
};

export default JobDetail;