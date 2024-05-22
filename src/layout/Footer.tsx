// background: linear-gradient(164.05deg, #36ACA0 -40.68%, #01126C 114.35%);
import { FaFacebookSquare } from "react-icons/fa";
import LogoImg from "../assets/logo/ibloom2 4.png";
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#36ACA0] from-[-40.68%] to-[#00112c] to-[114.35%] text-white px-10 py-10 border-t-gray-400">
      <section className="container mx-auto lg:max-w-7xl 2xl:max-w-full max-w-screen-2xl 2xl:px-[12rem]">
        <div className="grid text-sm grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 border-stroke border-b pt-4 pb-6">
          {/* Column 1: Logo and Social Links */}
          <div className="mb-6 col-span-2">
            <img src={LogoImg} alt="iBloom-logo" className="h-14 mb-3" />
            <p>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt is nisi ut aliquip ex ea commodo
              consequat
            </p>
          </div>

          {/* Column 2: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2">Our Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Learning
                </a>
              </li>
              <li>
                <a href="/parents" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Parents
                </a>
              </li>
              <li>
                <a href="/teachers" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Teachers
                </a>
              </li>
              <li>
                <a href="/children" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Students
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-[#fefefe]/90 hover:text-[#fefefe]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-services" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  Terms of Service
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>

          {/* Column 5: Newsletter*/}
          <div className="">
            <h3 className="text-md font-bold mb-1">Socials</h3>

            <p className="mt-2">P: +1 (443) 707-7208</p>
            <p className="mt-2 mb-3">E: support@ibloom.com</p>
            <ul className="space-x-4 flex">
              <li>
                <a href="#" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  <FaFacebookSquare size={16} />
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-[#fefefe]/90 hover:text-[#fefefe]"
                >
                  <FaSquareXTwitter size={16} />
                </a>
              </li>
              <li>
                <a href="#" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  <FaSquareInstagram size={16} />
                </a>
              </li>
              <li>
                <a href="#" className="text-[#fefefe]/90 hover:text-[#fefefe]">
                  <FaYoutube size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 flex justify-center items-center">
          <p>Copyright © 2024 IBloom. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
