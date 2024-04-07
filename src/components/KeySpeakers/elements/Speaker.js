import React from "react";

const Speaker = ({ payload, setSession }) => {
  const { link, title, thumb } = payload;

  return (
    <li className="c-key-speakers__speaker" style={{ cursor: `url(${thumb.src}), pointer` }}>
      <a className="c-key-speakers__speaker__wrapper" href={link} title={title} onMouseEnter={() => setSession(payload.session)}>
        <h2 className="c-key-speakers__speaker__title">
          {title}
        </h2>
      </a>
    </li>
  );
}

export default Speaker;
