import {
  Instagram,
  Facebook,
  Globe,
  Linkedin,
  Apple,
  Play,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1f7d] text-white px-6 md:px-20 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="bg-white text-[#1b1f7d] font-bold rounded-md px-2 py-1">
              D
            </div>
            <span>
              Duty <span className="font-normal">Doctor</span>
            </span>
          </div>
          <div>
            <h4 className="mb-2 font-medium">Connect with us</h4>
            <div className="flex gap-4 text-lg">
              <Instagram size={20} />
              <Facebook size={20} />
              <Globe size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-medium">Download the app</h4>
            <div className="flex gap-4 text-2xl">
              <Apple size={24} />
              <Play size={24} />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Employer home</a>
            <a href="#">Sitemap</a>
            <a href="#">Credits</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Help center</a>
            <a href="#">Notices</a>
            <a href="#">Grievances</a>
            <a href="#">Report</a>
            <a href="#">Issue</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Trust & safety</a>
            <a href="#">Fraud alert</a>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
