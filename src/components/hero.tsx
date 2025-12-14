import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const startValue = isSmallScreen ? "top 50%" : "center 60%";
    const endValue = isSmallScreen ? "148% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current!, {
          currentTime: videoRef.current!.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title uppercase">Marina</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="Left Leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="Right Leaf"
          className="right-leaf"
        />

        <div className="body">
          <img src="/images/arrow.png" alt="arrow" />

          <div className="content">
            <div className="hidden space-y-5 md:block">
              <p>Relaxed. Tropical. Inviting.</p>
              <p className="subtitle text-center">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle text-center">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <section className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </section>
    </>
  );
};

export default Hero;
