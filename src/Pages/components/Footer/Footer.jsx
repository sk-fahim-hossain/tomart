import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-4 md:p-6 lg:p-10 bg-gray-100 text-black rounded-t-lg mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <nav>
          <header className="footer-title">Services</header>
          <Link to="/about" className="link link-hover">
            Branding
          </Link>
          <Link to="/about" className="link link-hover">
            Design
          </Link>
          <Link to="/about" className="link link-hover">
            Marketing
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
          <Link to="/jobs" className="link link-hover">
            Jobs
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to="/privacypolicy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookiepolicy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>

      <footer className="footer p-4 md:p-6 lg:p-8 border-t bg-amber-300 text-base-content border-[#FF217F] grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <aside className="items-center justify-self-center md:justify-self-start">
          <a className="btn btn-ghost text-xl mx-auto">
            <div className="flex">
              <span className="text-[#FF217F] font-extrabold text-3xl">T</span>
              <span className="text-black font-extrabold text-3xl">-</span>
              <span className="text-black text-3xl">MART</span>
              <span className="text-[#FF217F] text-3xl font-extrabold">.</span>
            </div>
          </a>

          <p className="text-slate-600 md:text-start text-center ml-5">
            T-MART GROUP Ltd. <br />
            Providing reliable quality since 2006
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end justify-self-center md:order-none">
          <div className="grid grid-flow-col gap-4 text-black">
            <a>
              <FaXTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaFacebookF />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
