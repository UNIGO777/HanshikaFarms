import { useNavigate } from "react-router-dom";

export default function CommonBtn({scrollToEnquiry}) {
  const navigate = useNavigate(); // Navigation function

  return (
    <div className="flex justify-center items-center">
      <button 
        className="bg-black text-white px-6 py-3 rounded-full mt-5 text-[16px] font-semibold shadow-lg hover:bg-black transition"
        onClick={scrollToEnquiry} 
      >
        Get Enquiry
      </button>
    </div>
  );
}
