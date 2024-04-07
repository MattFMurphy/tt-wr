import React, { useState } from "react";
import speakers from '../../json/key-speakers.json';
import Speaker from "./elements/Speaker";


const KeySpeakers = () => {
  const [session, setSession] = useState(null);

  return (
    <section className="c-key-speakers">
      <h3 className="text text--large text--light c-key-speakers__heading">Key Speakers</h3>

      <div className="c-key-speakers__wrapper">
        <aside className="c-key-speakers__left">
          <a className="c-key-speakers__session" href="#">
            {session ? (
              <>
                <div className="c-key-speakers__session__image">
                  <img src={session.image.src} alt={session.image.alt} />
                </div>

                <div className="c-key-speakers__session__details">
                  <h2 className="text text--light-white">Session</h2>

                  <p className="c-key-speakers__session__text text--white">{session.title}</p>
                </div>
              </>
            ) : <img src='images/key-speakers/speaker-placeholder.jpg' alt='Key speakers' />}
          </a>
        </aside>

        <ul className="c-key-speakers__list">
          {speakers.map(speaker => <Speaker payload={speaker} key={`speaker--${speaker.index}`} setSession={setSession} />)}
        </ul>
      </div>
    </section>
  );
};

export default KeySpeakers;
