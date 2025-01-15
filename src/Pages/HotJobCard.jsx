import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";

const HotJobCard = ({job}) => {
    const {title,company,company_logo,description,requirements,location,salaryRange} = job;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-lg">
  <div className="flex gap-2">
  <figure>
    <img
      src= {company_logo}
      className="w-16 rounded-full"
      alt={company} />
  </figure>
  <div>
    <h1 className="text-xl"> {company} </h1>
    <p className="flex items-center gap-1"> <FaLocationDot></FaLocationDot> {location} </p>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title"> {title} 
    <div className="badge badge-secondary">NEW</div>
    </h2>
    <p> {description} </p>
    <div className="flex flex-wrap gap-2">
        {
            requirements.map( (skill,idx) => <p 
            className="border py-1 text-center"
            key={idx}> {skill} </p>)
        }
    </div>
    <div className="flex gap-1 justify-end items-center">
        <p className="flex items-center text-sm">Salary: <FiDollarSign></FiDollarSign>{salaryRange.min} - {salaryRange.max}{salaryRange.currency} </p>
     <Link to={`/jobs/${job._id}`}>
     <button className="btn btn-sm bg-blue-500 text-white">Apply</button>
     </Link>
    </div>
  </div>
</div>
    );
};

HotJobCard.propTypes={
    job:PropTypes.object,
}
export default HotJobCard;