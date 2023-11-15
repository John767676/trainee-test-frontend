import React from 'react';
import {IUser} from "../../store/userSlice/user-types";
import './main-item.css'


interface IMainItemProps {
    data: IUser
}

const MainItem:React.FC<IMainItemProps> = ({data}) => {

    const {id,birthday,department,firstName,lastName,phone,userTag,position,avatarUrl} = data

    return (
        <div className='main__item'>
            <div className="main__img">
                <img className='main__user-img' src={avatarUrl} alt="profile-logo"/>
            </div>
            <div className="main__user">
                <div className="main__user-name-container">
                    <p className="main__user-name">
                        {firstName + ' ' + lastName}
                    </p>
                    <p className="main__user-tag">
                        {userTag}
                    </p>
                </div>
                    <p className="main__user-job">
                        {position}
                    </p>
            </div>
        </div>
    );
};

export default MainItem;