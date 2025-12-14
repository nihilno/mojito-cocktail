import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { sliderLists } from "../lib/constants";

function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      ".cocktail img",
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
    );

    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" },
    );

    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  const totalSliders = sliderLists.length;
  function goToSlide(index: number) {
    const newIndex = (index + totalSliders) % totalSliders;
    setCurrentIndex(newIndex);
  }

  function getCocktailAt(indexOffset: number) {
    return sliderLists.at(
      (currentIndex + indexOffset + totalSliders) % totalSliders,
    );
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="Left Leaf"
        className="absolute bottom-0 left-0 w-[25vw] max-w-80"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="Right Leaf"
        className="absolute top-0 right-0 w-[20vw] max-w-80"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((listItem, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              className={`${isActive ? "border-white text-white" : "border-white/50 text-white/50"}`}
              key={listItem.id}
              onClick={() => goToSlide(index)}
            >
              {listItem.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail?.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="Right Arrow"
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out hover:scale-125"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail?.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="Left Arrow"
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out hover:scale-125"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail?.image}
            alt={currentCocktail?.name || "Cocktail"}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail?.name || "--"}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail?.title || "--"}</h2>
            <p>{currentCocktail?.description || "--"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
