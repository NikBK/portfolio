import { useEffect, useState, useContext } from 'react';
import './App.css';
import { About, ContactMe, Footer, Header, HomePage, Logo, SideProjects, Skills } from "./components/index";
import { useTheme } from "./components/context";

function App() {
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return <>
    {
      loading ? <div className='loading-logo'><Logo /></div> :
        <div className={`App ${theme}_App`}>
          <Header />
          <HomePage />
          <About />
          <Skills />
          <SideProjects />
          <ContactMe />
        </div>
    }
  </>
}

export default App;
