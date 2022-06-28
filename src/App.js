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
    document.querySelectorAll('.skill-icon').forEach((element) => {
      element.classList.add('fade');
    });

    if (window.location.pathname === '/') {
      document.querySelector('.my-img').classList.add('slide');
      document.querySelector('.desc').classList.add('slide');

      document.getElementById('about').scrollIntoView();
    }
  };

  const scrollToContact = () => {
    handleClassFlow();
    document.getElementById('contact').scrollIntoView();
  };

  const scrollToProjects = () => {
    handleClassFlow();
    document.getElementById('projects').scrollIntoView();
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              handleClassFlow={handleClassFlow}
              scrollToContact={scrollToContact}
              scrollToProjects={scrollToProjects}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
