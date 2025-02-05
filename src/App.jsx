import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Pageloader from './components/Pageloader';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5-second loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className='w-full overflow-hidden'>
      {/* Show Pageloader only when isLoading is true */}
      {isLoading && <Pageloader />}

      {/* Show the rest of the app only when isLoading is false */}
      {!isLoading && (
        <>
          <ToastContainer />
          <Header />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;