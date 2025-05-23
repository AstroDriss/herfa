import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-logo">
          <img
            src="herfa.svg"
            title="herfo - footer"
            width="100px"
            height="100px"
            alt=""
          />
          <p>HERFA</p>
        </div>

        <div className="footer-links mb-4">
          <nav>
            <ul>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/ideas">ideas</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>

          {/* Social media */}
          <ul className="social-media">
            <li>
              <Link
                target="_blank"
                title="tiktok"
                href="https://www.tiktok.com"
              >
                <svg
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                title="instagram"
                href="https://www.instagram.com"
              >
                <svg
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9
                  114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141
                  224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7
                  74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7
                  74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9
                  0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1
                  27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
                  0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1
                  147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37
                  2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2
                  34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8
                  19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7
                  2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
                  9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9
                  132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7
                  29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                title="facebook"
                href="https://www.facebook.com"
              >
                <svg
                  height="22px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M80
                  299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5
                  72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2
                  0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <p className="text-center mt-4">
          &copy; 2025 Herfa All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
