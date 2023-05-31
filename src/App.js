import { useEffect, useState } from 'react';
import './App.css';
import { About, ContactMe, Footer, Header, HomePage, Logo, SideProjects, Skills } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const handleTheme = () => {
    setDarkTheme(prev => !prev);
  }

  return <>
    {
      loading ? <div className='loading-logo'><Logo /></div> :
        <div className="App" style={{ 'backgroundColor': darkTheme ? "#191919" : "#ffffff" }}>
          <Header handleTheme={handleTheme} darkTheme={darkTheme} />
          <HomePage darkTheme={darkTheme} />
          <About darkTheme={darkTheme} />
          <Skills darkTheme={darkTheme} />
          <SideProjects darkTheme={darkTheme} />
          <ContactMe darkTheme={darkTheme} />
        </div>
    }
  </>
}

export default App;
