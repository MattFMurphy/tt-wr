import React from "react";

const Session = ({ payload }) => {
  const { link, title, image, thumb, time } = payload;

  console.log(thumb.src);

  return (
    <div className="c-featured-sessions__session" style={{ cursor: `url(${thumb.src}), pointer` }}>
      <a className="c-featured-sessions__session__image" href={link}>
        <img src={image.src} alt={image.alt} />
      </a>

        <h2 className="c-featured-sessions__session__title">
          <a href={link} title={title}>
            {title}
          </a>
        </h2>

      <a href={link} className="c-featured-sessions__session__time text text--large">{time}</a>
    </div>
  );
};

export default Session;
