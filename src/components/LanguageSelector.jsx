import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isTranslated, setIsTranslated] = useState(false);

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsTranslated(prevState => !prevState);
    };

    return (
        <div className='LanguageSelector'>
            <input
                type="checkbox"
                checked={isTranslated}
                onChange={toggleLanguage}
                id="toggle-checkbox"
            />
            <label htmlFor="toggle-checkbox" className="slider"></label>
        </div>
    );
}
export default LanguageSelector;
