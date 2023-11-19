import React from 'react';
import './search-fail.css'

const SearchFail:React.FC = () => {
    return (
        <div className='search-failure__wrapper'>
            <div className="search-failure__container">
                <img className='search-failure__img' src={require('./pngwing.png')} alt="ufo-picture"/>
                <p className="search-failure__lower-title">
                    Мы никого не нашли
                </p>
                <p className="search-failure__try-again-btn">
                    Попробуйте скорректировать запрос
                </p>
            </div>
        </div>
    );
};

export default SearchFail;