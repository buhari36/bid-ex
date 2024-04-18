import React from "react";
import "./apply.css";
import Money from "../../../public/money.png";
import Image from "next/image";
import Short from "../../../public/short-arrow.svg";
import Long from "../../../public/long-arrow.svg";

const Apply = () => {
  return (
    <main className="bG">
      <section className="container apply">
        <article>
          <h1>Apply for Valid for Fx transactions </h1>
          <p>Let us connect you with an Authorized FX dealer in your area.</p>
          <button className="main-btn">Get Started</button>
        </article>
        <article className="circleBg">
          <Image
            src={Money}
            alt="Travel around the world with money"
            className="aI"
          />
          <span className="shortA">
            <Image src={Short} alt="short arrow" />
          </span>
          <span className="longA">
            <Image src={Long} alt="Long arrow" />
          </span>
        </article>
      </section>
    </main>
  );
};

export default Apply;
