import Image from "next/image";
import "./footer.css";
import Logo from "../../public/logo1.png";
import Location from "../../public/location.svg";
import Mail from "../../public/mail.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <main className="container container-footer">
        <section className="bLogo">
          <Link href="/">
            <Image src={Logo} alt="BidEx logo" />
          </Link>
        </section>
        <section className="navs">
          <section>
            <h3>Register</h3>
            <ul>
              <li>
                <h3>BDC</h3>
              </li>
              <li>
                <h3>Nigerian Applicant</h3>
              </li>
              <li>
                <h3>Foreign Applicant</h3>
              </li>
            </ul>
          </section>
          <section>
            <h3>Enquiries</h3>
            <h3>Newsletter</h3>
            <h3>Careers</h3>
            <h3>Blog</h3>
          </section>
        </section>
        <section>
          <h3>Customer Support</h3>
          <h3>Terms of service</h3>
        </section>
        <section>
          <article className="footerEnd">
            <div>
              <Image src={Location} alt="location icon" />
            </div>
            <h2>8502 Preston Rd. Inglewood, Maine 98380, USA</h2>
          </article>
          <article className="footerEnd">
            <div>
              <Image src={Mail} alt="mail icon" />
            </div>
            <h2>support@bidex.com</h2>
          </article>
        </section>
      </main>
      <p>© Copyright 2024, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
