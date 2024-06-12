import React from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// images
import logoImg from "../assets/images/other/logo.png";
import twitterLogo from "../assets/images/svg/twitter.svg";
import youtubeLogo from "../assets/images/svg/youtube.svg";
import facebookLogo from "../assets/images/svg/facebook.svg";

const Footer = () => {
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);

  return (
    <footer className="text-regular-16 bg-primary-black-800 py-8 text-white">
      <div className="container">
        <div className="flex-start-between max-540:flex-col max-540:gap-7">
          {/* logo wrapper */}
          <div className="flex flex-col gap-2">
            <Link title="mene market logo" to="/">
              <img
                width={96}
                height={48}
                src={logoImg}
                className="w-24 h-12"
                alt="mene market logo"
              />
            </Link>

            <span className="flex gap-2 opacity-70 font-normal max-768:flex-col">
              <span>© 2023 - 2024</span>
              <span>Mene Market</span>
            </span>
          </div>

          {/* company */}
          <div className="flex flex-col gap-2">
            <h3 className="text-medium-18 text-white">Kompaniya</h3>

            {/* list */}
            <ul className="space-y-2 opacity-70">
              <li>
                <Link to="/">Bosh sahifa</Link>
              </li>

              {isLoggedIn && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}

              <li>
                <Link to="/products/all">Mahsulotlar</Link>
              </li>

              <li>
                <Link to="/contact">Aloqa</Link>
              </li>

              <li>
                <Link>Ommaviy oferta</Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-medium-18 text-white">Aloqa</h3>

            {/* email */}
            <a
              target="_blank"
              className="opacity-70"
              href="mailto:example@email.com"
            >
              example@email.com
            </a>

            {/* telephone number */}
            <a className="opacity-70" href="tel:+998998745678">
              +998 (99)-874-5678
            </a>

            {/* social networks */}
            <ul className="flex space-x-2.5">
              <li>
                <a
                  target="_blank"
                  aria-label="facebook link"
                  href="https://www.facebook.com"
                >
                  <img
                    width={24}
                    height={24}
                    alt="facebook logo"
                    src={facebookLogo}
                    className="w-6 h-6"
                  />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://x.com"
                  aria-label="twitter link"
                >
                  <img
                    width={24}
                    height={24}
                    src={twitterLogo}
                    alt="twitter logo"
                    className="w-6 h-6"
                  />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  aria-label="youtube link"
                  href="https://www.youtube.com/"
                >
                  <img
                    width={24}
                    height={24}
                    src={youtubeLogo}
                    alt="youtube logo"
                    className="w-6 h-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
