import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import styles from '../App.module.css';

export default function Layout() {
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Stop scrolling while loading
    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, [loading]);

  // Scroll to top on route change (unless we are scrolling to a section)
  useEffect(() => {
    if (!location.state?.scrollTo && window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={styles.appContainer} style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s' }}>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
