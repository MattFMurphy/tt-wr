import React, { useState } from "react";
import sessions from '../../json/featured-sessions.json';
import Session from "./elements/Session";

const FeaturedSessions = () => {
  console.log(sessions)

  return (
    <section className="c-featured-sessions">
      {/* <img src={`${process.env.PUBLIC_URL}/images/featured-sessions/thumbs/from-farm-to-fork-thumb.jpg`} /> */}
      {sessions.map(session => <Session payload={session} key={`session-${session.id}`} />)}
    </section>
  );
}

export default FeaturedSessions;
