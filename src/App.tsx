import { Cursor, Loader, Navbar, Popup, ScrollToTop } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AboutPage,
  HomePage,
  CategoryPage,
  NotFound,
  WorkPage,
  CategoryShowcase,
  WorkShowcase,
} from './pages';
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
      <ScrollToTop />
      <Navbar />
      <Cursor />
      <motion.main
        animate={{
          backgroundColor: location.pathname === '/about' ? '#FFF' : '#000',
        }}
        transition={{
          delay: 0.6,
          duration: 0.3,
        }}
        id="main"
        className="overflow-y-auto overflow-x-hidden h-screen scroll-smooth"
      >
        <AnimatePresence initial={false} mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:key" element={<CategoryPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:key" element={<CategoryShowcase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

export default App;
