import 'src/css/Header.scss'
import notiIcon from 'src/assets/noti-ico.png'
import avatar from 'src/assets/avatar.png'
import searchIcon from 'src/assets/search-ico.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const Header = () => {
    const { t } = useTranslation("global")
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <div className='top-header'>
            <div className='left-side-header'>
                <div className='search-bar'>
                    <input id='search-input' placeholder={t("header.search")}></input>
                    <img className='search-icon' src={searchIcon} alt='tìm kiếm' />
                </div>
            </div>
            <div className='right-side-header'>
                <div className='notification'>
                    <button className='btn-noti'>
                        <img className='noti-ico' src={notiIcon} alt='thông báo' />
                        <span className="notification-badge"></span>
                    </button>

                    <div class="dropdown">
                        <button className='btn-dropdown'><img className='avatar' src={avatar} alt='avatar' /></button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Link 1</a>
                            <a href="#" class="dropdown-item">Link 2</a>
                            <a href="#" class="dropdown-item">Link 3</a>
                            <div class="dropdown-divider"></div>
                            <Link to="#" onClick={handleLogout} className="dropdown-item separate-link">
                                Đăng xuất
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
