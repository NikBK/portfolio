import { useEffect, useState } from 'react';
import './App.css';
import { About, ContactMe, Footer, Header, HomePage, Logo, SideProjects, Skills } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return <>
    {
      loading ? <div className='loading-logo'><Logo /></div> :
        <div className="App">
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
