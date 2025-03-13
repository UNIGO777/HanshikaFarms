import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function EnquiryForm01({ setIsOpen }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    // email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "a308cb68-1e66-4a9d-b5b4-c50bd1ea78b6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Something went wrong. Please check your internet connection.");
    }
  };



  return (
    <div id="EnquiryForm01" className="p-4 md:p-12 flex flex-col md:flex-row items-center justify-between">
      {/* Registration Form Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-8">Register Your Interest</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="firstName" className="block mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <span className="text-sm text-gray-400 mt-1 block">First Name</span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="w-full">
                <span className="text-sm text-gray-400 mt-1 block">Last Name</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border bg-white text-black rounded"
                  required
                />
              </div>
            </div>

          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex border rounded-sm ">
              <div className="bg-white text-gray-700 px-2 flex focus:ring-1  items-center border-r border-gray-300">
                +91
              </div>
              <input
                type="tel"
                id="phone"
                name="phone" placeholder="xxx xxx xxxx"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white text-black active:border-none outline-none  focus:outline-none focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          {/* <div className="mb-6">
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email" placeholder="your@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-black border  rounded"
              required
            />
          </div> */}

          <button
            type="submit"
            className="bg-[#000] hover:bg-[#111] text-sm text-white font-medium py-2 md:py-3 px-8 transition-colors rounded-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Property Information Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-2">Luxury has a new address - Premium cottages  @Ramuji Water Park</h2>
        <h3 className="text-2xl font-bold mb-6">Security Uncompromised - T&CP Approved and Easy Bank Finance Available</h3>

        <p className="mb-6">
          Hanshika Farms offers investment opportunities to own premium cottages inside the Ramuji Water Park campus. These fully furnished cottages in a premium location are laced with top-notch modern amenities, and the prices are as low as <span className="font-semibold">₹16,51,000</span>.
        </p>

        <h2 className="mb-4 font-semibold">An insight into the prominent features:</h2>
        <ul className="mb-8 list-square pl-5">
          <li className="list-disc font-semibold text-gray-500">600 sq. ft. (20x30) plot</li>
          <li className="list-disc font-semibold text-gray-500">Built-up area of 450 sq. ft</li>
          <li className="list-disc font-semibold text-gray-500">Fully furnished cottages with amenities like 32-inch LCD TV, mini fridge, AC, fan, chairs, table, electric kettle, and geyser</li>
          <li className="list-disc font-semibold text-gray-500">Company-owned garden in front of cottages spread over 25,000 sq. ft. area</li>
          <li className="list-disc font-semibold text-gray-500">Enjoy cost-free maintenance for 2 years for the outside area of our premium cottages.</li>
          <p>Schedule a Tour Now!</p>
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#000] hover:bg-[#111] text-[12px] lg:text-[1rem] text-white font-medium py-[10px] lg:py-3 px-8 flex gap-2 items-center justify-center transition-colors rounded-full">
          <IoCallOutline className="lg:text-xl text-base" />
          Contact Us
        </button>
      </div>


      {/*
      <div className="fixed bottom-6 right-6">
        <a
          href="#"
          className="bg-[#25D366] p-3 rounded-full flex items-center justify-center hover:bg-[#1fba58] transition-colors"
        >
          <WhatsappIcon className="w-6 h-6 text-white" />
        </a>
      </div> */}
    </div>
  );
}
