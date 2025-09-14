import { useEffect } from 'react';
import { restaurantConfig } from '../config/restaurant';

export const useTheme = () => {
  useEffect(() => {
    // Remove any existing theme links
    const existingThemeLinks = document.querySelectorAll('link[data-theme]');
    existingThemeLinks.forEach(link => link.remove());

    // Create and append new theme CSS link
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = `/themes/${restaurantConfig.theme_name}.css`;
    themeLink.setAttribute('data-theme', restaurantConfig.theme_name);
    
    document.head.appendChild(themeLink);
  }, []);

  return {
    restaurantName: restaurantConfig.res_name,
    themeName: restaurantConfig.theme_name
  };
};
