import React from 'react';
import { MainRouter } from './routing/Router'
import LanguageSelector from './components/LanguageSelector';

const App = () => {
    return (
        <div>
            <MainRouter />
            <LanguageSelector />
        </div>
    );
};
export default App;
