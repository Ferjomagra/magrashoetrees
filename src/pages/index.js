//El inicio de la página, foto/video de presentación, información que lleve a las demás páginas
import React, { useState } from 'react';
// import {Route, IndexRoute} from 'react-router';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import IndexView from '../components/IndexView';
import Navbar from '../components/Navbar';
import OurShoeTrees from '../components/OurShoeTrees';
import OurWoods from '../components/OurWoods';
import Sidebar from '../components/SideBar';

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <IndexView/>
            <OurShoeTrees/>
            <OurWoods/>
            <ContactUs/>
            <Footer/> */}

        </>
    )
}

export default Home


//Hay tres tipos de links de reidrección
//1. El link de redirección sin recargar (styled(LinkR)) que viene de react-router-dom
//2. La redirección de con recargo de página (con la etiqueta a).
//3. Redirección a una sección de la misma página (styled(LinkS)).