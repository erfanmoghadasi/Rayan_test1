import { useState } from 'react';
// routes
import Router from './routes';
// context
import UseContextValue from './utils/UseContext';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <UseContextValue values={{isAuth, setIsAuth}} >
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router isAuth={isAuth} />
    </ThemeProvider>
    </UseContextValue>
  );
}
