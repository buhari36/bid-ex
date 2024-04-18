import Image from "next/image";
import "./about-b.css";
import Clock from "../../../public/clock.svg";

const AboutB = () => {
  return (
    <main className="bGB">
      <section className="aboutBidex">
        <article>
          <Image src={Clock} alt="Clock icon " />
        </article>
        <h1>About Bidex</h1>
        <p>
          Bidex is an online platform that connects valid for FX transactions
          with Authorized dealers in Nigeria. Enjoy seamless access to PTA, BTA,
          Medical bills and School fees.
        </p>
        <button className="outline-btn">Get Started</button>
      </section>
    </main>
  );
};

export default AboutB;
