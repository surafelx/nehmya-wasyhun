import { Cursor, Footer, Loader, Navbar } from './components';
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
      <main id="main" className="overflow-y-auto overflow-x-hidden h-screen">
        <AnimatePresence initial={false}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}

export default App;
