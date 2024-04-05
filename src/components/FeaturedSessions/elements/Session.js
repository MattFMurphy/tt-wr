import React from "react";

const Session = ({ payload }) => {
  const {link, title, image, thumb, time} = payload
  return (
    <div className="c-featured-sessions__session">
      <a className="c-featured-sessions__session__image" href={link}>
        <img src={image.src} alt={image.alt} />
      </a>

      <a href={link} title={title}>
        <h2 className="c-featured-sessions__session__title">
          {title}
        </h2>
      </a>

      <a href={link} className="c-featured-sessions__session__time o-text o-text--large">{time}</a>
    </div>
  );
};

export default Session;
