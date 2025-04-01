import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Course_add = () => {
  const { user } = useAuth();

  const ownerEmail = "afkgamingno1@gmail.com"; // ✅ এখানে তোমার ইমেইল বসাও

  // ✅ চেক করা হচ্ছে, ইউজার কি owner?
  if (user?.email !== ownerEmail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">🚫 Access Denied! Only Admin can access this page.</h1>
      </div>
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch('http://localhost:5000/myCourses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(initialData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully added a new course",
            icon: "success",
            timer: 3000
          });
        }
        e.target.reset();
    })
    .catch(error => {
      Swal.fire({
        title: "Sorry, your work failed",
        icon: "error",
      });
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">New Paid Course add</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Course Thumbnail URL:</label>
          <input type="text" name="courseThumbnail" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">Course Link:</label>
          <input type="text" name="courseLink" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">Course Name:</label>
          <input type="text" name="courseName" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">Course Description:</label>
          <textarea name="courseDescription" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
        </div>

        <div>
          <label className="block font-medium">Description Thumbnail URL:</label>
          <input type="text" name="descriptionUrl" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Optional" />
        </div>

        {/* ✅ Gender Field (Dropdown) */}
        <div>
          <label className="block font-medium">Gender:</label>
          <select name="gender" className="w-full p-3 border border-gray-300 rounded-md" required>
            <option value="">Select Gender</option>
            <option value="male">👨 Male</option>
            <option value="female">👩 Female</option>
            <option value="other">🌍 Other</option>
          </select>
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-green-500 text-white rounded-md hover:bg-green-400">পোস্ট করুন</button>
      </form>
    </div>
  );
};

export default Course_add;
