import { Link, useLocation } from 'react-router-dom';
import '../css/Sidebar.scss'

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
                    <li>
                        <SidebarLink to="/" imageSrc='src/assets/1.png' altText='dashboard'>Dashboard</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/customer" imageSrc='src/assets/2.png' altText='customer'>Customer</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/categories" imageSrc='src/assets/3.png' altText='categories'>Categories</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/manager" imageSrc='src/assets/4.png' altText='car'>Car manager</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/history" imageSrc='src/assets/5.png' altText='history'>Orders history</SidebarLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
