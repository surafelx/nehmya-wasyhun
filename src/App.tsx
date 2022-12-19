import { Navbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WorkPage } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="px-4">
          <Routes>
            <Route path="/" element={<WorkPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
