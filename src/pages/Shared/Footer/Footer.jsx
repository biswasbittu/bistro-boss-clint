import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:flex h-60">
      <div className="bg-[#1F2937] md:w-1/2">
        <div className="container -auto  py-8">
          <div className="flexjustify-center">
            {/* Left section - Contact information */}
            <div className="w-full text-center text-white md:w-auto mb-4 md:mb-0">
              <div className="  text-white font-semibold text-2xl">
                Contact Us
              </div>
              <div className="text-white mt-4">
                <p className="">Email: example@example.com</p>
                <p className="">Phone: 123-456-7890</p>
                <p className="">Address: 123 Street, City</p>
                <p>
                  Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111827] md:w-1/2">
        <div className="container mx-auto ">
          <div className="flex flex-wrap md:py-20 py-14 px-20 justify-center">
            {/* Right section - Social media links */}
            <div className="w-full md:w-auto text-center ">
              <div className="text-white font-semibold text-2xl">Follow US</div>
              <p className="text-white">Join us on social media</p>
              <div className="flex space-x-4 mt-2 ms-6 ">
                <FaFacebookF className="text-gray-400 hover:text-gray-200 text-xl" />
                <FaTwitter className="text-gray-400 hover:text-gray-200 text-xl" />
                <FaInstagram className="text-gray-400 hover:text-gray-200 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
