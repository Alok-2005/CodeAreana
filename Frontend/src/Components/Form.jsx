// src/components/Form.jsx
import React, { useState } from 'react';
import { FaUpload, FaUserFriends, FaTrophy } from 'react-icons/fa';

const Form = () => {
  const [teamSize, setTeamSize] = useState(3);
  const [paymentFile, setPaymentFile] = useState(null);
  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Registration submitted successfully!');
  // };
  
  const handleFileChange = (e) => {
      setMessage("");  

    const file = e.target.files[0];
    if (file) {
      setPaymentFile(file);
    }
  };
    const [members, setMembers] = useState([
    {
      name: "",
      email: "",
      contact: "",
      college: "",
      team: "",
      members: 4,
      memberList: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
      payment: null,
    },
  ]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage(""); // clear old message

  const formData = new FormData();
  formData.append("leaderName", e.target.leaderName.value);
  formData.append("email", e.target.email.value);
  formData.append("contact", e.target.contact.value);
  formData.append("college", e.target.college.value);
  formData.append("team", e.target.team.value);
  formData.append("members", teamSize);

  const memberList = Array.from(
    { length: teamSize - 1 },
    (_, i) => ({
      name: e.target[`member${i + 1}Name`].value,
      contact: e.target[`member${i + 1}Contact`].value,
    })
  );
  formData.append("memberList", JSON.stringify(memberList));

  if (paymentFile) {
    formData.append("payment", paymentFile);
  }

  try {
    const res = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Error submitting form");
      return;
    }

    setMessage("We will verify your payment and then send you an email.");
    e.target.reset();
    setPaymentFile(null);
  } catch (err) {
    console.error(err);
    setMessage("Something went wrong, please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Team Registration</h3>
          <p className="text-gray-400">
            Complete your team registration for CodeArena 3.0
          </p>
        </div>
        
        <div className="flex items-center bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-4 border border-purple-700">
          <FaTrophy className="text-amber-400 text-xl mr-3" />
          <div>
            <div className="font-bold">₹150 Registration Fee</div>
            <div className="text-sm text-gray-400">Per team </div>
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
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Member {i + 1} Name</label>
                  <input
                    type="text"
                    name={`member${i + 1}Name`}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Enter member ${i + 1} name`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name={`member${i + 1}Contact`}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Enter contact number`}
                    required
                  />
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
          <div className="mb-6 text-center">
  <h4 className="text-lg font-bold mb-2 text-gray-300">Scan & Pay</h4>
  <img 
    src="https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/new_widget/assets/templates-with-watermark/watermark-template-1.svg" 
    alt="QR Code"
    className="mx-auto w-48 h-48 border border-gray-700 rounded-lg"
  />
  <p className="text-gray-400 mt-2">Scan the QR code to pay ₹150, then upload the payment screenshot below.</p>
</div>
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
                <p className="font-medium">{paymentFile.name}</p>
                <p className="text-sm text-gray-500">Click to change file</p>
              </div>
            ) : (
              <div>
                <FaUpload className="mx-auto text-2xl mb-2 text-gray-500" />
                <p className="font-medium text-gray-300">Upload Payment Screenshot</p>
                <p className="text-sm text-gray-500">
                  Format: TeamName.jpg/pdf/png (Max 5MB)
                </p>
              </div>
            )}
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
          
<button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 flex items-center gap-2">
  {loading && <div className="loader"></div>}
  {loading ? "Submitting..." : "Submit"}
</button> {message && (
    <p className="mt-3 text-green-600 text-sm">{message}</p>
  )}
        </div>
      </form>
    </div>
  );
};

export default Form;