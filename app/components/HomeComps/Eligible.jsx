import Image from "next/image";
import "./eligible.css";
import PTA from "../../../public/pta.svg";
import BTA from "../../../public/bta.svg";
import Handshake from "../../../public/handshake.svg";
import Hospital from "../../../public/hospital.svg";
import School from "../../../public/school.svg";

const Eligible = () => {
  return (
    <main className="container elige">
      <h1>Eligible Invisible FX transactions</h1>
      <section className="eligTabs">
        <section className="eligTab">
          <article>
            <Image src={PTA} alt="PTA" />
          </article>
          <h2>Personal Travel Allowance (PTA)</h2>
          <article className="eli">
            <p>
              Nigerians traveling abroad for personal reasons with a return
              flight ticket can apply for PTA
            </p>
            <button className="outline-btn">Apply now</button>
          </article>
        </section>
        <section className="eligTab">
          <article>
            <Image src={BTA} alt="PTA" />
          </article>
          <h2>Business Travel Allowance (BTA</h2>
          <article className="eli">
            <p>
              Nigerians traveling abroad for business trips with a return flight
              ticket can apply for BTA
            </p>
            <button className="outline-btn">Apply now</button>
          </article>
        </section>
        <section className="eligTab">
          <article>
            <Image src={Hospital} alt="Hospital fees" />
          </article>
          <h2>Medical Fees</h2>
          <article className="eli">
            <p>Apply to pay for your foreign medical bills </p>
            <button className="outline-btn">Apply now</button>
          </article>
        </section>
        <section className="eligTab">
          <article>
            <Image src={School} alt="School fees" />
          </article>
          <h2>School Fees</h2>
          <article className="eli">
            <p>
              Request FX for the purpose of paying your international school
              fees.
            </p>
            <button className="outline-btn">Apply now</button>
          </article>
        </section>
        <section className="eligTab">
          <article>
            <Image src={Handshake} alt="Handshake" />
          </article>
          <h2>Purchase/Resell Naira</h2>
          <article className="eli">
            <p>
              Available for tourists , expatriates and returnees from Diaspora
              .Exchange FX for local currency and vice versa.
            </p>
            <button className="outline-btn">Apply now</button>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Eligible;
