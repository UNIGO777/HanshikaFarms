import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from '../../assets/Faq.jpeg';

const FAQPage = () => {
    const faqs = [
        {
            question: "How far is Hanshika Farms Cottages from Jabalpur Railway Station?",
            answer: "Hanshika Farms cottages are located inside Ramuji Water Park, Mukunwara Road, Ghat Pipariya, near Sukh Sagar Medical College, Jabalpur. It is about 17.49 kilometers from Jabalpur Railway Station."
        },
        {
            question: "What amenities are provided at Hanshika Farms cottages?",
            answer: "Our cottages are laden with all the top-notch amenities, like 32-inch LCD TV, mini fridge, AC, fan, chairs, table, electric kettle, and geyser to ensure your luxury living is uncompromised."
        },
        {
            question: "How can I book a cottage with Hanshika Farms?",
            answer: "Call us on 7999599875 or visit our office on the 2nd floor, Roopali Chambar, New Medicine Complex, Shastri Bridge, Jabalpur (M.P.)"
        },
        {
            question: "Is a finance facility available for buying the cottage?",
            answer: "Yes, Hanshika Farms home cottages is a T&CP Approved project. Easy bank finance facility is available so that one does not need to make a full payment from the pocket. Also, You can rent the same cottage you bought from Hanshika Farms to us and enjoy monthly rental income. This way you can own a property without financial burden."
        },
        {
            question: "Can I invest for commercial purposes in these cottages?",
            answer: "Yes, investors, buyers( end-users) and resellers are most welcome to join hands with us to promote tourism around this area."
        }
    ];


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col w-full lg:flex-row min-h-screen p-8">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-center rounded-xl overflow-hidden">
                <img
                    src="/Images/DJI_0747.JPG"
                    alt="FAQ Section"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side - FAQ */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:p-6 lg:mt-0 mt-5">
                <h2 className="text-3xl font-bold mb-6">FAQs related to Hanshika Farm Home Cottages</h2>
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="w-full text-left font-semibold bg-white p-2 md:p-4 rounded-lg shadow flex justify-between items-center transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 p-4 rounded-lg' : 'max-h-0 opacity-0'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
