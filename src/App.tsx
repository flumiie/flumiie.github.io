import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, PortalPlain, ScrollingCanvas } from './pages';
import { Navbar } from './components';

import './assets/styles/loading.scss';
import './assets/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/wip/hex-world" Component={null} />
        <Route path="/wip/scrolling-canvas" Component={ScrollingCanvas} />
        <Route path="/wip/portal-plain" Component={PortalPlain} />
        <Route path="/wip/rubiks" Component={null} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
