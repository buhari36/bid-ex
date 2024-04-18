import Image from "next/image";
import "./latest.css";
import Calculator from "../../../public/calculator.png";
import Man from "../../../public/man.png";

const Latest = () => {
  return (
    <main className="container latest">
      <h1>Latest News</h1>
      <p>
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
      </p>
      <section className="latestTabs">
        <article>
          <div>
            <Image src={Calculator} alt="Man pressing a calculator" />
          </div>
          <h6>November 25, 2022</h6>
          <h2>
            A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021
          </h2>
        </article>
        <article>
          <div>
            <Image src={Man} alt="Man holding money" />
          </div>
          <h6>November 25, 2022</h6>
          <h2>
            What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?
          </h2>
        </article>
      </section>
    </main>
  );
};

export default Latest;
