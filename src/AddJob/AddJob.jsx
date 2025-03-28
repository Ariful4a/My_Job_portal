import React from 'react';

const AddJob = () => {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const {currency, salaryMin , salaryMax, ...newJob} = initialData;
    console.log(newJob);
    newJob.salaryRange = {currency, salaryMin, salaryMax};
    console.log(newJob);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">নতুন চাকরি পোস্ট করুন</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">চাকরির শিরোনাম:</label>
          <input type="text" name="title" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">অবস্থান:</label>
          <input type="text" name="location" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">চাকরির ধরন:</label>
          <select name="jobType" className="w-full p-3 border border-gray-300 rounded-md" required>
            <option value="">চাকরির ধরন নির্বাচন করুন</option>
            <option value="Hybrid">হাইব্রিড</option>
            <option value="Remote">রিমোট</option>
            <option value="On-Site">অন-সাইট</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">ক্যাটাগরি:</label>
          <select name="category" className="w-full p-3 border border-gray-300 rounded-md" required>
            <option value="">ক্যাটাগরি নির্বাচন করুন</option>
            <option value="Engineering">এঞ্জিনিয়ারিং</option>
            <option value="Marketing">মার্কেটিং</option>
            <option value="Design">ডিজাইন</option>
            <option value="Sales">সেলস</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">আবেদনের শেষ তারিখ:</label>
          <input type="date" name="applicationDeadline" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">বেতন পরিসীমা (নিম্ন):</label>
          <input type="number" name="salaryMin" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">বেতন পরিসীমা (সর্বোচ্চ):</label>
          <input type="number" name="salaryMax" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">মুদ্রা:</label>
          <select name="currency" className="w-full p-3 border border-gray-300 rounded-md" required>
            <option value="">মুদ্রা নির্বাচন করুন</option>
            <option value="BDT">বাংলাদেশি টাকা (BDT)</option>
            <option value="USD">মার্কিন ডলার (USD)</option>
            <option value="EUR">ইউরো (EUR)</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">চাকরির বর্ণনা:</label>
          <textarea name="description" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
        </div>

        <div>
          <label className="block font-medium">কোম্পানি:</label>
          <input type="text" name="company" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">প্রয়োজনীয়তা (কমা দিয়ে আলাদা করুন):</label>
          <input type="text" name="requirements" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">দায়িত্ব (কমা দিয়ে আলাদা করুন):</label>
          <input type="text" name="responsibilities" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">এইচআর নাম:</label>
          <input type="text" name="hrName" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">এইচআর ইমেইল:</label>
          <input type="email" name="hrEmail" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">কোম্পানির লোগো URL:</label>
          <input type="text" name="companyLogo" className="w-full p-3 border border-gray-300 rounded-md" required />
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-green-500 text-white rounded-md hover:bg-green-400">পোস্ট করুন</button>
      </form>
    </div>
  );
};

export default AddJob;
