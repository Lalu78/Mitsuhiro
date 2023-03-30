
import { Routes, Route, } from 'react-router-dom'
import './App.css';
import About from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Mission from './Components/Mission';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';

import { useState } from 'react';
import DealerPopup from './Components/Form/DealerPopup';


function App() {

  const [show, setShow] = useState(false)
  const onCancel = () => {
    setShow(false)
  }


  return (
    <div>
      <Header className='fixed top-0 w-full z-10' />
      <div className='pt-20 md:pt-[100px] min-h-screen '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<Mission />} />
          <Route path="products" element={<Products />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Routes>
        <DealerPopup
          onCancel={onCancel}
          show={show}
        />
        <Footer
          setShow={setShow}
        />
      </div>
    </div>
  );
}

export default App;
