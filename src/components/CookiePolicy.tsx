import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
   const timeout = setTimeout(() => {
    setShow(true)
   }, 3000);

   return () => clearTimeout(timeout)
  }, [])
  return show ? (
    <section className={`fixed inset-0 z-9999 bg-black/50 bg-opacity-50 duration-500 ease-linear ${show ? 'translate-y-0' : '-translate-y-full'}`}>
    <section className="bg-white w-full flex gap-5 md:flex-row flex-col items-center px-4 py-3 absolute bottom-0">
      <div className="flex gap-6 items-center md:w-[80%]">
        <span className="p-2 rounded-full bg-primary/10 text-primary"><FaCookieBite size={36} /></span>
        <p>
          We use cookie policy to improve our website. By using the site, you
          consent to cookie use. We respect your privacy and do not share your
          data without consent. Read our{" "}
          <span>
            <Link to={`/privacy`}>Privacy Policy</Link>
          </span>{" "}
          for details. <br /> <br />
          By clicking "I Agree," you acknowledge that you have read and agree to
          our terms and policies.
        </p>
      </div>
      <div className="ms-auto">
        <button className="rounded-full px-6 py-2 text-white hover:opacity-95 border-none bg-[#01126C]" onClick={() => setShow(false)}>
          I agree
        </button>
      </div>
    </section>
    </section>
  ) : null;
};

export default CookiePolicy;
