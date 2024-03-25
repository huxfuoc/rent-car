import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'src/css/Sidebar.scss'
import { appRoutes } from 'src/routing/Routes'
// import { useTranslation } from 'react-i18next';

const SidebarLink = ({ to, children, imageSrc, altText }) => {
    const location = useLocation();
    return (
        <li>
            <Link to={to} className={location.pathname === to ? 'active' : ''}>
                <img src={imageSrc} alt={altText} />
                {children}
            </Link>
        </li>
    );
};



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div id='logo-icon'>TIIRA</div>
            <nav>
                <ul>
                    {appRoutes.map((route, index) => (
                        <SidebarLink
                            key={index}
                            to={route.layout + route.path}
                            imageSrc={route.icon}
                            altText={route.name}
                        >
                            {route.name}
                        </SidebarLink>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
