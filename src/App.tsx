import { Routes, Route } from 'react-router-dom';

import HomePage from './features/homePage';
import Navigate from './features/navigate';
import Footer from './features/footer';
import CharactersList from './features/charactersList';
import CharacterDetails from './features/characterDetails';
import EpisodesList from './features/episodesList';
import EpisodeDetails from './features/episodeDetails';
import LocationsList from './features/locationsList';
import LocationDetails from './features/locationDetails';
import LiveOrDead from './features/liveOrDead';
import Page404 from './features/404';

function App() {
  return (
    <>
      <Navigate />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/episodes" element={<EpisodesList />} />
          <Route path="/episodes/:id" element={<EpisodeDetails />} />
          <Route path="/locations" element={<LocationsList />} />
          <Route path="/locations/:id" element={<LocationDetails />} />
          <Route path="/liveordead" element={<LiveOrDead />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

