import React from "react";

const Session = ({ payload }) => {
  const { link, title, image, thumb, time } = payload;

  console.log(thumb.src);

  return (
    <li className="c-featured-sessions__session" style={{ cursor: `url(${thumb.src}), pointer` }}>
      <a className="c-featured-sessions__session__wrapper" href={link} title={title}>
        <div className="c-featured-sessions__session__image" href={link}>
          <img src={image.src} alt={image.alt} />
        </div>

        <h2 className="c-featured-sessions__session__title">
          {title}
        </h2>

        <div className="c-featured-sessions__session__time text text--large">{time}</div>
      </a>
    </li>
  );
};

export default Session;
