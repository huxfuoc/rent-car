import { Link, useLocation } from 'react-router-dom';
import '../css/Sidebar.scss'
import { appRoutes } from '../routing/Routes'

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
