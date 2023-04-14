import AboutSection from "../../Shared/AboutSection";
import AboutCarts from "./AboutCarts";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-10">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col mb-[8rem]">
            <AboutCarts />
          </div>

          {/* about text */}
          <AboutSection />
        </div>
      </section>
    </>
  );
}

export default About;
