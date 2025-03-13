import { useState } from "react"
import img from '../../assets/Faq.jpeg';

export default function EnquiryForm02() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        // email: "",
        countryCode: "AE", // Default to UAE
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

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
        <div className="w-full  mx-auto bg-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center mt-10">Explore Our Cozy Cottages – Book a Tour</h1>
            <div className="flex flex-col md:flex-row bg-white gap-8">
                {/* Left side - Image and Title */}
                {/* <div className="lg:w-1/2 w-full flex justify-center items-center rounded-xl overflow-hidden">
                    <img
                        src="/Images/DJI_0743.JPG"
                        alt="FAQ Section"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                </div> */}
                <div className="lg:w-[1200px] w-full flex justify-center items-center rounded-xl overflow-hidden relative">
                    {/* <video
                        controls
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                        style={{ filter: "brightness(0.7)" }}
                    >
                        <source src="/Video/VideoHome.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}

                    <img src="/Images/DJI_0770.JPG" alt="content image" />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>


                {/* <div className="lg:w-1/2 w-full flex justify-center items-center rounded-xl overflow-hidden relative">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/1DAr41GhgVM?autoplay=1&mute=1&loop=1"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div> */}


                {/* Right side - Form */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-2xl font-bold mb-8 text-center">Register Your Interest</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fName" className="block mb-2">
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

                            <div>
                                <label htmlFor="Phone" className="block mb-2">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <div className="flex border rounded-md">
                                    <div className=" p-3 py-2 flex items-center border">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png?height=30&width=40" alt="Flag" className="w-6 h-4    mr-1" />
                                        <span>+</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="Phone"
                                        name="phone"
                                        placeholder="9685854782"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* <div>
                                <label htmlFor="Email" className="block mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full border px-3 py-2 rounded-md"
                                />
                            </div> */}

                            <button type="submit" className="w-full md:w-auto px-8 py-2 bg-[#000] hover:bg-[#222] text-white rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
