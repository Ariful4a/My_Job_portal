import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const JobApply = () => {
    const { id } = useParams();
    const {user} = useAuth();
    console.log(id, user);

    const handleSubmitAppliClintData = e => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    if (!linkdin ||!github ||!resume) {
      alert("All fields are required");
      return;
    }
    // Send the form data to the server

    const sendApplicintData = {
        linkdin,
        github,
        resume,
        jobId: id,
        appliclint_email: user.email
        // applyclint_email: user.email
      };

      // bakend send data 
      fetch('http://localhost:5000/job-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendApplicintData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Application submitted successfully");
        form.reset();
      })
    }
    
  return (
    <div className="my-10 flex justify-center w-full">
      <form onSubmit={handleSubmitAppliClintData}>
        <div>
          <label for="name">Linkdin *</label><br />
          <input
            type="url" name="linkdin"
            placeholder="Linkdin Link"
            className="input w-[500px] input-secondary"
          />
        </div>
        <div>
          <label for="name">Github *</label><br />
          <input
            type="url" name="github"
            placeholder="Github link"
            className="form-control w-[500px] input input-secondary"
          />
        </div>
        <div>
          <label for="name">Resume *</label><br />
          <input
            type="url" name="resume" 
            placeholder="Resume link"
            className="input w-[500px] input-secondary"
          />
        <div className="mt-5">
            <button className="btn btn-primary">Apply</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
