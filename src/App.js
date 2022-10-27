
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './shared/theme';
import { GlobalStyles } from './shared/global';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className=""> 
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className=' text-center my-1 bg-success'><Button onClick={toggleTheme} variant="danger">Toggle Theme</Button></div>
    <RouterProvider router = {routes}></RouterProvider>
    
    </ThemeProvider>
    </div>
  );
}

export default App;
