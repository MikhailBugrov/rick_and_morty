import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import Navigate from "./components/navigate";
import Footer from "./components/footer";
import CharactersList from "./pages/characterPage/charactersList";
import CharacterDetails from "./pages/characterPage/characterDetails";
import EpisodesList from "./pages/episodePage/episodesList";
import EpisodeDetails from "./pages/episodePage/episodeDetails";
import LocationsList from "./pages/locationPage/locationsList";
import LocationDetails from "./pages/locationPage/locationDetails";
import LiveOrDead from "./pages/liveOrDeadPage";
import Page404 from "./pages/404Page";

const App = () => (
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

export default App;
