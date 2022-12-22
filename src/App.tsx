import { Cursor, Navbar } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { WorkPage } from './pages';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Cursor />
      <main>
        <AnimatePresence initial={false}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<WorkPage />} />
            <Route path="/work/winter" element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
