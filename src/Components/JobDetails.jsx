import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
const job = useLoaderData();


  if (!job) {
    return <h2 className="text-center text-red-500 text-xl">Job Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <img src={job.company_logo} alt={job.company} className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
      </div>
      <p className="text-gray-600 mb-2">📍 {job.location} | {job.jobType}</p>
      <p className="text-gray-700 font-semibold">💰 Salary: {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}</p>
      <p className="mt-4 text-gray-700">{job.description}</p>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">📌 Requirements:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">🎯 Responsibilities:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">📩 HR Contact:</h3>
        <p className="text-gray-700">👨‍💼 {job.hr_name}</p>
        <p className="text-gray-700">📧 {job.hr_email}</p>
      </div>
      <Link to={`/jobApply/${job._id}`}>Apply now</Link>
    </div>
  );
};

export default JobDetails;
