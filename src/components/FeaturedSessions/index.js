import React from "react";
import sessions from '../../json/featured-sessions.json';
import Session from "./elements/Session";

const FeaturedSessions = () => {
  return (
    <section className="c-featured-sessions">
      <h3 className="text text--large text--light o-section-heading" role="heading">Featured Sessions</h3>

      <ul className="c-featured-sessions__list">
        {sessions.map(session => <Session payload={session} key={`session-${session.id}`} />)}
      </ul>
    </section>
  );
}

export default FeaturedSessions;
