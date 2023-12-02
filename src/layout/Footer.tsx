const Footer: React.FC = () => {
    return (
      <footer className="bg-white text-slate-500 px-10 py-10 border-t-gray-400">
        <section className="container mx-auto">

        
        <div className="mb-6">
         <h4 className="font-bold text-lg mb-2 text-black">ByteDegree</h4>
         <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>

        <div className="grid text-sm grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 border-stroke border-b pt-4 pb-6">
          {/* Column 1: Logo and Social Links */}
          <div className="col-span-1  md:col-span-2 lg:col-span-1">
          <h3 className="font-bold mb-2 text-black">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500">About us</a></li>
              <li><a href="#" className="text-slate-500">Blog</a></li>
              <li><a href="#" className="text-slate-500">Careers</a></li>
              <li><a href="#" className="text-slate-500">Jobs</a></li>
              <li><a href="#" className="text-slate-500">In Press</a></li>
              {/* Add more links */}
            </ul>
          </div>
  
          {/* Column 2: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500">Contact us</a></li>
              <li><a href="#" className="text-slate-500">Online Chat</a></li>
              <li><a href="#" className="text-slate-500">Help center</a></li>
              <li><a href="#" className="text-slate-500">Security</a></li>
              <li><a href="#" className="text-slate-500">Services</a></li>
            </ul>
          </div>
  
          {/* Column 3: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500">Blog</a></li>
              <li><a href="#" className="text-slate-500">FAQ</a></li>
              <li><a href="#" className="text-slate-500">Contact</a></li>
              <li><a href="#" className="text-slate-500">Services</a></li>
              <li><a href="#" className="text-slate-500">Services</a></li>
              {/* Add more links */}
            </ul>
          </div>
          {/* Column 4: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500">Blog</a></li>
              <li><a href="#" className="text-slate-500">FAQ</a></li>
              <li><a href="#" className="text-slate-500">Contact</a></li>
              <li><a href="#" className="text-slate-500">Services</a></li>  
              <li><a href="#" className="text-slate-500">Services</a></li>
              {/* Add more links */}
            </ul>
          </div>
  
          {/* Column 5: Newsletter*/}
          <div className="col-span-2">
            <h3 className="text-md font-bold mb-1 text-black">Newsletter</h3>
            <p className="text-slate-600 mb-4">Subscribe to our newsletter for updates.</p>
            <div className='relative'>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-3 bg-gray-200 border-primary border-2  dark:bg-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
            <button className="absolute right-1 top-2/4 -translate-y-1/2 disabled:bg-primary/60 bg-primary/90 dark:bg-slate-100 hover:bg-primary py-1 px-2 rounded-md text-white focus:outline-none">
              Subscribe
            </button>
            </div>
           
          </div>
        </div>

        <div className="pt-4 flex justify-between md:flex-row flex-col items-center">
        <ul className="flex items-center gap-3 flex-wrap">
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
            <li>Terms of Use</li>
        </ul>
        <p>© 2023 All Rights Reserved</p>
        </div>
        </section>
      </footer>
    );
  };
  
  export default Footer;