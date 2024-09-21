import React, { useState } from "react";

function DistributeWaterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate the email body using the form data
    const mailtoLink = `mailto:infofreeh2o@gmail.com?subject=Distribute%20Free%20Water%20Request&body=
      Full Name: ${encodeURIComponent(formData.fullName)}%0D%0A
      Email: ${encodeURIComponent(formData.email)}%0D%0A
      Phone Number: ${encodeURIComponent(formData.phoneNumber)}%0D%0A
      Company Name: ${encodeURIComponent(formData.companyName)}%0D%0A`;

    // Redirect to the mailto link to send the email
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex justify-center items-center min-h-screen pb-[100px]">
      <div className="w-full max-w-[720px] p-8 bg-white rounded-lg">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Distribute Free H2O
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">
              First and Last Name: *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Email: *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Phone Number: *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Company Name: *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#54C6CD] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DistributeWaterForm;
