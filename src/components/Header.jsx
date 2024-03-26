import 'src/css/Header.scss'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation("global")
    return (
        <div className='top-header'>
            <div className='search-bar'>
                <input id='search-input' placeholder={t("header.search")}></input>
                <img className='search-icon' src='./src/assets/search-ico.png' alt='tìm kiếm' />
            </div>
            <div className='right-side-header'>
                <div className='notification'>
                    <button className='btn-noti'>
                        <img className='noti-ico' src='./src/assets/noti-ico.png' alt='thông báo' />
                        <span className="notification-badge"></span>
                    </button>
                    <img className='avatar' src='./src/assets/avatar.png' alt='avatar' />
                </div>

            </div>
        </div>
    )
}

export default Header
