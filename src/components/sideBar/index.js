import React from "react";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
	ATag,
    SidebarWrapper,
    SidebarMenu,
	SidebarLinkRouter,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
 			<Icon onClick={toggle}>
 				<CloseIcon/>
 			</Icon>
 			<SidebarWrapper>
 				<SidebarMenu>

 					<SidebarLinkRouter to="/Ourcafeteria" onClick={toggle}>LA CAFETERÍA</SidebarLinkRouter>

 					{/* <ATag target="_blank" href="https://res.cloudinary.com/dintair/image/upload/v1686235055/Aroma%20de%20Ja%C3%A9n/carta_Aroma_Jaen.pdf">CARTA</ATag> */}
					<ATag href="/ContactUs">Contáctanos</ATag>

					<SidebarLinkRouter to="/OurCoffee" onClick={toggle}>NUESTRO CAFÉ</SidebarLinkRouter>

					<SidebarLinkRouter to="/AboutUs" onClick={toggle}>SOBRE NOSOTROS</SidebarLinkRouter>

				</SidebarMenu>

				<SideBtnWrap>
					{/* <SidebarRoute target='_blank' href='https://res.cloudinary.com/dintair/image/upload/v1686235055/Aroma%20de%20Ja%C3%A9n/carta_Aroma_Jaen.pdf'>Nuestra carta</SidebarRoute> */}
					<SidebarRoute href='/ContactUs'>Contáctanos</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper> 

 		</SidebarContainer>
    )
}

export default Sidebar;