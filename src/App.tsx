
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import PageLoad from 'components/PageLoad';
import { ContextProvider } from 'context/contextProvider';
import React, { useContext } from 'react';
import Router from 'router/Router';

function App() {

  const { pageLoad, setPageLoad } = useContext(ContextProvider);

  React.useEffect(() => {

    const pageLoadControl = () => {
      setPageLoad({ pageLoad: true });
    }

    window.addEventListener('popstate', pageLoadControl);

    return () => {
      window.removeEventListener('popstate', pageLoadControl);
    };

  }, []);

  return (
    <>
      {
        pageLoad.pageLoad ?
          <PageLoad />
          :
          <>
            <Navbar />
            <Router />
            <Footer />
          </>
      }
    </>
  );
}

export default App;
