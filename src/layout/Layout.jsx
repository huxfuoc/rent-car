import './Layout.scss';
import { BrowserRouter as Routing } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Router from '../routing/Router';

const Layout = () => {

    return (
        <>
            <div className='dashboard'>
                <Routing>
                    <div className='l'>
                        <Sidebar />
                    </div>
                    <div className='r'>
                        <Header />
                        <Router />
                    </div>
                </Routing>
            </div>
        </>
    )
}

export default Layout
