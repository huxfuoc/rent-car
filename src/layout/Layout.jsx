import 'src/css/Layout.scss';
import Sidebar from 'src/components/Sidebar';
import Header from 'src/components/Header';
import { AppRouter } from 'src/routing/Router';

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
