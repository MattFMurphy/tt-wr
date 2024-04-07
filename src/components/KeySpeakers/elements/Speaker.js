import React from "react";

/**
 *
 * @param {Object} payload - The speaker object.
 * @param {setSession} setSession - function to update the session state on a parent.
 * @returns
 */
const Speaker = ({ payload, setSession }) => {
  const { link, title, thumb } = payload;

  return (
    <li className="c-key-speakers__speaker" style={{ cursor: `url(${thumb.src}), pointer` }}>
      <a
        className="c-key-speakers__speaker__wrapper"
        href={link}
        title={title}
        // Run set session on mouse enter
        onMouseEnter={() => setSession(payload.session)}
        role="button"
        aria-controls="speaker-session-details"
      >
        <h2 className="c-key-speakers__speaker__title">
          {title}
        </h2>
      </a>
    </li>
  );
}

export default Speaker;
