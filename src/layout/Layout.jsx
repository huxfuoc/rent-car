import './Layout.scss';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AppRouter from '../routing/AppRouter';

const Layout = () => {

    return (
        <>
            <div className='dashboard'>

                <div className='l'>
                    <Sidebar />
                </div>
                <div className='r'>
                    <Header />
                    <AppRouter />
                </div>
            </div>
        </>
    )
}

export default Layout
