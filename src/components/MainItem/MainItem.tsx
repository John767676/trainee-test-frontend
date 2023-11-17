import React from 'react';
import {IUser} from "../../store/userSlice/user-types";
import './main-item.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import {Link} from "react-router-dom";


interface IMainItemProps {
    data: IUser
}

const MainItem:React.FC<IMainItemProps> = ({data}) => {

    const {id,birthday,firstName,lastName,userTag,position,avatarUrl} = data

    const {filterMenu} = useAppSelector(state => state.filter)

    const date = birthday.substr(8,2)+'/'+birthday.substr(5,2)+'/'+birthday.substr(0,4)

    return (
        <Link to={`/${id}`}>
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
                {
                    filterMenu === 'birthday' ? (
                        <p className="main__user-birthdate">{date}</p>
                    ): null
                }
            </div>
        </Link>
    );
};

export default MainItem;