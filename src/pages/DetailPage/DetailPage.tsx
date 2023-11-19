import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import {useNavigate, useParams} from "react-router-dom";
import './detail-page.css'
import {IUser} from "../../store/userSlice/user-types";
import ErrorFind from "../ErrorFind/ErrorFind";


const DetailPage: React.FC = () => {

    const {id} = useParams()
    const items: IUser[] = JSON.parse(localStorage.getItem('items') || '')
    const navigate = useNavigate()

    const item = items.find(item => item.id === id)

    if (item === undefined) {
        return <ErrorFind/>
    }

    const {position,avatarUrl,lastName,firstName,phone,userTag,birthday} = item

    const phoneNumber = phone.substr(0,2)+' ('+ phone.substr(2,3)+') '+ phone.substr(5,3) + ' '+ phone.substr(8,2)+ ' ' + phone.substr(10,2)
    const date = birthday.substring(8,11) + '/' + birthday.substring(5,7) + '/' + birthday.substring(0,4)

    return (
        <div className='detail__wrapper'>
            <div className="detail__upper-section">
                    <div className="detail__back" onClick={() => navigate(-1)}>
                        <IoIosArrowBack size='50px' className='detail__back-btn'/>
                    </div>
                <div className="detail__upper-content">
                    <img src={avatarUrl} alt='user-picture' className='detail__img'/>
                    <div className="detail__name-container">
                        <p className="detail__name">
                            {firstName + ' ' + lastName}
                        </p>
                        <p className="detail__tag">
                            {userTag}
                        </p>
                    </div>
                    <p className="detail__position">
                        {position}
                    </p>
                </div>
            </div>
            <div className="detail__lower-section">
                <div className="detail__first-container">
                    <p className="detail__birth-date">
                        <CiStar size='24px' className='detail__star'/>
                        {date}
                    </p>
                    <p className="detail__current-age">
                        {new Date().getFullYear() - +date.substring(6,11)} years old
                    </p>
                </div>
                <p className="detail__phone-number">
                    <FiPhone className='detail__phone' size='24px'/>
                    {phoneNumber}
                </p>
            </div>
        </div>
    );
};

export default DetailPage;