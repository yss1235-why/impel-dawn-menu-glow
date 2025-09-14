import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { restaurantConfig } from "./config/restaurant";

// Update document title with restaurant name
document.title = `${restaurantConfig.res_name} - Premium Restaurant Menu`;

// Dynamically load theme CSS
const loadTheme = () => {
  // Remove any existing theme links
  const existingThemeLinks = document.querySelectorAll('link[data-theme]');
  existingThemeLinks.forEach(link => link.remove());

  // Create and append new theme CSS link
  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = `/themes/${restaurantConfig.theme_name}.css`;
  themeLink.setAttribute('data-theme', restaurantConfig.theme_name);
  
  document.head.appendChild(themeLink);
};

// Load theme before rendering
loadTheme();

createRoot(document.getElementById("root")!).render(<App />);
