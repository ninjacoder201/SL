export const theme = {
  colors: {
    primary: '#0f172a',      // Very dark navy blue - main brand color
    secondary: '#1e293b',    // Dark blue-gray - secondary brand color
    accent: '#166534',       // Forest green - accent color
    background: '#ffffff',   // White background
    surface: '#f8f9fa',      // Light gray for cards/sections
    text: '#1e293b',         // Dark gray for text
    textSecondary: '#64748b', // Medium gray for secondary text
    textLight: '#94a3b8',    // Light gray for muted text
    border: '#e2e8f0',       // Light border color
    error: '#dc2626',        // Red for errors
    warning: '#f59e0b',      // Orange for warnings
    success: '#166534',      // Forest green for success
    
    // Category colors
    wine: '#4c1d95',         // Deep purple for wine
    spirits: '#166534',      // Forest green for spirits
    beer: '#22c55e',         // Bright green for beer
    champagne: '#dc2626',    // Red for champagne
    sake: '#0891b2',         // Cyan for sake
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    secondary: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    surface: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary: '"Playfair Display", Georgia, serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  animation: {
    transition: {
      fast: '0.15s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
  },
};
