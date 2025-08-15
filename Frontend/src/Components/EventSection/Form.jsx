// src/components/Form.jsx
import React, { useState } from 'react';
import { FaUpload, FaUserFriends, FaTrophy, FaCheck, FaCopy } from 'react-icons/fa';
import "./form.css"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const Form = () => {
  
  const [teamSize, setTeamSize] = useState(3);
  const [paymentFile, setPaymentFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [useSameCollege, setUseSameCollege] = useState(Array(3).fill(false));

  const handleFileChange = (e) => {
    setMessage("");  
    const file = e.target.files[0];
    if (file) {
      setPaymentFile(file);
    }
  };

  const toggleSameCollege = (index) => {
    const newUseSameCollege = [...useSameCollege];
    newUseSameCollege[index] = !newUseSameCollege[index];
    setUseSameCollege(newUseSameCollege);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  const formData = new FormData();

  // Leader details
  formData.append("leaderName", e.target.leaderName.value.trim());
  formData.append("email", e.target.email.value.trim());
  formData.append("contact", e.target.contact.value.trim());
  formData.append("college", e.target.college.value.trim());
  formData.append("team", e.target.team.value.trim());
  formData.append("members", String(teamSize)); // ensure string

  // Team members
  const memberList = [];
  for (let i = 0; i < teamSize - 1; i++) {
    const member = {
      name: e.target[`member${i + 1}Name`].value.trim(),
      email: e.target[`member${i + 1}Email`].value.trim(),
      contact: e.target[`member${i + 1}Contact`].value.trim(),
      college: useSameCollege[i]
        ? e.target.college.value.trim()
        : e.target[`member${i + 1}College`].value.trim(),
    };
    memberList.push(member);
  }
  formData.append("memberList", JSON.stringify(memberList)); // backend wants string

  // Payment file
  if (paymentFile) {
    formData.append("payment", paymentFile);
  }
  // we have change this fetch link in production
  try {
    const res = await fetch(`${BACKEND_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Error submitting form");
      return;
    }

    setMessage("Registration successful! We'll verify your payment and email you.");
    e.target.reset();
    setPaymentFile(null);
  } catch (err) {
    console.error(err);
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
    setUseSameCollege(Array(3).fill(false));
  }
};


  const UPI_ID = "codecrafthackathon@upi";

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-gray-300">Team Registration</h3>
          <p className="text-gray-400">
            Complete your team registration for CodeArena 3.0
          </p>
        </div>
        
        <div className="flex items-center bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-4 border border-purple-700">
          <FaTrophy className="text-amber-400 text-xl mr-3" />
          <div>
            <div className="font-bold">₹150 Registration Fee</div>
            <div className="text-sm text-gray-500">Per team </div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Team Leader Name</label>
            <input
              type="text"
              name="leaderName"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Contact Number</label>
            <input
              type="tel"
              name="contact"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter contact number"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">College/University</label>
            <input
              type="text"
              name="college"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter institution name"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Team Name</label>
            <input
              type="text"
              name="team"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Create a team name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Team Size</label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <select
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  required
                >
                  <option value={3}>3 members</option>
                  <option value={4}>4 members</option>
                </select>
              </div>
              <div className="text-indigo-400">
                <FaUserFriends className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-300 flex items-center">
            <FaUserFriends className="mr-2 text-indigo-400" />
            Team Members
          </h4>
          
          <div className="space-y-4">
            {Array.from({ length: teamSize - 1 }, (_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-md font-medium text-gray-300">Member {i + 1}</h5>
<button
  type="button"
  onClick={() => toggleSameCollege(i)}
  className={`same-college-btn w-full sm:w-auto text-xs sm:text-sm px-2 sm:px-3 py-1 rounded flex flex-wrap items-center justify-center sm:justify-start gap-1 transition-colors ${
    useSameCollege[i]
      ? 'bg-green-900/30 text-green-400'
      : 'bg-indigo-900/30 text-indigo-400 hover:bg-indigo-800'
  }`}
>
  <FaCheck className={`${useSameCollege[i] ? '' : 'opacity-30'}`} />
  <span className="leading-tight">Same college as leader</span>
</button>

                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      name={`member${i + 1}Name`}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Enter member ${i + 1} name`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name={`member${i + 1}Email`}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Enter email address`}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Contact Number</label>
                    <input
                      type="tel"
                      name={`member${i + 1}Contact`}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Enter contact number`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">College/University</label>
                    <input
                      type="text"
                      name={`member${i + 1}College`}
                      disabled={useSameCollege[i]}
                      className={`w-full px-4 py-3 ${
                        useSameCollege[i] 
                          ? 'bg-gray-900 text-gray-600 cursor-not-allowed' 
                          : 'bg-gray-800'
                      } border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder={
                        useSameCollege[i] 
                          ? "Same as team leader" 
                          : "Enter institution name"
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-300">Payment Details</h4>
          <p className="text-gray-400 mb-4">
            Total Amount: <span className="font-bold">₹{150}</span> 
          </p>
          
          {/* QR Code Section with UPI ID below */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 w-full max-w-md">
              <h4 className="text-lg font-bold mb-4 text-gray-300 text-center">
                Scan QR Code to Pay ₹150
              </h4>
              
              <img 
                src="https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/new_widget/assets/templates-with-watermark/watermark-template-1.svg" 
                alt="QR Code"
                className="w-48 h-48 mx-auto border-2 border-dashed border-indigo-500 rounded-lg mb-5"
              />
              
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700 mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">UPI ID:</p>
                    <p className="font-bold text-indigo-400 break-all">{UPI_ID}</p>
                  </div>
                  <button 
                    type="button" 
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    onClick={() => navigator.clipboard.writeText(UPI_ID)}
                    title="Copy UPI ID"
                  >
                    <FaCopy className="text-lg" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-500 text-center mt-4 text-sm">
                Scan or manually enter this UPI ID to complete payment of ₹150
              </p>
            </div>
          </div>
          
          {/* Upload Section */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-300 mb-4 text-center">
              Upload Screenshot of Payment Confirmation
            </h5>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 max-w-md mx-auto">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500 transition-colors relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                
                {paymentFile ? (
                  <div className="text-indigo-400">
                    <FaUpload className="mx-auto text-2xl mb-2" />
                    <p className="font-medium truncate max-w-xs mx-auto">{paymentFile.name}</p>
                    <p className="text-sm text-gray-500">Click to change file</p>
                  </div>
                ) : (
                  <div>
                    <FaUpload className="mx-auto text-2xl mb-2 text-gray-500" />
                    <p className="font-medium text-gray-300">Upload Payment Screenshot</p>
                    <p className="text-sm text-gray-500 mt-2">
                      JPG, PNG, PDF (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              className="mt-1 mr-3 w-5 h-5 accent-indigo-500"
              required
            />
            <p className="text-gray-400">
              I confirm that all information provided is accurate and agree to the event's terms and conditions. 
              I understand that registration fees are non-refundable.
            </p>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium w-full
              ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700 transition-colors'} md:w-auto block mx-auto`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Submit Registration'}
          </button>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              message.includes("success") 
                ? 'bg-green-900/30 text-green-400 border border-green-800' 
                : 'bg-red-900/30 text-red-400 border border-red-800'
            }`}>
              {message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;