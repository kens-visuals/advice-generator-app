import { useState, useEffect } from 'react';

// assets
import mobileDivider from 'images/pattern-divider-mobile.svg';
import desktopDivider from 'images/pattern-divider-desktop.svg';

export default function useWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl = windowWidth >= 810 ? desktopDivider : mobileDivider;

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return imageUrl;
}
