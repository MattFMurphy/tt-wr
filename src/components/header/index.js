import React, { useEffect, useState } from "react";

const Header = () => {
  const heroThreshold = 400;

  // True when window.scrollY exceeds the hero threshold
  const [heroExpanded, setHeroExpanded] = useState(false);

  // When component mounts - attach this listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Does scroll exceed hero threshold?
      if (scrollPosition > heroThreshold) setHeroExpanded(true);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <header className="c-header">
      <div className="o-wrapper">

        <h1 className="c-header__title">
          Welcome to <i>Food & Drink</i> Conference 2024!

          <span className={`c-header__hero ${heroExpanded ? 'c-header__hero--expanded' : ''}`}>
            <span className="c-header__hero__wrapper">
              <img src='images/heroes/hero.jpg' alt='Header Image' />
            </span>
          </span>
        </h1>

        <h3 className={`c-header__taste ${heroExpanded ? 'c-header__taste--taste-animated' : ''}`}>
          Where Taste meets <i>Innovation</i>
        </h3>
      </div>
    </header>
  )
}

export default Header;
