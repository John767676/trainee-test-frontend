import React from 'react';
import './error-find.css'
import {Link} from "react-router-dom";

const ErrorFind:React.FC = () => {
    return (
        <div className='error-find__wrapper'>
            <div className="error-find__container">
                <div className="error-find__img">
                    <img src={require('./pngegg.png')} alt="404-photo"/>
                </div>
                <div className="error-find__title">
                    Запрашиваемая страница не найдена
                </div>
                <div className="error-find__btn-container">
                    <Link to={'/'}>
                        <button className='error-find__btn'>Обратно</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorFind;