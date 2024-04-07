import FeaturedSessions from './FeaturedSessions';
import KeySpeakers from './KeySpeakers';
import Header from './header';

function App() {
  return (
    <>
      <Header />

      <main className="o-wrapper">
        <FeaturedSessions />
        <br />
        <br />
        <br />

        <KeySpeakers />

        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default App;
