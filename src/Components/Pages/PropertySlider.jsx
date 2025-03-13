import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const properties = [
  {
    id: 1,
    title: "Premium Amenities loaded",
    description:
      "Hanshika Farms strives to fulfill the dream of owning ultra-luxurious cottages for people seeking natural serenity in their private vacation homes. Our fully furnished cottages are the address of luxury and comfort. Check our list of amenities packed in each cottage.",
    image: '/Images/DJI_0768.JPG',
  },
  {
    id: 2,
    title: "Buy-to-Rent",
    description:
      "Buy the cottage today and rent it to us to earn passive income. Hanshika Farms will pay monthly rent against your cottage. Invest, own, and relax. Watch your money grow with Return on investment and rental income.Get High ROI Enquiry Now!",
    image: '/Images/DJI_0743.JPG',
  },
  {
    id: 3,
    title: "Your Staycation Resort",
    description:
      "Hanshika Farms cottages are your retreat home to enjoy luxurious living with family and friends. The nearness to the Ramuji Water Park makes these cottages an ideal staycation resort for weekends, festival breaks, and more. ",
    image: "/Images/DJI_0747.JPG",
  },
  {
    id: 4,
    title: "Garden Facing Cottages",
    description:
      "The company-owned garden spanning across the area of 25,000 sq. ft. in the front of these cottages ensures you enjoy the natural serenity, peace, and the cleanest air to breathe. Relax here in the pure air to revitalize yourself. ",
    image: '/Images/DJI_0804.JPG',
  },
  {
    id: 5,
    title: "Plan Business Expansions",
    description:
      "Company and business owners can invest with us in these cottages to enter the hospitality business. Together we can make tourism a thriving sector and a profit-making venture as these cottages are grabbing eye-balls among investors and end-users alike.",
    image: '/Images/DJI_0770.JPG',
  },
];


const PropertySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 mt-5">
        Dreaming of Owning a Retreat home?
        <br className="hidden sm:block" />Wait Is Over …. Own a Ready-To-Relish Property
      </h2>
      <div className="px-2">
        <Slider {...settings}>
          {properties.map((property) => (
            <div key={property.id} className="px-2 sm:px-3">
              <div className="overflow-hidden border-none shadow-sm rounded-lg bg-white h-full">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                </div>
                <div className="flex flex-row items-start gap-2 sm:gap-4 p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-500">0{property.id}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{property.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-3 sm:line-clamp-4">
                      {property.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PropertySlider

