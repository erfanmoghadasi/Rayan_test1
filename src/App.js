import { useEffect, useState } from 'react';
// Cookie Seter
import { useCookies } from 'react-cookie';
// routes
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate()

  const [cookie] = useCookies()


    useEffect(() => {
    if(cookie.email === 'abc@mail.com' && cookie.pass === '123456'){
      setIsAuth(true);
      navigate('/dashboard');
    }
  }, [])

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
