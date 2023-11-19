import React from 'react';
import './error-page.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getUsers} from "../../store/userSlice/user-slice";

const ErrorPage: React.FC = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='error__wrapper'>
            <div className="error__container">
                <img className='error__img' src={require('./pngwing.png')} alt="ufo-picture"/>
                <h3 className="error__upper-title">
                    Какой-то сверхразум все сломал
                </h3>
                <p className="error__lower-title">
                    Постараемся быстро починить
                </p>
                <div className="error__try-again" onClick={() => dispatch(getUsers('all'))}>
                    <p className="error__try-again-btn">
                        Попробовать снова
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;