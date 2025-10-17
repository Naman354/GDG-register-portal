import React, { useState } from "react";
import RegisterPNG from '../assets/register.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const  navigate  = useNavigate() ; 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentNo: "",
    residence: "",
    section: "",
    branch: "",
    universityRollNo: "",
    phoneNo: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    alert("Registration Successful!");
  };
  const submithandler = () =>{
    localStorage.setItem("userRegistration", JSON.stringify(formData));
    alert("Data saved to local storage!");
    navigate('/About') ;


  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b021f] text-white">
      <div className="bg-[#100826] p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 w-[90%] max-w-5xl border border-[#3b0eff]/30">
        {/* Left Image Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <img

            src={RegisterPNG}
            alt="Register"
            className="w-64 rounded-xl mb-6 h-[350px] "
          />
          <button
            type="submit"
            form="registerForm"
            onClick={submithandler
            }
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </div>

        {/* Right Form Section */}
        <form
          id="registerForm"
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-5"
        >
          <h2 className="text-3xl font-semibold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Register Now
          </h2>

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">E-Mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Student Number */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Student No.
            </label>
            <input
              type="text"
              name="studentNo"
              placeholder="Enter Your Student No."
              value={formData.studentNo}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Residence */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Residence
            </label>
            <select
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option className='text-black'value="">Select Residence</option>
              <option className='text-black'value="Hostel">Hostel</option>
              <option className='text-black'value="Day Scholar">Day Scholar</option>
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Section</label>
            <input
              type="text"
              name="section"
              placeholder="Enter Your Section"
              value={formData.section}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option className='text-black' value="">Select Branch</option>
              <option className='text-black' value="CSE">CSE & their allied</option>
              <option className='text-black' value="ECE">ECE</option>
              <option className='text-black' value="EEE">EEE</option>
              <option className='text-black' value="MECH">MECH</option>
              <option className='text-black' value="CIVIL">CIVIL</option>
            </select>
          </div>

          {/* University Roll No */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              University Roll No.
            </label>
            <input
              type="text"
              name="universityRollNo"
              placeholder="Enter Your Roll No."
              value={formData.universityRollNo}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Phone No.
            </label>
            <input
              type="tel"
              name="phoneNo"
              placeholder="Enter Your Phone No."
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option className='text-black' value="">Select Gender</option>
              <option className='text-black' value="Male">Male</option>
              <option className='text-black' value="Female">Female</option>
              <option className='text-black' value="Other">Don't want to say</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
