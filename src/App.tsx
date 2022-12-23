import { Cursor, Loader, Navbar } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { WorkPage } from './pages';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        {isLoading ? (
          <Loader
            isLoading={isLoading}
            setIsLoading={(state: boolean) => setIsLoading(state)}
          />
        ) : null}
      </AnimatePresence>
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
