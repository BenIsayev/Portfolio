import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    const isScrollEnabled = sessionStorage.getItem('isScrollEnabled');
    if (isScrollEnabled) handleClassFlow();
  });

  const handleClassFlow = () => {
    sessionStorage.setItem('isScrollEnabled', true);
    document.body.classList.add('scroll-enable');
    document.querySelectorAll('.hidden').forEach((element) => {
      element.classList.remove('hidden');
    });

    document.getElementById('about').scrollIntoView();
  };
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<HomePage handleClassFlow={handleClassFlow} />}
        />
      </Routes>
    </div>
  );
}

export default App;
