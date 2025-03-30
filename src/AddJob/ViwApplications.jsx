import React from "react";
import { PiCloudSnowLight } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleUpdate = (e, id) => {
    console.log(e.target.value, id)
    const updatedJob= {
        status: e.target.value
  
    }

    fetch(`http://localhost:5000/job-applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedJob),
  
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center my-6">View Applications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-700">Applicant</h3>
            <p className="text-gray-500">📧 Email: {app.appliclint_email}</p>
            <p className="text-blue-500 hover:underline">
              <a href={app.linkdin} target="_blank" rel="noopener noreferrer">
                🔗 LinkedIn
              </a>
            </p>
            <p className="text-gray-600 hover:underline">
              <a href={app.github} target="_blank" rel="noopener noreferrer">
                🖥 GitHub
              </a>
            </p>
            <p className="text-green-500 hover:underline">
              <a href={app.resume} target="_blank" rel="noopener noreferrer">
                📄 View Resume
              </a>
            </p>
            <select defaultValue={app.status || "Change Status"} onChange={(e)=>handleUpdate(e, app._id)} className="select select-xs">
              <option disabled={true}>Change Status</option>
              <option>Under Review</option>
              <option>Set Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewApplications;
