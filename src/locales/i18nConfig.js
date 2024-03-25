import i18n from 'i18next';
import global_en from './en/loginEN.json'
import global_vi from './vi/loginVI.json'


i18n.init({
    resources: {
        en: {
            global: global_en,
            translation: {
                "Main Dashboard": "Main Dashboard",
                "Customer": "Customer",
                "Categories": "Categories",
                "Car Manager": "Car Manager",
                "Orders history": "Oders history"
            }
        },
        vi: {
            global: global_vi,
            translation: {
                "Main Dashboard": "Bảng điều khiển chính",
                "Customer": "Khách hàng",
                "Categories": "Danh mục",
                "Car Manager": "Quản lý xe",
                "Orders history": "Lịch sử đơn hàng"
            }
        },
    },
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;

