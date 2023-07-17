import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, PortalPlain } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portal-plain" Component={PortalPlain} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
