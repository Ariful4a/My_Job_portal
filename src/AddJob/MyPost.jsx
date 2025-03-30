import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPost = () => {
    const { user } = useAuth();
    const [postJobs, setPostJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/jobs?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPostJobs(data))
                .catch(error => console.error("Error fetching jobs:", error));
        }
    }, [user?.email]);

    return (
        <div>
            <h1 className="text-xl font-bold my-4">My Posted Jobs ({postJobs.length})</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title/Location</th>
                            <th>Description</th>
                            <th>Job Apply Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postJobs.map((job, index) => (
                                <tr key={job._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={job.companyLogo} alt="Company Logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">
                                            {job.description.length > 50 ? job.description.slice(0, 50) + "..." : job.description}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="btn btn-ghost btn-xs">{job.applicationCount || 0}</p>
                                    </td>
                                    <td>
                                        <Link to={`/viewApplications/${job._id}`}>
                                        <button className="btn btn-ghost btn-xs">View Applications</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPost;
