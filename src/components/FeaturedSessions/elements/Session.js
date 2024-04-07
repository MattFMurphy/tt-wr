import React from "react";

/**
 *
 * @param {Object} payload - Represents one session
 * @returns A row in the featured sessions component
 */
const Session = ({ payload }) => {
  const { link, title, image, thumb, time } = payload;

  return (
    <li className="c-featured-sessions__session" style={{ cursor: `url(${thumb.src}), pointer` }}>
      <a className="c-featured-sessions__session__wrapper" href={link} title={title} role="button">
        <div className="c-featured-sessions__session__image" href={link}>
          <img src={image.src} alt={image.alt} />
        </div>

        <h2 className="c-featured-sessions__session__title">
          {title}
        </h2>

        <p className="c-featured-sessions__session__time text text--large">{time}</p>
      </a>
    </li>
  );
};

export default Session;
