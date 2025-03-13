import CommonBtn from "./CommonBtn"

const locations = [
  {
    name: "From Jabalpur Airport",
    time: "20 Km",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/Landmark-Icons-07-780x780.png?height=80&width=80",
    alt: "Airport Icon",
  },
  {
    name: "via Bargi Hills Rd from Jabalpur Junction",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/Landmark-Icons-01-780x780.png?height=80&width=80",
    time: "45 min (17. 49 km)",
    alt: "Marina Icon",
  },
  {
    name: "via NH 34",
    time: "55 min (32.0 km)",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/07.webp?height=80&width=80",
    alt: "Road Icon",
  },

]

export default function LocationMap({ scrollToEnquiry }) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-2 text-gray-800 tracking-tight">Locational Advantages</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Know What Makes Our Cottages’ Location Premium
          </p>
        </div>

        {/* Enhanced Location Cards with Images */}
        <div className="flex flex-wrap justify-center  gap-8 mb-20  ">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-72"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>

              <div className="relative p-8 flex flex-col items-center">
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300 w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={loc.image || "/placeholder.svg"}
                    alt={loc.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                <p className="text-2xl font-bold text-gray-800 mb-1">{loc.time}</p>
                <p className="text-gray-600 text-center font-medium">{loc.name}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>


        {/* Location Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clean Environment </h3>
              <p className="text-gray-600">
                Ramuji Water Park is renowned for its clean & family-friendly environment and well-maintained rides. Buying a cottage/s here means a safe and clean getaway home amid the scenic and peaceful environment.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-0.5 md:h-16 bg-gray-100 md:mx-6 my-4 md:my-0 "></div>
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Connectivity</h3>
              <p className="text-gray-600">
                Ramuji Water Park is well connected to Jabalpur city. Easy accessibility via highway ensures no stress in commuting even at odd hours by both private and public transportation.
              </p>
            </div>
          </div>
        </div>


        {/* Btn */}
        <div className="mb-5 -mt-5">
          <CommonBtn scrollToEnquiry={scrollToEnquiry} />
        </div>

        {/* Map Section (Unchanged) */}
        <div className="mb-8">

          <div className="text-center">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800">Check Map To Reach Us</h2>
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-800">Take a Virtual Tour or Book an In-Person Visi</h2>

          </div>
          <div className="relative rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
            <div className="w-full h-[400px] md:h-[500px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.264124034067!2d79.92700192959788!3d23.157269365221723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af0017bed465%3A0xddfab24bde53b837!2sRupali%20complex%20Shastri%20bridge!5e0!3m2!1sen!2sin!4v1741628453502!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bengaluru Map"
              ></iframe>

              <div className="absolute top-4 left-4 z-10">
                <a
                  href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

