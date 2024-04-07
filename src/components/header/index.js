import React, { useEffect, useState } from "react";

const Header = () => {
  const scrollThreshold = 400;

  const scrollThresholdEnd = 800;

  const minImageWidth = 406;

  const [heroExpanded, setHeroExpanded] = useState(false);

  const [endExpanded, setEndExpanded] = useState(false);

  const [calculatedWidth, setCalculatedWidth] = useState(`${minImageWidth}px`);

  const [calculatedHeroTopMargin, setCalculatedHeroTopMargin] = useState(`0px`);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Does scroll exceed threshhold y
      if (scrollPosition > scrollThreshold) {
        setHeroExpanded(true);
      } else {
        setHeroExpanded(false);
      }

      // Have we gone past max expansion point
      if (scrollPosition > scrollThresholdEnd) {
        setEndExpanded(true);
      } else {
        setEndExpanded(false);
      }

      setCalculatedWidth(calcWidth(window.scrollY));

      if (heroExpanded && !endExpanded) {
        console.log(heroExpanded, !endExpanded)
      }

      console.log(scrollPosition)
      if (scrollPosition > scrollThreshold && scrollPosition < scrollThresholdEnd) {
        setCalculatedHeroTopMargin(calcTopMargin(window.scrollY));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calcWidth = (yPosition) => {
    const tot = scrollThresholdEnd - scrollThreshold;

    const progress = yPosition - scrollThreshold;

    const newWidth = minImageWidth + ((progress / tot) * minImageWidth);

    return `${newWidth}px`;
  }

  const calcTopMargin = (yPosition) => {
    return `${yPosition - scrollThreshold}px`;
  }

  const heroStyles = {
    width: heroExpanded ? calculatedWidth : `${minImageWidth}px`
  }

  return (
    <header className="c-header">
      <div className="o-wrapper">

        <h1 className="c-header__title">
          Welcome to <i>Food & Drink</i> Conference 2024!

          <span className={`c-header__hero ${heroExpanded ? 'c-header__hero--expanded' : ''} ${endExpanded ? 'c-header__hero--expanded--end' : ''}`}>
            <span className="c-header__hero__wrapper" style={heroStyles}>
              <img src='images/heroes/hero.jpg' alt='Header Image' />
            </span>
          </span>
        </h1>

      </div>
    </header>
  )
}

export default Header;
