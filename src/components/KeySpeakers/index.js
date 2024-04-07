import React, { useState } from "react";
import speakers from '../../json/key-speakers.json';
import Speaker from "./elements/Speaker";


const KeySpeakers = () => {
  // Piece of state to store the currently selected session
  const [session, setSession] = useState(null);

  return (
    <section className="c-key-speakers">
      <h3 className="text text--large text--light c-key-speakers__heading" role="heading">Key Speakers</h3>

      <div className="c-key-speakers__wrapper">
        {/*
          The details panel on the left, uses date from session state.
          If no session is loaded, just display the placeholder image.
        */}
        <aside className="c-key-speakers__left">
          <a className="c-key-speakers__session" href="#" id="speaker-session-details">
            {session ? (
              <>
                <div className="c-key-speakers__session__image">
                  <img src={session.image.src} alt={session.image.alt} aria-describedby="session-description" />
                </div>

                <div className="c-key-speakers__session__details">
                  <h2 className="text text--light-white">Session</h2>

                  <p className="c-key-speakers__session__text text--white" id="session-description">{session.title}</p>
                </div>
              </>
            ) : <img src='images/key-speakers/speaker-placeholder.jpg' alt='Key speakers' />}
          </a>
        </aside>

        {/* List of speakers */}
        <ul className="c-key-speakers__list">
          {speakers.map(speaker => <Speaker
            payload={speaker}
            setSession={setSession}
            key={`speaker--${speaker.id}`}
          />)}
        </ul>
      </div>
    </section>
  );
};

export default KeySpeakers;
