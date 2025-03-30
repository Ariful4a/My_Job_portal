import React from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-5 border">
      {/* Company Logo & Name */}
      <div className="flex items-center gap-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{job.company}</h2>
          <p className="text-gray-500">{job.location}</p>
        </div>
      </div>

      {/* Job Title */}
      <h1 className="text-xl font-bold mt-3">{job.title}</h1>

      {/* Job Type & Deadline */}
      <p className="text-sm text-gray-600">
        Job Type: <span className="font-medium">{job.jobType}</span>
      </p>
      <p className="text-sm text-gray-600">
        Deadline: <span className="font-medium">{job.applicationDeadline}</span>
      </p>

      {/* Salary */}
      <p className="text-md font-semibold text-green-600 mt-2">
        Salary: {job.salaryRange.salaryMin} - {job.salaryRange.salaryMax}{" "}
        {job.salaryRange.currency.toUpperCase()}
      </p>

      {/* Requirements */}
      <div className="mt-3">
        <h3 className="font-semibold">Requirements:</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mt-3">
        <h3 className="font-semibold">Responsibilities:</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <Link to={`/jobs/${job._id}`}>
        <button className="block text-center mt-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default HotJobCard;
