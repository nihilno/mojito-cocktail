import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function AboutUs() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    aboutTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: "expo.out",
        yPercent: 100,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.04,
          ease: "power1-inOut",
        },
        "-=1",
      );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters
              <span className="text-white"> &mdash; </span>from muddle to
              garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail &mdash; from the first muddle to the final garnish. That
              care is what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="text-xl font-bold md:text-3xl">
                <span>4.5</span>/5
              </p>
              <p className="text-white-100 text-sm">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="images/abt1.png" alt="Grid image 1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="images/abt2.png" alt="Grid image 2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="images/abt5.png" alt="Grid image 5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="images/abt3.png" alt="Grid image3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="images/abt4.png" alt="Grid image 4" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
