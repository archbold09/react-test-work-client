
import React from 'react';
import Header from '../../components/Dashboard/Header'
import Footer from '../../components/Dashboard/Footer'

const Layout = ({children})  => {
  return (
    <React.Fragment>
        
    <Header/>

    <main>
        {children}
    </main>
   
    <Footer/>
    </React.Fragment>
  );
}

export default Layout